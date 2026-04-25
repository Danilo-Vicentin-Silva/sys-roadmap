"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Globe, MapIcon, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useLang } from "@/lib/lang-context"

interface HeaderProps {
  onSearch?: (query: string) => void
}

export function Header({ onSearch }: HeaderProps) {
  const { t, toggleLang } = useLang()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    onSearch?.(e.target.value)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center gap-4 px-4 md:px-6">
        {/* Logo */}
        <a
          href="/"
          className="flex shrink-0 items-center gap-2 text-foreground hover:text-primary transition-colors"
        >
          <MapIcon className="h-5 w-5 text-primary" />
          <span className="hidden font-mono text-sm font-bold tracking-tight sm:block">
            Enterprise Roadmaps
          </span>
        </a>

        {/* Search bar */}
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
            aria-hidden
          />
          <input
            ref={inputRef}
            type="search"
            value={searchValue}
            onChange={handleChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={t.searchPlaceholder}
            aria-label={t.searchPlaceholder}
            className={`
              w-full rounded-sm border bg-secondary py-2 pl-9 pr-20 text-sm text-foreground
              placeholder:text-muted-foreground outline-none transition-colors
              ${focused ? "border-primary" : "border-border"}
            `}
          />
          <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 hidden items-center gap-0.5 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:flex">
            {t.searchShortcut}
          </kbd>
        </div>

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          className="flex shrink-0 items-center justify-center rounded-sm border border-border bg-secondary p-2 text-foreground transition-all hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
        >
          {mounted && (theme === "dark" ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />)}
        </button>

        {/* Language toggle */}
        <button
          onClick={toggleLang}
          aria-label="Toggle language"
          className="flex shrink-0 items-center gap-1.5 rounded-sm border border-border bg-secondary px-3 py-1.5 font-mono text-xs font-bold text-foreground transition-all hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
        >
          <Globe className="h-3.5 w-3.5" aria-hidden />
          {t.langToggle}
        </button>
      </div>
    </header>
  )
}
