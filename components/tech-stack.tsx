"use client"

import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export function TechStack() {
  const { language } = useLanguage()
  const t = translations[language]

  const technologies = {
    frontend: ["HTML", "CSS", "JavaScript", "React"],
    backend: ["Node.js", "Express", ".NET Core", "Python"],
    database: ["MongoDB", "SQL Server", "PostgreSQL"],
    tools: ["Git", "Docker", "VS Code", "Postman"],
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">Frontend</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.frontend.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 px-3 py-1 text-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">Backend</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.backend.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 px-3 py-1 text-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">Database</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.database.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 px-3 py-1 text-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">Tools</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.tools.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 px-3 py-1 text-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
