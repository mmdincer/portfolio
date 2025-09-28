"use client"

import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import { BlogCard } from "@/components/blog-card"
import { getAllBlogPosts } from "@/lib/blog-data"
import { Navbar } from "@/components/navbar"
import { useState, useEffect } from "react"

export default function BlogPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [mounted, setMounted] = useState(false)

  // Fix hydration issues with theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const allBlogPosts = getAllBlogPosts()

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
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{t.blog}</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                {t.blogDescription}
              </p>
            </div>
          </div>

          {allBlogPosts.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10 text-center text-gray-600 dark:text-gray-300">
              {language === "tr"
                ? "Henüz paylaşılmış bir blog yazısı yok. Yeni içerikler yakında eklenecek."
                : "No blog posts have been published yet. Fresh content will arrive soon."}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allBlogPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title[language]}
                  description={post.description[language]}
                  date={post.date}
                  readTime={post.readTime}
                  tags={post.tags}
                  slug={post.slug}
                />
              ))}
            </div>
          )}
        </section>

        <footer className="text-center text-gray-500 dark:text-gray-400 text-sm py-8 mt-12">
          <p>© 2025 Muhammet Mustafa Dincer. {t.allRights}</p>
        </footer>
      </div>
    </main>
  )
}
