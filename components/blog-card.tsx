"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

interface BlogCardProps {
  title: string
  description: string
  date: string
  tags: string[]
  slug: string
  externalUrl?: string
}

export function BlogCard({ title, description, date, tags, slug, externalUrl }: BlogCardProps) {
  return (
    <div className="overflow-hidden bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 rounded-xl border border-gray-200 dark:border-gray-700 h-[220px] flex flex-col">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between gap-3 mb-4 flex-shrink-0">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white sm:text-2xl line-clamp-2 flex-1">{title}</h3>
          {externalUrl ? (
            <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex-shrink-0">
              <ExternalLink size={18} />
            </a>
          ) : (
            <Link href={`/blog/${slug}`} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex-shrink-0">
              <ExternalLink size={18} />
            </Link>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base line-clamp-3 flex-1 whitespace-pre-line">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.slice(0, 4).map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 text-xs"
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 4 && (
            <Badge
              variant="secondary"
              className="bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-500 text-xs"
            >
              +{tags.length - 4}
            </Badge>
          )}
        </div>
      </div>
    </div>
  )
}
