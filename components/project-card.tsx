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
    <div className="overflow-hidden bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLink
              size={18}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            />
          </Link>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
