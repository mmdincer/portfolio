"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

interface BlogCardProps {
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

export function BlogCard({ title, description, date, readTime, tags, slug }: BlogCardProps) {
  return (
    <Card className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 h-[400px] flex flex-col">
      <CardHeader className="pb-3 flex-shrink-0">
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors md:text-xl line-clamp-2">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="pt-0 flex-1 flex flex-col">
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4 min-h-[2rem]">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800 text-xs"
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge
              variant="secondary"
              className="bg-gray-50 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800 text-xs"
            >
              +{tags.length - 3}
            </Badge>
          )}
        </div>

        <Link href={`/blog/${slug}`} className="mt-auto">
          <Button
            variant="ghost"
            className="w-full justify-between text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20"
          >
            <span className="text-sm font-medium">Read More</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
