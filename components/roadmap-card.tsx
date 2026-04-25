"use client"

import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { useLang } from "@/lib/lang-context"
import type { Translations } from "@/lib/i18n"

interface RoadmapCardProps {
  id: string
  titleKey: keyof Translations
  descKey: keyof Translations
  Icon: LucideIcon
  href?: string
  accentColor?: string
  totalNodes?: number
  doneNodes?: number
}

/**
 * Get dynamic color based on progress percentage
 * - 100%: completed (neon green)
 * - 1-99%: in progress (orange/warm)
 * - 0%: not started (default accent)
 */
function getProgressColor(pct: number, defaultColor: string): string {
  if (pct === 100) return "var(--neon-green)" // Completed
  if (pct > 0) return "var(--neon-yellow)" // In progress
  return defaultColor // Not started
}

export function RoadmapCard({
  id,
  titleKey,
  descKey,
  Icon,
  href,
  accentColor = "#eeff00",
  totalNodes = 7,
  doneNodes = 0,
}: RoadmapCardProps) {
  const { t } = useLang()
  const title = t[titleKey] as string
  const desc = t[descKey] as string
  const pct = Math.round((doneNodes / totalNodes) * 100)
  const progressColor = getProgressColor(pct, accentColor)

  return (
    <Link
      href={href || `/roadmaps/${id}`}
      className="neo-card group w-full rounded-sm bg-card text-left p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary block"
    >
      <div className="flex items-start gap-4 p-4">
        <div
          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border-2 transition-colors"
          style={{ borderColor: progressColor, color: progressColor }}
        >
          <Icon className="h-4 w-4" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-mono text-sm font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {desc}
          </p>
        </div>
        <svg
          className="mt-1 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Progress bar */}
      <div className="px-4 pb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
            {t.progress}
          </span>
          <span className="text-[10px] font-mono text-muted-foreground">
            {doneNodes}/{totalNodes} {t.nodes}
          </span>
        </div>
        <div className="h-1 w-full rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, backgroundColor: progressColor }}
          />
        </div>
      </div>
    </Link>
  )
}
