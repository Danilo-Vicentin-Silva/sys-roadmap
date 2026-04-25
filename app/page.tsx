"use client"

import { useState, useMemo } from "react"
import {
  Package,
  ShoppingCart,
  DollarSign,
  Briefcase,
  Layers,
  BarChart3,
  Zap,
  TicketCheck,
  GitBranch,
  FileText,
  Settings,
  Users,
  Terminal,
} from "lucide-react"
import { Header } from "@/components/header"
import { RoadmapCard } from "@/components/roadmap-card"
import { useLang } from "@/lib/lang-context"
import { useProgress } from "@/hooks/use-progress"
import { roadmaps } from "@/lib/roadmap-data"
import type { Translations } from "@/lib/i18n"
import type { LucideIcon } from "lucide-react"

interface CardDef {
  id: string
  titleKey: keyof Translations
  descKey: keyof Translations
  Icon: LucideIcon
  accentColor: string
  totalNodes: number
  doneNodes: number
}

// Build card definitions with real progress data
function buildCardDefs(
  completedChecklist: Record<string, string[]>,
): CardDef[] {
  const cards: CardDef[] = [
    // SAP Key User
    {
      id: "sap-mm",
      titleKey: "cardSapMM",
      descKey: "descSapMM",
      Icon: Package,
      accentColor: "#eeff00",
      totalNodes: 7,
      doneNodes: 0,
    },
    {
      id: "sap-sd",
      titleKey: "cardSapSD",
      descKey: "descSapSD",
      Icon: ShoppingCart,
      accentColor: "#eeff00",
      totalNodes: 7,
      doneNodes: 0,
    },
    {
      id: "sap-fi",
      titleKey: "cardSapFI",
      descKey: "descSapFI",
      Icon: DollarSign,
      accentColor: "#eeff00",
      totalNodes: 7,
      doneNodes: 0,
    },
    // SAP Consultant
    {
      id: "sap-consultant-mm",
      titleKey: "cardSapConsultantMM",
      descKey: "descSapConsultantMM",
      Icon: Briefcase,
      accentColor: "#00bfff",
      totalNodes: 9,
      doneNodes: 0,
    },
    {
      id: "sap-consultant-sd",
      titleKey: "cardSapConsultantSD",
      descKey: "descSapConsultantSD",
      Icon: Layers,
      accentColor: "#00bfff",
      totalNodes: 9,
      doneNodes: 0,
    },
    {
      id: "sap-consultant-fi",
      titleKey: "cardSapConsultantFI",
      descKey: "descSapConsultantFI",
      Icon: BarChart3,
      accentColor: "#00bfff",
      totalNodes: 9,
      doneNodes: 0,
    },
    // Microsoft Power Platform
    {
      id: "power-apps",
      titleKey: "cardPowerApps",
      descKey: "descPowerApps",
      Icon: Zap,
      accentColor: "#00ff88",
      totalNodes: 7,
      doneNodes: 0,
    },
    {
      id: "power-automate",
      titleKey: "cardPowerAutomate",
      descKey: "descPowerAutomate",
      Icon: GitBranch,
      accentColor: "#00ff88",
      totalNodes: 7,
      doneNodes: 0,
    },
    {
      id: "power-bi",
      titleKey: "cardPowerBI",
      descKey: "descPowerBI",
      Icon: BarChart3,
      accentColor: "#00ff88",
      totalNodes: 7,
      doneNodes: 0,
    },
    // Demand & Service
    {
      id: "jira",
      titleKey: "cardJira",
      descKey: "descJira",
      Icon: TicketCheck,
      accentColor: "#ff6b6b",
      totalNodes: 6,
      doneNodes: 0,
    },
    {
      id: "servicenow",
      titleKey: "cardServiceNow",
      descKey: "descServiceNow",
      Icon: Settings,
      accentColor: "#ff6b6b",
      totalNodes: 6,
      doneNodes: 0,
    },
    {
      id: "sharepoint",
      titleKey: "cardSharePoint",
      descKey: "descSharePoint",
      Icon: FileText,
      accentColor: "#ff6b6b",
      totalNodes: 6,
      doneNodes: 0,
    },
  ]

  // Calculate done nodes based on completed checklist
  return cards.map((card) => {
    const roadmap = roadmaps.find((r) => r.id === card.id)
    if (!roadmap) return card

    // Count nodes that have at least one checklist item completed
    let doneCount = 0
    for (const node of roadmap.nodes) {
      const completedItems = completedChecklist[node.id]?.length || 0
      if (completedItems > 0) {
        doneCount++
      }
    }

    return {
      ...card,
      doneNodes: doneCount,
    }
  })
}

type CategoryId = "sap-key" | "sap-consultant" | "microsoft" | "demand"

const categories: {
  id: CategoryId
  titleKey: keyof Translations
  ids: string[]
}[] = [
  {
    id: "sap-key",
    titleKey: "catSapKeyUser",
    ids: ["sap-mm", "sap-sd", "sap-fi"],
  },
  {
    id: "sap-consultant",
    titleKey: "catSapConsultant",
    ids: ["sap-consultant-mm", "sap-consultant-sd", "sap-consultant-fi"],
  },
  {
    id: "microsoft",
    titleKey: "catMicrosoft",
    ids: ["power-apps", "power-automate", "power-bi"],
  },
  {
    id: "demand",
    titleKey: "catDemand",
    ids: ["jira", "servicenow", "sharepoint"],
  },
]

const categoryColors: Record<CategoryId, string> = {
  "sap-key": "#eeff00",
  "sap-consultant": "#00bfff",
  microsoft: "#00ff88",
  demand: "#ff6b6b",
}

export default function Home() {
  const { t } = useLang()
  const [searchQuery, setSearchQuery] = useState("")
  const { completedChecklist, isLoading } = useProgress()

  // Build card definitions with real progress data
  const cardDefs = useMemo(
    () => buildCardDefs(completedChecklist),
    [completedChecklist],
  )

  const filteredCards = useMemo(() => {
    if (!searchQuery.trim()) return cardDefs
    const q = searchQuery.toLowerCase()
    return cardDefs.filter((c) => {
      const title = (t[c.titleKey] as string).toLowerCase()
      const desc = (t[c.descKey] as string).toLowerCase()
      return title.includes(q) || desc.includes(q)
    })
  }, [searchQuery, t, cardDefs])

  return (
    <>
      <Header onSearch={setSearchQuery} />
      <main className="mx-auto max-w-[1200px] px-4 py-10 md:px-6">
        {/* Hero */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-sm border border-primary/30 bg-primary/5 px-3 py-1 mb-4">
            <Terminal className="h-3.5 w-3.5 text-primary" aria-hidden />
            <span className="font-mono text-xs text-primary">
              Enterprise Technology Ecosystem
            </span>
          </div>
          <h1 className="font-mono text-3xl font-bold text-foreground text-balance mb-3 md:text-4xl">
            {t.homeTitle}
          </h1>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground leading-relaxed text-pretty">
            {t.homeSubtitle}
          </p>
        </section>

        {/* Stats bar */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Roadmaps", value: "12" },
            { label: t.nodes, value: "84" },
            {
              label: t.catSapKeyUser.split(" ").slice(-2).join(" "),
              value: "SAP",
            },
            { label: "Power Platform", value: "MS" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-sm border border-border bg-card p-3 text-center"
            >
              <p className="font-mono text-2xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Cards by category */}
        {searchQuery ? (
          /* Search results flat view */
          <div>
            <p className="mb-4 font-mono text-xs text-muted-foreground">
              {filteredCards.length} resultado
              {filteredCards.length !== 1 ? "s" : ""}
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCards.map((card) => (
                <RoadmapCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        ) : (
          /* Categorized grid */
          <div className="space-y-10">
            {categories.map((cat) => {
              const cards = cardDefs.filter((c) => cat.ids.includes(c.id))
              const color = categoryColors[cat.id]
              return (
                <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="h-5 w-1 rounded-full"
                      style={{ backgroundColor: color }}
                      aria-hidden
                    />
                    <h2
                      id={`cat-${cat.id}`}
                      className="font-mono text-sm font-bold uppercase tracking-widest text-foreground"
                    >
                      {t[cat.titleKey] as string}
                    </h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card) => (
                      <RoadmapCard key={card.id} {...card} />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        )}

        {/* Community note */}
        <div className="mt-14 border-t border-border pt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" aria-hidden />
            <p className="text-xs">{t.communityNote}</p>
          </div>
        </div>
      </main>
    </>
  )
}
