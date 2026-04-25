"use client"

import { X, BookOpen, Database, CheckSquare, Square } from "lucide-react"
import { useLang } from "@/lib/lang-context"
import { nodeDetails } from "@/lib/roadmap-data"
import type { RoadmapNode } from "@/lib/roadmap-data"
import { translations } from "@/lib/i18n"
import { cn } from "@/lib/utils"

interface NodePanelProps {
  node: RoadmapNode | null
  onClose: () => void
}

const statusColors: Record<string, string> = {
  done:          "var(--neon-yellow)",
  "in-progress": "var(--neon-green)",
  todo:          "var(--muted-foreground)",
}

const statusLabels: Record<string, keyof (typeof translations)["en"]> = {
  done: "nodeCompleted",
  "in-progress": "nodeInProgress",
  todo: "nodeTodo",
}

export function NodePanel({ node, onClose }: NodePanelProps) {
  const { t, lang } = useLang()

  if (!node) return null

  const detail = nodeDetails[node.detailKey]
  if (!detail) return null

  const title = t[detail.titleKey] as string
  const theory = t[detail.theoryKey] as string
  const technical = t[detail.technicalKey] as string
  const checklist = translations[lang][detail.checklistKey] as unknown as string[]
  const statusColor = statusColors[node.status]
  const statusLabel = t[statusLabels[node.status]] as string

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
            </div>
            <h2 className="font-mono text-xl font-bold text-foreground text-pretty">{title}</h2>
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
            <p className="text-sm text-muted-foreground leading-relaxed">{theory}</p>
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
              <p className="font-mono text-xs text-muted-foreground leading-relaxed">{technical}</p>
            </div>
          </section>

          {/* Checklist */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <CheckSquare className="h-4 w-4 text-neon-blue" aria-hidden />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-neon-blue">
                {t.panelChecklist}
              </h3>
            </div>
            <ul className="space-y-2">
              {Array.isArray(checklist) &&
                checklist.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <Square className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
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
