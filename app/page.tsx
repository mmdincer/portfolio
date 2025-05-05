"use client"

import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import {
  MoonIcon,
  SunIcon,
  GithubIcon,
  LinkedinIcon,
  ChevronLeft,
  ChevronRight,
  FileText,
  Copy,
  Check,
} from "lucide-react"
import { translations } from "@/lib/translations"
import { ProjectCard } from "@/components/project-card"
import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TechStack } from "@/components/tech-stack"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  const [currentProjectPage, setCurrentProjectPage] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  // Fix hydration issues with theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
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
    {
      title: "Project 3",
      description: t.projectDescriptions.placeholder,
      technologies: ["React", "TypeScript", "Next.js"],
      link: "#",
    },
    {
      title: "Project 4",
      description: t.projectDescriptions.placeholder,
      technologies: ["Python", "Django", "PostgreSQL"],
      link: "#",
    },
  ]

  const projectsPerPage = 2
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const nextPage = () => {
    setCurrentProjectPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentProjectPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentProjects = projects.slice(
    currentProjectPage * projectsPerPage,
    (currentProjectPage + 1) * projectsPerPage,
  )

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // Copy email to clipboard
  const copyEmail = () => {
    navigator.clipboard.writeText("mmdincer@outlook.com")
    setCopied(true)
    toast({
      title: t.emailCopied,
      description: "mmdincer@outlook.com",
      duration: 3000,
    })
    setTimeout(() => setCopied(false), 2000)
  }

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-full">
              {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </Button>
            <div className="border-r h-6 border-gray-300 dark:border-gray-700 mx-2" />
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
              className="rounded-full text-sm"
            >
              {language === "tr" ? "EN" : "TR"}
            </Button>
          </div>
        </header>

        <section className="mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-8 md:p-12 shadow-lg">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20"></div>
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-green-500/10 dark:bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">{t.greeting}</h1>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                  <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-600 dark:text-green-400">{t.available}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 max-w-md mb-6">{t.introText}</p>

                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2 max-w-md">
                    <Button
                      className="rounded-lg bg-green-500 hover:bg-green-600 text-white h-8 text-xs px-2"
                      onClick={copyEmail}
                    >
                      {copied ? <Check size={14} className="mr-1" /> : <Copy size={14} className="mr-1" />}
                      {t.copyEmail}
                    </Button>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 h-8 text-xs px-2"
                        >
                          <FileText size={14} className="mr-1" />
                          {t.showCV}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                        <DialogTitle className="sr-only">{t.showCV}</DialogTitle>
                        <div className="p-4">
                          <iframe src={language === "tr" ? "/cv-tr.pdf" : "/cv-en.pdf"} className="w-full h-[70vh]" />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="grid grid-cols-2 gap-2 max-w-md">
                    <a href="https://github.com/mmdincer" target="_blank" rel="noopener noreferrer" className="block">
                      <Button
                        variant="outline"
                        className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 w-full h-8 text-xs px-2"
                      >
                        <GithubIcon size={14} className="mr-1" />
                        GitHub
                      </Button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muhammet-mustafa-dincer-57b23a249/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        variant="outline"
                        className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 w-full h-8 text-xs px-2"
                      >
                        <LinkedinIcon size={14} className="mr-1" />
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-blue-500 blur-md opacity-70"></div>
                <div className="relative bg-white dark:bg-gray-900 p-1 rounded-full border-2 border-gray-200 dark:border-gray-800">
                  <Avatar className="h-32 w-32 md:h-40 md:w-40">
                    <AvatarImage src="/avatar.png" alt="Muhammet Mustafa Dincer" />
                    <AvatarFallback className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xl">
                      MMD
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">{t.techStack}</h2>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 shadow-lg">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20"></div>
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-green-500/5 dark:bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <TechStack />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">{t.projects}</h2>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 shadow-lg">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20"></div>
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-green-500/5 dark:bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                  />
                ))}
              </div>

              <div className="flex justify-center mt-6 gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevPage}
                  className="rounded-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ChevronLeft size={18} />
                </Button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <span
                      key={index}
                      className={`h-2 w-2 rounded-full ${
                        index === currentProjectPage ? "bg-green-500" : "bg-gray-300 dark:bg-gray-700"
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextPage}
                  className="rounded-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ChevronRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-500 dark:text-gray-400 text-sm py-8">
          <p>© 2025 Muhammet Mustafa Dincer. {t.allRights}</p>
        </footer>
      </div>
      <Toaster />
    </main>
  )
}
