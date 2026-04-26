import type { Metadata } from "next"
import { Space_Mono, Inter } from "next/font/google"
import "./globals.css"
import { LangProvider } from "@/lib/lang-context"
import { ThemeProvider } from "@/components/theme-provider"

const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] })
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Enterprise Roadmaps",
  description:
    "Trilhas de aprendizado estruturadas para ecossistemas de tecnologia corporativa — SAP, Microsoft Power Platform, Jira, ServiceNow e mais.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon.ico" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className="bg-background" suppressHydrationWarning style={{ '--font-sans': inter.style.fontFamily, '--font-mono': spaceMono.style.fontFamily } as React.CSSProperties}>
      <body className="font-sans antialiased min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
