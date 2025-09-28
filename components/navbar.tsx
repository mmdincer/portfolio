"use client"

import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, Menu, X } from "lucide-react"
import { translations } from "@/lib/translations"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // Fix hydration issues with theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const navItems = [
    { href: "/", label: t.home, key: "home" },
    { href: "/projects", label: t.projects, key: "projects" },
    { href: "/blog", label: t.blog, key: "blog" },
  ]

  useEffect(() => {
    if (mounted) {
      setMenuOpen(false)
    }
  }, [pathname, mounted])

  if (!mounted) {
    return null
  }

  return (
    <header className="mb-10">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" aria-label="Home" className="flex items-center">
          <Image
            src="/logo-siyah.png"
            alt="MMD Logo"
            width={170}
            height={51}
            className="h-11 w-auto dark:hidden sm:h-13"
            priority
          />
          <Image
            src="/logo-beyaz.png"
            alt="MMD Logo"
            width={170}
            height={51}
            className="hidden h-11 w-auto dark:block sm:h-13"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.key} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-full text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
            className="rounded-full text-sm px-3"
          >
            {language === "tr" ? "EN" : "TR"}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mt-4 flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-900 md:hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.key} href={item.href} className="w-full">
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start rounded-lg text-sm ${
                    isActive
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
