export interface Project {
  title: string
  description: {
    en: string
    tr: string
  }
  technologies: string[]
  link: string
  date: string
  publishedAt?: string
}

export const projects: Project[] = [
  {
    title: "Sorio",
    description: {
      en: "AI-powered e-commerce automation for marketplace sellers. Cut reply times from 2+ hours to under 5 minutes with a Gemini-driven pipeline; built a secure fullstack SaaS (Next.js, React, Node.js, Supabase Postgres, JWT, Iyzico) with Trendyol API integration and AWS Amplify CI/CD.",
      tr: "Pazaryeri satıcıları için yapay zekâ destekli e-ticaret otomasyon platformu. Gemini tabanlı pipeline ile yanıt sürelerini 2+ saatten 5 dakikanın altına indirdim; güvenli fullstack SaaS (Next.js, React, Node.js, Supabase Postgres, JWT, Iyzico), Trendyol API entegrasyonu ve AWS Amplify CI/CD kurdum.",
    },
    technologies: ["Next.js", "React", "Node.js", "Supabase", "JWT", "Iyzico", "Gemini", "Trendyol API", "AWS Amplify"],
    link: "https://sorio.co",
    date: "2025-01-15",
    publishedAt: "2025-01-15T10:00:00Z",
  },
  {
    title: "AI-Fit",
    description: {
      en: "Built an AI-powered virtual dressing room with Expo and React Native, letting users preview outfits on their own photos with visuals generated via the Google Gemini API.",
      tr: "Expo ve React Native ile TypeScript kullanarak geliştirdiğim yapay zeka destekli sanal giyinme odası. Kullanıcılar kendi görselleri üzerinde kıyafetleri deneyerek Google Gemini API ile oluşturduğum görsellerle nasıl göründüklerini anında önizleyebiliyor.",
    },
    technologies: ["Expo", "React Native", "TypeScript", "Google Gemini API"],
    link: "https://github.com/mmdincer/AI-Fit",
    date: "2024-11-10",
    publishedAt: "2024-11-10T10:00:00Z",
  },
  {
    title: "Expense Tracker",
    description: {
      en: "Developed a mobile app that helps individuals and groups track expenses, incomes, and shared debts using Expo, React Native, and TypeScript.",
      tr: "Expo, React Native ve TypeScript kullanarak geliştirdiğim bu mobil uygulama ile kişiler veya gruplar gelirlerini, giderlerini ve borç paylaşımını kolayca takip edebiliyor.",
    },
    technologies: ["Expo", "React Native", "TypeScript"],
    link: "https://github.com/mmdincer/expenseTracker",
    date: "2024-09-20",
    publishedAt: "2024-09-20T10:00:00Z",
  },
  {
    title: "Project Base",
    description: {
      en: "Developed a flexible and scalable API infrastructure using Node.js and Express. Implemented secure user management with JWT and optimized data processing with MongoDB.",
      tr: "Node.js ve Express kullanarak esnek ve ölçeklenebilir bir API altyapısı geliştirdim. JWT ile güvenli kullanıcı yönetimi sağladım ve MongoDB ile veri işleme süreçlerini optimize ettim.",
    },
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/mmdincer/project-base",
    date: "2024-06-15",
    publishedAt: "2024-06-15T10:00:00Z",
  },
  {
    title: "FinShark",
    description: {
      en: "Created a social media-focused API application for stock market data tracking using .NET Core. Integrated SQL Server for fast and accurate stock data processing.",
      tr: ".Net Core kullanarak, kullanıcıların borsa verilerini takip edebileceği sosyal medya odaklı bir API uygulaması geliştirdim. SQL Server veritabanı entegrasyonu ile hisse senedi verilerini hızlı ve doğru şekilde işledim.",
    },
    technologies: [".Net Core", "SQL Server", "JWT"],
    link: "https://github.com/mmdincer/FinShark",
    date: "2024-04-10",
    publishedAt: "2024-04-10T10:00:00Z",
  },
]

export const getProject = (title: string): Project | undefined => {
  return projects.find(project => project.title === title)
}

export const getAllProjects = (): Project[] => {
  const resolveTime = (project: Project) => {
    const published = project.publishedAt ? Date.parse(project.publishedAt) : NaN
    if (!Number.isNaN(published)) {
      return published
    }

    const displayDate = Date.parse(project.date)
    return Number.isNaN(displayDate) ? 0 : displayDate
  }

  return [...projects].sort((a, b) => resolveTime(b) - resolveTime(a))
}

