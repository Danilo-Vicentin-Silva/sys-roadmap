import type { Lang } from "./i18n"
import { translations } from "./i18n"

export type NodeStatus = "done" | "in-progress" | "todo" | "pending"

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

// Cores baseadas no estilo neon/dark mode
const COLOR_DONE = "#eeff00" // Amarelo Neon
const COLOR_IN_PROGRESS = "#00ff88" // Verde Neon
const COLOR_TODO = "#ffffff" // Branco
const COLOR_PENDING = "#475569" // Slate 600 (Cinza escuro para itens futuros)

export const roadmaps: RoadmapData[] = [
  {
    id: "sap-mm",
    titleKey: "cardSapMM",
    descKey: "descSapMM",
    nodes: [
      {
        id: "mm1",
        labelKey: "nodeMM1",
        x: 300,
        y: 60,
        width: 240,
        height: 52,
        status: "done",
        detailKey: "introMM",
        color: COLOR_DONE,
      },
      {
        id: "mm2",
        labelKey: "nodeMM2",
        x: 300,
        y: 160,
        width: 240,
        height: 52,
        status: "done",
        detailKey: "introMM",
        color: COLOR_DONE,
      },
      {
        id: "mm3",
        labelKey: "nodeMM3",
        x: 80,
        y: 260,
        width: 240,
        height: 52,
        status: "in-progress",
        detailKey: "introMM",
        color: COLOR_IN_PROGRESS,
      },
      {
        id: "mm4",
        labelKey: "nodeMM4",
        x: 300,
        y: 360,
        width: 240,
        height: 52,
        status: "todo",
        detailKey: "p2p",
        color: COLOR_TODO,
      },
      {
        id: "mm5",
        labelKey: "nodeMM5",
        x: 80,
        y: 460,
        width: 240,
        height: 52,
        status: "todo",
        detailKey: "p2p",
        color: COLOR_TODO,
      },
      {
        id: "mm6",
        labelKey: "nodeMM6",
        x: 520,
        y: 460,
        width: 240,
        height: 52,
        status: "pending",
        detailKey: "p2p",
        color: COLOR_PENDING,
      },
      {
        id: "mm7",
        labelKey: "nodeMM7",
        x: 300,
        y: 560,
        width: 240,
        height: 52,
        status: "pending",
        detailKey: "introMM",
        color: COLOR_PENDING,
      },
    ],
    edges: [
      { from: "mm1", to: "mm2" },
      { from: "mm2", to: "mm3" },
      { from: "mm2", to: "mm4" },
      { from: "mm4", to: "mm5" },
      { from: "mm4", to: "mm6" },
      { from: "mm4", to: "mm7" },
    ],
  },
  {
    id: "power-apps",
    titleKey: "cardPowerApps",
    descKey: "descPowerApps",
    nodes: [
      {
        id: "pa1",
        labelKey: "nodePA1",
        x: 300,
        y: 60,
        width: 240,
        height: 52,
        status: "done",
        detailKey: "canvas",
        color: COLOR_DONE,
      },
      {
        id: "pa2",
        labelKey: "nodePA2",
        x: 300,
        y: 160,
        width: 240,
        height: 52,
        status: "done",
        detailKey: "canvas",
        color: COLOR_DONE,
      },
      {
        id: "pa3",
        labelKey: "nodePA3",
        x: 80,
        y: 260,
        width: 240,
        height: 52,
        status: "in-progress",
        detailKey: "canvas",
        color: COLOR_IN_PROGRESS,
      },
      {
        id: "pa4",
        labelKey: "nodePA4",
        x: 520,
        y: 260,
        width: 240,
        height: 52,
        status: "todo",
        detailKey: "canvas",
        color: COLOR_TODO,
      },
      {
        id: "pa5",
        labelKey: "nodePA5",
        x: 300,
        y: 360,
        width: 240,
        height: 52,
        status: "todo",
        detailKey: "canvas",
        color: COLOR_TODO,
      },
      {
        id: "pa6",
        labelKey: "nodePA6",
        x: 80,
        y: 460,
        width: 240,
        height: 52,
        status: "pending",
        detailKey: "canvas",
        color: COLOR_PENDING,
      },
      {
        id: "pa7",
        labelKey: "nodePA7",
        x: 300,
        y: 560,
        width: 240,
        height: 52,
        status: "pending",
        detailKey: "canvas",
        color: COLOR_PENDING,
      },
    ],
    edges: [
      { from: "pa1", to: "pa2" },
      { from: "pa2", to: "pa3" },
      { from: "pa2", to: "pa4" },
      { from: "pa2", to: "pa5" },
      { from: "pa5", to: "pa6" },
      { from: "pa5", to: "pa7" },
    ],
  },
  {
    id: "demand-mgmt",
    titleKey: "cardDemand",
    descKey: "descDemand",
    nodes: [
      {
        id: "dm1",
        labelKey: "nodeDM1",
        x: 300,
        y: 60,
        width: 260,
        height: 52,
        status: "done",
        detailKey: "schema",
        color: COLOR_DONE,
      },
      {
        id: "dm2",
        labelKey: "nodeDM2",
        x: 300,
        y: 160,
        width: 260,
        height: 52,
        status: "in-progress",
        detailKey: "schema",
        color: COLOR_IN_PROGRESS,
      },
      {
        id: "dm3",
        labelKey: "nodeDM3",
        x: 300,
        y: 260,
        width: 260,
        height: 52,
        status: "todo",
        detailKey: "schema",
        color: COLOR_TODO,
      },
      {
        id: "dm4",
        labelKey: "nodeDM4",
        x: 300,
        y: 360,
        width: 260,
        height: 52,
        status: "pending",
        detailKey: "schema",
        color: COLOR_PENDING,
      },
    ],
    edges: [
      { from: "dm1", to: "dm2" },
      { from: "dm2", to: "dm3" },
      { from: "dm3", to: "dm4" },
    ],
  },
]

export interface NodeDetail {
  titleKey: keyof (typeof translations)["en"]
  theoryKey: keyof (typeof translations)["en"]
  technicalKey: keyof (typeof translations)["en"]
  checklistKey: keyof (typeof translations)["en"]
}

// O Mapeamento dos Detalhes que abrem na gaveta (Sheet/Modal)
export const nodeDetails: Record<string, NodeDetail> = {
  p2p: {
    titleKey: "detailP2PTitle",
    theoryKey: "detailP2PTheory",
    technicalKey: "detailP2PTechnical",
    checklistKey: "detailP2PChecklist",
  },
  introMM: {
    titleKey: "detailIntroMMTitle",
    theoryKey: "detailIntroMMTheory",
    technicalKey: "detailIntroMMTechnical",
    checklistKey: "detailIntroMMChecklist",
  },
  canvas: {
    titleKey: "detailCanvasTitle",
    theoryKey: "detailCanvasTheory",
    technicalKey: "detailCanvasTechnical",
    checklistKey: "detailCanvasChecklist",
  },
  schema: {
    titleKey: "detailSchemaTitle",
    theoryKey: "detailSchemaTheory",
    technicalKey: "detailSchemaTechnical",
    checklistKey: "detailSchemaChecklist",
  },
}

export function getRoadmapById(id: string): RoadmapData | undefined {
  return roadmaps.find((r) => r.id === id)
}

export function getNodeLabel(node: RoadmapNode, lang: Lang): string {
  return translations[lang][node.labelKey] as string
}
