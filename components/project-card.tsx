import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  link: string
}

export function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <div className="overflow-hidden bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 rounded-xl border border-gray-200 dark:border-gray-700 h-[280px] flex flex-col">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between gap-3 mb-4 flex-shrink-0">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white sm:text-2xl line-clamp-2 flex-1">{title}</h3>
          <Link href={link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex-shrink-0">
            <ExternalLink size={18} />
          </Link>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base line-clamp-3 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.slice(0, 4).map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 text-xs"
            >
              {tech}
            </Badge>
          ))}
          {technologies.length > 4 && (
            <Badge
              variant="secondary"
              className="bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-500 text-xs"
            >
              +{technologies.length - 4}
            </Badge>
          )}
        </div>
      </div>
    </div>
  )
}
