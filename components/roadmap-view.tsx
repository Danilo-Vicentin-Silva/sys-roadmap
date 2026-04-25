"use client"

import { ArrowLeft, Circle } from "lucide-react"
import { useLang } from "@/lib/lang-context"
import { RoadmapDiagram } from "@/components/roadmap-diagram"
import type { RoadmapData } from "@/lib/roadmap-data"

interface RoadmapViewProps {
  roadmap: RoadmapData
  onBack: () => void
}

export function RoadmapView({ roadmap, onBack }: RoadmapViewProps) {
  const { t } = useLang()

  const title = t[roadmap.titleKey] as string
  const totalNodes = roadmap.nodes.length
  const doneNodes = roadmap.nodes.filter((n) => n.status === "done").length
  const inProgressNodes = roadmap.nodes.filter((n) => n.status === "in-progress").length
  const pct = Math.round((doneNodes / totalNodes) * 100)

  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)]">
      {/* Roadmap header bar */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-[1200px] px-4 py-4 md:px-6">
          <button
            onClick={onBack}
            className="mb-4 flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            {t.backToHome}
          </button>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">
                {t.roadmapTitle}
              </p>
              <h1 className="font-mono text-2xl font-bold text-foreground">{title}</h1>
            </div>

            {/* Legend & progress */}
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Circle className="h-3 w-3 fill-neon-yellow text-neon-yellow" aria-hidden />
                  <span className="font-mono text-[10px] text-muted-foreground">{t.nodeCompleted}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Circle className="h-3 w-3 fill-neon-green text-neon-green" aria-hidden />
                  <span className="font-mono text-[10px] text-muted-foreground">{t.nodeInProgress}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Circle className="h-3 w-3 fill-muted stroke-border" aria-hidden />
                  <span className="font-mono text-[10px] text-muted-foreground">{t.nodeTodo}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-28 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full bg-neon-yellow transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {doneNodes}/{totalNodes} {t.nodes}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagram area */}
      <div className="flex-1 bg-secondary dark:bg-black p-4 md:p-8">
        <RoadmapDiagram roadmap={roadmap} />
      </div>
    </div>
  )
}
