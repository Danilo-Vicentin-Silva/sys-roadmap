"use client"

import { useState, useEffect, useCallback, useSyncExternalStore } from "react"

const STORAGE_KEY = "roadmap-completed-nodes"
const CHECKLIST_STORAGE_KEY = "roadmap-completed-checklist"

interface CompletedChecklist {
  [nodeId: string]: string[]
}

// Module-level state to share across all hook instances
let globalCompletedNodes: string[] = []
let globalCompletedChecklist: CompletedChecklist = {}
let globalIsClient = false
let subscribers: Set<() => void> = new Set()

function notifySubscribers() {
  subscribers.forEach((callback) => callback())
}

// Store functions for useSyncExternalStore
function subscribe(callback: () => void) {
  subscribers.add(callback)
  return () => subscribers.delete(callback)
}

function getClientSnapshot() {
  return globalIsClient
}

function getNodesSnapshot() {
  return globalCompletedNodes
}

function getChecklistSnapshot() {
  return globalCompletedChecklist
}

interface UseProgressReturn {
  completedNodes: string[]
  completedChecklist: CompletedChecklist
  toggleNodeProgress: (nodeId: string) => void
  toggleChecklistItem: (nodeId: string, itemIndex: string) => void
  isNodeCompleted: (nodeId: string) => boolean
  isChecklistItemCompleted: (nodeId: string, itemIndex: string) => boolean
  getNodeProgress: (nodeId: string, totalItems: number) => number
  isLoading: boolean
  isClient: boolean
}

/**
 * Custom hook to manage user progress tracking for roadmap nodes and checklist items.
 * Uses shared module-level state to ensure all components see the same data in real-time.
 * Safely interacts with localStorage only on the client side to avoid Hydration Mismatch errors.
 */
export function useProgress(): UseProgressReturn {
  const [isLoading, setIsLoading] = useState(true)

  // Use useSyncExternalStore for reactive updates across all components
  const isClient = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    () => false,
  )
  const completedNodes = useSyncExternalStore(
    subscribe,
    getNodesSnapshot,
    () => [],
  )
  const completedChecklist = useSyncExternalStore(
    subscribe,
    getChecklistSnapshot,
    () => ({}),
  )

  // Initialize client-side state on mount
  useEffect(() => {
    globalIsClient = true
    notifySubscribers()

    try {
      // Load completed nodes
      const storedNodes = localStorage.getItem(STORAGE_KEY)
      if (storedNodes) {
        const parsed = JSON.parse(storedNodes)
        if (Array.isArray(parsed)) {
          globalCompletedNodes = parsed
        }
      }

      // Load completed checklist items
      const storedChecklist = localStorage.getItem(CHECKLIST_STORAGE_KEY)
      if (storedChecklist) {
        const parsed = JSON.parse(storedChecklist)
        if (parsed && typeof parsed === "object") {
          globalCompletedChecklist = parsed
        }
      }
    } catch (error) {
      console.error("Failed to load progress from localStorage:", error)
    }

    notifySubscribers()
    setIsLoading(false)
  }, [])

  // Save completed nodes to localStorage
  useEffect(() => {
    if (!globalIsClient || isLoading) return

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(globalCompletedNodes))
    } catch (error) {
      console.error("Failed to save progress to localStorage:", error)
    }
  }, [completedNodes, isLoading])

  // Save completed checklist to localStorage
  useEffect(() => {
    if (!globalIsClient || isLoading) return

    try {
      localStorage.setItem(
        CHECKLIST_STORAGE_KEY,
        JSON.stringify(globalCompletedChecklist),
      )
    } catch (error) {
      console.error("Failed to save checklist to localStorage:", error)
    }
  }, [completedChecklist, isLoading])

  /**
   * Toggle the completion status of a node
   */
  const toggleNodeProgress = useCallback((nodeId: string) => {
    if (globalCompletedNodes.includes(nodeId)) {
      globalCompletedNodes = globalCompletedNodes.filter((id) => id !== nodeId)
    } else {
      globalCompletedNodes = [...globalCompletedNodes, nodeId]
    }
    notifySubscribers()
  }, [])

  /**
   * Toggle the completion status of a checklist item
   */
  const toggleChecklistItem = useCallback(
    (nodeId: string, itemIndex: string) => {
      const nodeChecklist = globalCompletedChecklist[nodeId] || []
      if (nodeChecklist.includes(itemIndex)) {
        globalCompletedChecklist = {
          ...globalCompletedChecklist,
          [nodeId]: nodeChecklist.filter((item) => item !== itemIndex),
        }
      } else {
        globalCompletedChecklist = {
          ...globalCompletedChecklist,
          [nodeId]: [...nodeChecklist, itemIndex],
        }
      }
      notifySubscribers()
    },
    [],
  )

  /**
   * Check if a node is completed
   */
  const isNodeCompleted = useCallback((nodeId: string) => {
    return globalCompletedNodes.includes(nodeId)
  }, [])

  /**
   * Check if a checklist item is completed
   */
  const isChecklistItemCompleted = useCallback(
    (nodeId: string, itemIndex: string) => {
      return globalCompletedChecklist[nodeId]?.includes(itemIndex) || false
    },
    [],
  )

  /**
   * Get progress percentage for a node based on checklist completion
   */
  const getNodeProgress = useCallback((nodeId: string, totalItems: number) => {
    if (totalItems === 0) return 0
    const completed = globalCompletedChecklist[nodeId]?.length || 0
    return Math.round((completed / totalItems) * 100)
  }, [])

  return {
    completedNodes,
    completedChecklist,
    toggleNodeProgress,
    toggleChecklistItem,
    isNodeCompleted,
    isChecklistItemCompleted,
    getNodeProgress,
    isLoading,
    isClient,
  }
}
