"use client"

import { useState, useEffect, useCallback } from "react"

const STORAGE_KEY = "roadmap-completed-nodes"
const CHECKLIST_STORAGE_KEY = "roadmap-completed-checklist"

interface CompletedChecklist {
  [nodeId: string]: string[] // nodeId -> array of completed checklist indices
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
 * Safely interacts with localStorage only on the client side to avoid
 * Next.js Hydration Mismatch errors.
 *
 * @returns Object containing:
 *   - completedNodes: Array of completed node IDs
 *   - completedChecklist: Object mapping nodeId to completed checklist indices
 *   - toggleNodeProgress: Function to toggle a node's completion status
 *   - toggleChecklistItem: Function to toggle a checklist item's completion
 *   - isNodeCompleted: Helper to check if a node is completed
 *   - isChecklistItemCompleted: Helper to check if a checklist item is completed
 *   - getNodeProgress: Helper to get progress percentage for a node
 *   - isLoading: Whether the initial load is in progress
 *   - isClient: Whether the component has mounted on the client
 */
export function useProgress(): UseProgressReturn {
  const [completedNodes, setCompletedNodes] = useState<string[]>([])
  const [completedChecklist, setCompletedChecklist] =
    useState<CompletedChecklist>({})
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)

  // Handle client-side mounting to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Load completed nodes and checklist from localStorage on mount
  useEffect(() => {
    if (!isClient) return

    try {
      // Load completed nodes
      const storedNodes = localStorage.getItem(STORAGE_KEY)
      if (storedNodes) {
        const parsed = JSON.parse(storedNodes)
        if (Array.isArray(parsed)) {
          setCompletedNodes(parsed)
        }
      }

      // Load completed checklist items
      const storedChecklist = localStorage.getItem(CHECKLIST_STORAGE_KEY)
      if (storedChecklist) {
        const parsed = JSON.parse(storedChecklist)
        if (parsed && typeof parsed === "object") {
          setCompletedChecklist(parsed)
        }
      }
    } catch (error) {
      console.error("Failed to load progress from localStorage:", error)
    } finally {
      setIsLoading(false)
    }
  }, [isClient])

  // Save completed nodes to localStorage whenever completedNodes changes
  useEffect(() => {
    if (!isClient || isLoading) return

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedNodes))
    } catch (error) {
      console.error("Failed to save progress to localStorage:", error)
    }
  }, [completedNodes, isClient, isLoading])

  // Save completed checklist to localStorage whenever completedChecklist changes
  useEffect(() => {
    if (!isClient || isLoading) return

    try {
      localStorage.setItem(
        CHECKLIST_STORAGE_KEY,
        JSON.stringify(completedChecklist),
      )
    } catch (error) {
      console.error("Failed to save checklist to localStorage:", error)
    }
  }, [completedChecklist, isClient, isLoading])

  /**
   * Toggle the completion status of a node
   * @param nodeId - The ID of the node to toggle
   */
  const toggleNodeProgress = useCallback((nodeId: string) => {
    setCompletedNodes((prev) => {
      if (prev.includes(nodeId)) {
        return prev.filter((id) => id !== nodeId)
      }
      return [...prev, nodeId]
    })
  }, [])

  /**
   * Toggle the completion status of a checklist item
   * @param nodeId - The ID of the node containing the checklist
   * @param itemIndex - The index of the checklist item (as string for flexibility)
   */
  const toggleChecklistItem = useCallback(
    (nodeId: string, itemIndex: string) => {
      setCompletedChecklist((prev) => {
        const nodeChecklist = prev[nodeId] || []
        if (nodeChecklist.includes(itemIndex)) {
          return {
            ...prev,
            [nodeId]: nodeChecklist.filter((item) => item !== itemIndex),
          }
        }
        return {
          ...prev,
          [nodeId]: [...nodeChecklist, itemIndex],
        }
      })
    },
    [],
  )

  /**
   * Check if a node is completed
   * @param nodeId - The ID of the node to check
   */
  const isNodeCompleted = useCallback(
    (nodeId: string) => {
      return completedNodes.includes(nodeId)
    },
    [completedNodes],
  )

  /**
   * Check if a checklist item is completed
   * @param nodeId - The ID of the node containing the checklist
   * @param itemIndex - The index of the checklist item
   */
  const isChecklistItemCompleted = useCallback(
    (nodeId: string, itemIndex: string) => {
      return completedChecklist[nodeId]?.includes(itemIndex) || false
    },
    [completedChecklist],
  )

  /**
   * Get progress percentage for a node based on checklist completion
   * @param nodeId - The ID of the node
   * @param totalItems - Total number of checklist items
   */
  const getNodeProgress = useCallback(
    (nodeId: string, totalItems: number) => {
      if (totalItems === 0) return 0
      const completed = completedChecklist[nodeId]?.length || 0
      return Math.round((completed / totalItems) * 100)
    },
    [completedChecklist],
  )

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

/**
 * Check if a specific node is completed
 * @param completedNodes - Array of completed node IDs
 * @param nodeId - The ID of the node to check
 * @returns boolean indicating if the node is completed
 */
export function isNodeCompleted(
  completedNodes: string[],
  nodeId: string,
): boolean {
  return completedNodes.includes(nodeId)
}
