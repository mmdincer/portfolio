"use client"

import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, ArrowLeft, Shield, Eye, Lock, Users, Cookie, Phone, Edit, UserCheck } from "lucide-react"
import { translations } from "@/lib/translations"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function PrivacyPage() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  const [mounted, setMounted] = useState(false)

  // Fix hydration issues with theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="icon" className="rounded-full">
                <ArrowLeft size={18} />
              </Button>
            </Link>
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
          </div>
        </header>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-8 md:p-12 shadow-lg">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20"></div>
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-green-500/10 dark:bg-green-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-full">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                  {t.privacy.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {t.privacy.lastUpdated}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <section className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {t.privacy.introduction}
                </p>
              </section>

              <section className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {t.privacy.dataCollection}
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.privacy.dataCollectionDesc}
                </p>
              </section>

              <section className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Edit className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {t.privacy.dataUsage}
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.privacy.dataUsageDesc}
                </p>
              </section>

              <section className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {t.privacy.dataProtection}
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.privacy.dataProtectionDesc}
                </p>
              </section>

              <section className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {t.privacy.dataSharing}
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.privacy.dataSharingDesc}
                </p>
              </section>

              <section className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Cookie className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {t.privacy.cookies}
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.privacy.cookiesDesc}
                </p>
              </section>

              <section className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {t.privacy.rights}
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.privacy.rightsDesc}
                </p>
              </section>

              <section className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {t.privacy.contact}
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.privacy.contactDesc}
                </p>
              </section>

              <section className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Edit className="h-6 w-6 text-red-600 dark:text-red-400" />
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {t.privacy.changes}
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.privacy.changesDesc}
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  © 2024 Muhammet Mustafa Dincer. {t.allRights}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 