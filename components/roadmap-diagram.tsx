"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { useLang } from "@/lib/lang-context"
import { NodePanel } from "@/components/node-panel"
import type { RoadmapData, RoadmapNode } from "@/lib/roadmap-data"
import { getNodeLabel } from "@/lib/roadmap-data"
import { useProgress } from "@/hooks/use-progress"
import { translations } from "@/lib/i18n"

interface RoadmapDiagramProps {
  roadmap: RoadmapData
}

// Status colors are resolved at render time from CSS variables
function getStatusColors(
  status: string,
  cssVars: Record<string, string>,
  checklistProgress: number, // 0-100 percentage from user progress
) {
  const yellow = cssVars["--neon-yellow"] || "#eeff00"
  const green = cssVars["--neon-green"] || "#00ff88"
  const bg = cssVars["--card"] || "#111111"
  const border = cssVars["--border"] || "#444444"
  const fg = cssVars["--foreground"] || "#ededed"

  // If user has marked items as completed, show user progress color
  if (checklistProgress > 0) {
    if (checklistProgress === 100) {
      return {
        fill: green,
        stroke: green,
        text: cssVars["--primary-foreground"] || "#0a0a0a",
      }
    }
    return {
      fill: yellow,
      stroke: yellow,
      text: cssVars["--primary-foreground"] || "#0a0a0a",
    }
  }

  // Fall back to original status colors
  if (status === "done")
    return {
      fill: yellow,
      stroke: yellow,
      text: cssVars["--primary-foreground"] || "#0a0a0a",
    }
  if (status === "in-progress")
    return {
      fill: green,
      stroke: green,
      text: cssVars["--primary-foreground"] || "#0a0a0a",
    }
  return { fill: bg, stroke: border, text: fg }
}

const CANVAS_W = 840
const CANVAS_H = 660

function getNodeCenter(node: RoadmapNode) {
  return { cx: node.x + node.width / 2, cy: node.y + node.height / 2 }
}

function buildPath(from: RoadmapNode, to: RoadmapNode): string {
  const fromBottom = { x: from.x + from.width / 2, y: from.y + from.height }
  const toTop = { x: to.x + to.width / 2, y: to.y }
  const midY = (fromBottom.y + toTop.y) / 2

  if (Math.abs(fromBottom.x - toTop.x) < 20) {
    return `M ${fromBottom.x} ${fromBottom.y} C ${fromBottom.x} ${midY}, ${toTop.x} ${midY}, ${toTop.x} ${toTop.y}`
  }
  return `M ${fromBottom.x} ${fromBottom.y} C ${fromBottom.x} ${fromBottom.y + 30}, ${toTop.x} ${toTop.y - 30}, ${toTop.x} ${toTop.y}`
}

/** Read CSS custom properties from :root at runtime so SVG colors follow the theme */
function useCssVars(keys: string[]): Record<string, string> {
  const [vars, setVars] = useState<Record<string, string>>({})

  useEffect(() => {
    function read() {
      const style = getComputedStyle(document.documentElement)
      const result: Record<string, string> = {}
      for (const key of keys) {
        result[key] = style.getPropertyValue(key).trim()
      }
      setVars(result)
    }
    read()

    // Re-read when the class on <html> changes (dark ↔ light)
    const observer = new MutationObserver(read)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return vars
}

export function RoadmapDiagram({ roadmap }: RoadmapDiagramProps) {
  const { lang } = useLang()
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const { completedChecklist, isLoading } = useProgress()

  const cssVars = useCssVars([
    "--neon-yellow",
    "--neon-green",
    "--neon-blue",
    "--card",
    "--border",
    "--foreground",
    "--primary-foreground",
    "--background",
    "--secondary",
  ])

  const handleNodeClick = useCallback((node: RoadmapNode) => {
    setSelectedNode(node)
  }, [])
  const closePanel = useCallback(() => setSelectedNode(null), [])

  const nodeMap = Object.fromEntries(roadmap.nodes.map((n) => [n.id, n]))

  const yellow = cssVars["--neon-yellow"] || "#eeff00"
  const green = cssVars["--neon-green"] || "#00ff88"
  const svgBg = cssVars["--secondary"] || "#111111"

  return (
    <div className="relative w-full">
      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
          width={CANVAS_W}
          height={CANVAS_H}
          className="mx-auto block max-w-full"
          aria-label="Roadmap diagram"
          role="img"
          style={{ background: svgBg }}
        >
          <defs>
            <marker
              id="arrow-yellow"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill={yellow} />
            </marker>
            <marker
              id="arrow-green"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill={green} />
            </marker>
            <marker
              id="arrow-grey"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path
                d="M0,0 L0,6 L8,3 z"
                fill={cssVars["--border"] || "#444444"}
              />
            </marker>
          </defs>

          {/* Edges */}
          {roadmap.edges.map((edge, i) => {
            const from = nodeMap[edge.from]
            const to = nodeMap[edge.to]
            if (!from || !to) return null

            const stroke =
              from.status === "done"
                ? yellow
                : from.status === "in-progress"
                  ? green
                  : cssVars["--border"] || "#333333"
            const markerId =
              from.status === "done"
                ? "arrow-yellow"
                : from.status === "in-progress"
                  ? "arrow-green"
                  : "arrow-grey"

            return (
              <path
                key={i}
                d={buildPath(from, to)}
                stroke={stroke}
                strokeWidth={from.status === "done" ? 2.5 : 2}
                strokeDasharray={from.status === "todo" ? "6 4" : undefined}
                fill="none"
                markerEnd={`url(#${markerId})`}
                opacity={from.status === "todo" ? 0.4 : 1}
              />
            )
          })}

          {/* Nodes */}
          {roadmap.nodes.map((node) => {
            const label = getNodeLabel(node, lang)

            // Calculate user progress based on checklist items
            const nodeChecklist = completedChecklist[node.id] || []
            const detailKey = node.detailKey
            const checklistItems = translations[lang][
              detailKey + "Checklist"
            ] as unknown as string[]
            const totalItems = Array.isArray(checklistItems)
              ? checklistItems.length
              : 0
            const completedItems = nodeChecklist.length
            const checklistProgress =
              totalItems > 0
                ? Math.round((completedItems / totalItems) * 100)
                : 0

            const {
              fill,
              stroke: baseStroke,
              text,
            } = getStatusColors(node.status, cssVars, checklistProgress)
            const isHovered = hoveredId === node.id
            const stroke = isHovered
              ? cssVars["--foreground"] || "#ffffff"
              : baseStroke
            const strokeW = node.status !== "todo" || isHovered ? 2.5 : 2

            // Word-wrap into max 2 lines
            const words = label.split(" ")
            const lines: string[] = []
            let current = ""
            for (const word of words) {
              if (
                (current + " " + word).trim().length > 22 &&
                current.length > 0
              ) {
                lines.push(current)
                current = word
              } else {
                current = current ? current + " " + word : word
              }
            }
            if (current) lines.push(current)

            const lineH = 16
            const textY =
              node.y + node.height / 2 - (lines.length * lineH) / 2 + lineH / 2

            return (
              <g
                key={node.id}
                className="roadmap-node"
                onClick={() => handleNodeClick(node)}
                onMouseEnter={() => setHoveredId(node.id)}
                onMouseLeave={() => setHoveredId(null)}
                tabIndex={0}
                role="button"
                aria-label={label}
                onKeyDown={(e) => e.key === "Enter" && handleNodeClick(node)}
                style={{ outline: "none" }}
              >
                {/* Glow layer */}
                {(node.status !== "todo" || isHovered) && (
                  <rect
                    x={node.x - 3}
                    y={node.y - 3}
                    width={node.width + 6}
                    height={node.height + 6}
                    rx={2}
                    fill="none"
                    stroke={stroke}
                    strokeWidth={1}
                    opacity={0.25}
                  />
                )}

                <rect
                  x={node.x}
                  y={node.y}
                  width={node.width}
                  height={node.height}
                  rx={2}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={isHovered ? 3 : strokeW}
                />

                {lines.map((line, li) => (
                  <text
                    key={li}
                    x={node.x + node.width / 2}
                    y={textY + li * lineH}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={isHovered && node.status === "todo" ? yellow : text}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "11px",
                      fontWeight: 700,
                    }}
                  >
                    {line}
                  </text>
                ))}

                {node.status === "in-progress" && (
                  <circle
                    cx={node.x + node.width - 10}
                    cy={node.y + 10}
                    r={4}
                    fill={cssVars["--secondary"] || "#0a0a0a"}
                    stroke={green}
                    strokeWidth={1.5}
                  />
                )}

                {/* User-completed indicator from localStorage - node is fully completed */}
                {!isLoading && checklistProgress === 100 && (
                  <circle
                    cx={node.x + node.width - 10}
                    cy={node.y + 10}
                    r={4}
                    fill={green}
                    stroke={green}
                    strokeWidth={1.5}
                    opacity={0.8}
                  />
                )}
              </g>
            )
          })}
        </svg>
      </div>

      <NodePanel node={selectedNode} onClose={closePanel} />
    </div>
  )
}
