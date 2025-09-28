import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

const figtree = Figtree({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MMD | Portfolio",
  description: "Backend Developer & Software Engineer",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/logo-siyah.png", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/logo-beyaz.png", type: "image/png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/logo-siyah.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={figtree.className}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
