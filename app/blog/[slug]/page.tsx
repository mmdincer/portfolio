"use client"

import { useParams } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react"
import { translations } from "@/lib/translations"
import { useState, useEffect } from "react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

export default function BlogPostPage() {
  const params = useParams()
  const { language } = useLanguage()
  const t = translations[language]
  const [mounted, setMounted] = useState(false)

  const slug = params.slug as string
  const post = getBlogPost(slug)
  const allPosts = getAllBlogPosts()

  // Find current post index for navigation
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  // Fix hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Navbar />
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              {language === "tr" ? "Blog yazısı bulunamadı" : "Blog post not found"}
            </h1>
            <Link href="/blog">
              <Button variant="outline" className="rounded-full">
                {language === "tr" ? "Blog'a Dön" : "Back to Blog"}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Navbar />

        <article className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden">
          {/* Header */}
          <header className="p-8 md:p-12 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              {post.title[language]}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <pre className="rounded-lg bg-gray-900 dark:bg-gray-800 p-4 overflow-x-auto">
                        <code className="text-gray-100 dark:text-gray-200 text-sm font-mono" {...props}>
                          {String(children).replace(/\n$/, '')}
                        </code>
                      </pre>
                    ) : (
                      <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono" {...props}>
                        {children}
                      </code>
                    )
                  }
                }}
              >
                {post.content[language]}
              </ReactMarkdown>
            </div>
          </div>

          {/* Navigation */}
          <footer className="p-8 md:p-12 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {previousPost ? (
                <Link href={`/blog/${previousPost.slug}`} className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 h-auto p-4 text-left"
                  >
                    <ArrowLeft size={16} className="shrink-0" />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        {language === "tr" ? "Önceki" : "Previous"}
                      </div>
                      <div className="font-medium line-clamp-2">
                        {previousPost.title[language]}
                      </div>
                    </div>
                  </Button>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`} className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full justify-end gap-2 h-auto p-4 text-right"
                  >
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        {language === "tr" ? "Sonraki" : "Next"}
                      </div>
                      <div className="font-medium line-clamp-2">
                        {nextPost.title[language]}
                      </div>
                    </div>
                    <ArrowRight size={16} className="shrink-0" />
                  </Button>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>

            <div className="text-center mt-8">
              <Link href="/blog">
                <Button variant="outline" className="rounded-full">
                  {language === "tr" ? "Tüm Blog Yazıları" : "All Blog Posts"}
                </Button>
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </main>
  )
}
