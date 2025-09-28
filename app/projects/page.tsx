"use client"

import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import {
  MoonIcon,
  SunIcon,
  ArrowLeft,
} from "lucide-react"
import { translations } from "@/lib/translations"
import { ProjectCard } from "@/components/project-card"
import { Navbar } from "@/components/navbar"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function ProjectsPage() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  const [mounted, setMounted] = useState(false)

  // Fix hydration issues with theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const latestProjects = [
    {
      title: "AI-Fit",
      description: t.projectDescriptions.aiFit,
      technologies: ["Expo", "React Native", "TypeScript", "Google Gemini API"],
      link: "https://github.com/mmdincer/AI-Fit",
    },
    {
      title: "Expense Tracker",
      description: t.projectDescriptions.expenseTracker,
      technologies: ["Expo", "React Native", "TypeScript"],
      link: "https://github.com/mmdincer/expenseTracker",
    },
  ]

  const establishedProjects = [
    {
      title: "Project Base",
      description: t.projectDescriptions.projectBase,
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "JWT"],
      link: "https://github.com/mmdincer/project-base",
    },
    {
      title: "FinShark",
      description: t.projectDescriptions.finshark,
      technologies: [".Net Core", "SQL Server", "JWT"],
      link: "https://github.com/mmdincer/FinShark",
    },
  ]

  const allProjects = [...latestProjects, ...establishedProjects]

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Navbar />

        <section>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 shadow-lg mb-8">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20"></div>
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-green-500/10 dark:bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{t.projects}</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                {t.projectsDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
              />
            ))}
          </div>
        </section>

        <footer className="text-center text-gray-500 dark:text-gray-400 text-sm py-8 mt-12">
          <p>© 2025 Muhammet Mustafa Dincer. {t.allRights}</p>
        </footer>
      </div>
    </main>
  )
}
