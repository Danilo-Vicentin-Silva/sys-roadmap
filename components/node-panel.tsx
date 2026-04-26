"use client"

import { X, BookOpen, Database, CheckSquare, Square, Check } from "lucide-react"
import { useLang } from "@/lib/lang-context"
import { nodeDetails } from "@/lib/roadmap-data"
import type { RoadmapNode } from "@/lib/roadmap-data"
import { translations } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { useProgress } from "@/hooks/use-progress"

interface NodePanelProps {
  node: RoadmapNode | null
  onClose: () => void
}

const statusColors: Record<string, string> = {
  done: "var(--neon-yellow)",
  "in-progress": "var(--neon-green)",
  todo: "var(--muted-foreground)",
}

const statusLabels: Record<string, keyof (typeof translations)["en"]> = {
  done: "nodeCompleted",
  "in-progress": "nodeInProgress",
  todo: "nodeTodo",
}

function getEffectiveStatus(
  fallbackStatus: string,
  totalItems: number,
  completedCount: number,
): "done" | "in-progress" | "todo" {
  if (totalItems > 0) {
    if (completedCount >= totalItems) return "done"
    if (completedCount > 0) return "in-progress"
    return "todo"
  }
  if (fallbackStatus === "done" || fallbackStatus === "in-progress") {
    return fallbackStatus
  }
  return "todo"
}

export function NodePanel({ node, onClose }: NodePanelProps) {
  const { t, lang } = useLang()
  const {
    completedNodes,
    completedChecklist,
    toggleNodeProgress,
    toggleChecklistItem,
    isLoading,
  } = useProgress()

  if (!node) return null

  const detail = nodeDetails[node.detailKey]
  if (!detail) return null

  const title = t[detail.titleKey] as string
  const theory = t[detail.theoryKey] as string
  const technical = t[detail.technicalKey] as string
  const checklist = translations[lang][
    detail.checklistKey
  ] as unknown as string[]
  const isCompleted = completedNodes.includes(node.id)
  const nodeChecklist = completedChecklist[node.id] || []
  const completedCount = nodeChecklist.length
  const totalItems = Array.isArray(checklist) ? checklist.length : 0
  const effectiveStatus = getEffectiveStatus(
    node.status,
    totalItems,
    completedCount,
  )
  const statusColor = statusColors[effectiveStatus]
  const statusLabel = t[statusLabels[effectiveStatus]] as string

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="fixed right-0 top-0 z-50 flex h-full w-full flex-col border-l border-border bg-card shadow-2xl sm:max-w-[480px]"
        style={{ borderLeftColor: statusColor }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-border p-6">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest"
                style={{ borderColor: statusColor, color: statusColor }}
              >
                {statusLabel}
              </span>
              {/* Completion checkbox */}
              <button
                onClick={() => toggleNodeProgress(node.id)}
                disabled={isLoading}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest transition-colors",
                  isCompleted
                    ? "border-neon-green bg-neon-green/20 text-neon-green"
                    : "border-muted-foreground text-muted-foreground hover:border-foreground hover:text-foreground",
                )}
                aria-label={
                  isCompleted ? t.nodeMarkIncomplete : t.nodeMarkComplete
                }
              >
                {isCompleted ? (
                  <>
                    <Check className="h-3 w-3" />
                    {t.nodeCompleted}
                  </>
                ) : (
                  <>
                    <Square className="h-3 w-3" />
                    {t.nodeMarkComplete}
                  </>
                )}
              </button>
            </div>
            <h2 className="font-mono text-xl font-bold text-foreground text-pretty">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label={t.panelClose}
            className="mt-1 rounded-sm p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Theory */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-primary" aria-hidden />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-primary">
                {t.panelTheory}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {theory}
            </p>
          </section>

          {/* Technical */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Database className="h-4 w-4 text-neon-green" aria-hidden />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-neon-green">
                {t.panelTechnical}
              </h3>
            </div>
            <div className="rounded-sm border border-border bg-secondary p-3">
              <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                {technical}
              </p>
            </div>
          </section>

          {/* Checklist */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-neon-blue" aria-hidden />
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-neon-blue">
                  {t.panelChecklist}
                </h3>
              </div>
              {completedCount > 0 && (
                <span className="font-mono text-xs text-neon-green">
                  {completedCount}/{totalItems}
                </span>
              )}
            </div>
            <ul className="space-y-2">
              {Array.isArray(checklist) &&
                checklist.map((item: string, i: number) => {
                  const itemCompleted = nodeChecklist.includes(String(i))
                  return (
                    <li
                      key={i}
                      className={cn(
                        "flex items-start gap-3 cursor-pointer transition-colors rounded-sm p-1 -m-1 hover:bg-secondary/50",
                        itemCompleted && "text-foreground",
                      )}
                      onClick={() =>
                        !isLoading && toggleChecklistItem(node.id, String(i))
                      }
                    >
                      {itemCompleted ? (
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-neon-green"
                          aria-hidden
                        />
                      ) : (
                        <Square
                          className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                          aria-hidden
                        />
                      )}
                      <span
                        className={cn(
                          "text-sm leading-relaxed",
                          itemCompleted
                            ? "text-foreground line-through opacity-70"
                            : "text-muted-foreground",
                        )}
                      >
                        {item}
                      </span>
                    </li>
                  )
                })}
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-border p-4">
          <button
            onClick={onClose}
            className="w-full rounded-sm border-2 border-primary bg-transparent py-2 font-mono text-sm font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            {t.panelClose}
          </button>
        </div>
      </aside>
    </>
  )
}
