import type { Lang } from "./i18n"
import { translations } from "./i18n"

export type NodeStatus = "done" | "in-progress" | "todo"

export interface RoadmapNode {
  id: string
  labelKey: keyof (typeof translations)["en"]
  x: number
  y: number
  width: number
  height: number
  status: NodeStatus
  detailKey: string
  color?: string
}

export interface RoadmapEdge {
  from: string
  to: string
}

export interface RoadmapData {
  id: string
  titleKey: keyof (typeof translations)["en"]
  descKey: keyof (typeof translations)["en"]
  nodes: RoadmapNode[]
  edges: RoadmapEdge[]
}

export const roadmaps: RoadmapData[] = [
  {
    id: "sap-mm",
    titleKey: "cardSapMM",
    descKey: "descSapMM",
    nodes: [
      { id: "mm1", labelKey: "nodeMM1", x: 300, y: 60,  width: 220, height: 52, status: "done",        detailKey: "introMM",  color: "#eeff00" },
      { id: "mm2", labelKey: "nodeMM2", x: 300, y: 160, width: 220, height: 52, status: "done",        detailKey: "introMM",  color: "#eeff00" },
      { id: "mm3", labelKey: "nodeMM3", x: 300, y: 260, width: 220, height: 52, status: "in-progress", detailKey: "introMM",  color: "#00ff88" },
      { id: "mm4", labelKey: "nodeMM4", x: 300, y: 360, width: 220, height: 52, status: "in-progress", detailKey: "p2p",      color: "#00ff88" },
      { id: "mm5", labelKey: "nodeMM5", x: 80,  y: 460, width: 220, height: 52, status: "todo",        detailKey: "introMM",  color: "#ffffff" },
      { id: "mm6", labelKey: "nodeMM6", x: 520, y: 460, width: 220, height: 52, status: "todo",        detailKey: "p2p",      color: "#ffffff" },
      { id: "mm7", labelKey: "nodeMM7", x: 300, y: 560, width: 220, height: 52, status: "todo",        detailKey: "introMM",  color: "#ffffff" },
    ],
    edges: [
      { from: "mm1", to: "mm2" },
      { from: "mm2", to: "mm3" },
      { from: "mm3", to: "mm4" },
      { from: "mm4", to: "mm5" },
      { from: "mm4", to: "mm6" },
      { from: "mm5", to: "mm7" },
      { from: "mm6", to: "mm7" },
    ],
  },
  {
    id: "power-apps",
    titleKey: "cardPowerApps",
    descKey: "descPowerApps",
    nodes: [
      { id: "pa1", labelKey: "nodePA1", x: 300, y: 60,  width: 240, height: 52, status: "done",        detailKey: "canvas",  color: "#eeff00" },
      { id: "pa2", labelKey: "nodePA2", x: 300, y: 160, width: 240, height: 52, status: "done",        detailKey: "canvas",  color: "#eeff00" },
      { id: "pa3", labelKey: "nodePA3", x: 300, y: 260, width: 240, height: 52, status: "in-progress", detailKey: "canvas",  color: "#00ff88" },
      { id: "pa4", labelKey: "nodePA4", x: 300, y: 360, width: 240, height: 52, status: "todo",        detailKey: "canvas",  color: "#ffffff" },
      { id: "pa5", labelKey: "nodePA5", x: 60,  y: 460, width: 240, height: 52, status: "todo",        detailKey: "canvas",  color: "#ffffff" },
      { id: "pa6", labelKey: "nodePA6", x: 540, y: 460, width: 240, height: 52, status: "todo",        detailKey: "canvas",  color: "#ffffff" },
      { id: "pa7", labelKey: "nodePA7", x: 300, y: 560, width: 240, height: 52, status: "todo",        detailKey: "canvas",  color: "#ffffff" },
    ],
    edges: [
      { from: "pa1", to: "pa2" },
      { from: "pa2", to: "pa3" },
      { from: "pa3", to: "pa4" },
      { from: "pa4", to: "pa5" },
      { from: "pa4", to: "pa6" },
      { from: "pa5", to: "pa7" },
      { from: "pa6", to: "pa7" },
    ],
  },
]

export interface NodeDetail {
  titleKey: keyof (typeof translations)["en"]
  theoryKey: keyof (typeof translations)["en"]
  technicalKey: keyof (typeof translations)["en"]
  checklistKey: keyof (typeof translations)["en"]
}

export const nodeDetails: Record<string, NodeDetail> = {
  p2p: {
    titleKey:     "detailP2PTitle",
    theoryKey:    "detailP2PTheory",
    technicalKey: "detailP2PTechnical",
    checklistKey: "detailP2PChecklist",
  },
  introMM: {
    titleKey:     "detailIntroMMTitle",
    theoryKey:    "detailIntroMMTheory",
    technicalKey: "detailIntroMMTechnical",
    checklistKey: "detailIntroMMChecklist",
  },
  canvas: {
    titleKey:     "detailCanvasTitle",
    theoryKey:    "detailCanvasTheory",
    technicalKey: "detailCanvasTechnical",
    checklistKey: "detailCanvasChecklist",
  },
}

export function getRoadmapById(id: string): RoadmapData | undefined {
  return roadmaps.find((r) => r.id === id)
}

export function getNodeLabel(node: RoadmapNode, lang: Lang): string {
  return translations[lang][node.labelKey] as string
}
