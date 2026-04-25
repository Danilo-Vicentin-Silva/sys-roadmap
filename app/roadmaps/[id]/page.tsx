"use client"

import { useParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { RoadmapView } from "@/components/roadmap-view"
import { getRoadmapById } from "@/lib/roadmap-data"
import { useLang } from "@/lib/lang-context"

export default function RoadmapPage() {
  const params = useParams()
  const router = useRouter()
  const { t } = useLang()
  
  const id = params.id as string
  const roadmap = getRoadmapById(id)

  if (!roadmap) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex flex-col items-center justify-center py-32">
          <h1 className="font-mono text-2xl font-bold text-foreground mb-4">
            {t.roadmapNotFound}
          </h1>
          <button
            onClick={() => router.push("/")}
            className="font-mono text-sm text-primary hover:underline"
          >
            {t.backToHome}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <RoadmapView roadmap={roadmap} onBack={() => router.push("/")} />
    </div>
  )
}
