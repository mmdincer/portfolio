export interface BlogPost {
  slug: string
  title: {
    en: string
    tr: string
  }
  description: {
    en: string
    tr: string
  }
  date: string
  publishedAt?: string
  readTime: string
  tags: string[]
  content: {
    en: string
    tr: string
  }
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "scalable-backend-nodejs",
    title: {
      en: "Building Scalable Backend Systems with Node.js",
      tr: "Node.js ile Ölçeklenebilir Backend Sistemleri Geliştirme"
    },
    description: {
      en: "Learn how to design and implement robust backend architectures that can handle high traffic and complex business logic using Node.js and modern development practices.",
      tr: "Node.js ve modern geliştirme uygulamaları kullanarak yüksek trafiği ve karmaşık iş mantığını kaldırabilecek sağlam backend mimarileri nasıl tasarlayıp uygulayacağınızı öğrenin."
    },
    date: "2024-01-15",
    publishedAt: "2024-01-15T10:00:00Z",
    readTime: "8 dk",
    tags: ["Node.js", "Backend", "Scalability", "Architecture"],
    content: {
      en: "In this comprehensive guide, we'll explore the essential principles of building scalable backend systems using Node.js. We'll cover microservices architecture, database optimization, caching strategies, and deployment best practices.",
      tr: "Bu kapsamlı rehberde, Node.js kullanarak ölçeklenebilir backend sistemleri oluşturmanın temel ilkelerini keşfedeceğiz. Mikroservis mimarisi, veritabanı optimizasyonu, önbellekleme stratejileri ve dağıtım en iyi uygulamalarını ele alacağız."
    },
    author: "Muhammet Mustafa Dincer"
  },
  {
    slug: "database-optimization-techniques",
    title: {
      en: "Database Optimization Techniques for High Performance",
      tr: "Yüksek Performans için Veritabanı Optimizasyon Teknikleri"
    },
    description: {
      en: "Discover advanced database optimization strategies including indexing, query optimization, and performance monitoring to maximize your application's efficiency.",
      tr: "İndeksleme, sorgu optimizasyonu ve performans izleme dahil olmak üzere gelişmiş veritabanı optimizasyon stratejilerini keşfederek uygulamanızın verimliliğini maksimize edin."
    },
    date: "2024-01-08",
    publishedAt: "2024-01-08T14:30:00Z",
    readTime: "12 dk",
    tags: ["Database", "Performance", "Optimization", "SQL"],
    content: {
      en: "Database performance is crucial for any modern application. In this article, we'll dive deep into optimization techniques that can dramatically improve your application's speed and efficiency.",
      tr: "Veritabanı performansı modern herhangi bir uygulama için kritiktir. Bu makalede uygulamanızın hızını ve verimliliğini dramatik şekilde artırabilecek optimizasyon tekniklerine derinlemesine dalacağız."
    },
    author: "Muhammet Mustafa Dincer"
  },
  {
    slug: "api-security-best-practices-2024",
    title: {
      en: "API Security Best Practices in 2024",
      tr: "2024'te API Güvenliği En İyi Uygulamaları"
    },
    description: {
      en: "Explore essential API security measures including authentication, authorization, rate limiting, and data validation to protect your backend services.",
      tr: "Backend servislerinizi korumak için kimlik doğrulama, yetkilendirme, hız sınırlama ve veri doğrulama dahil olmak üzere temel API güvenlik önlemlerini keşfedin."
    },
    date: "2023-12-22",
    publishedAt: "2023-12-22T09:15:00Z",
    readTime: "10 dk",
    tags: ["API", "Security", "Authentication", "Best Practices"],
    content: {
      en: "API security is more important than ever in today's interconnected world. Let's explore the key security measures every backend developer should implement to protect their services.",
      tr: "API güvenliği günümüzün birbirine bağlı dünyasında her zamankinden daha önemli. Her backend geliştiricinin servislerini korumak için uygulaması gereken temel güvenlik önlemlerini keşfedelim."
    },
    author: "Muhammet Mustafa Dincer"
  }
]

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug)
}

export const getAllBlogPosts = (): BlogPost[] => {
  const resolveTime = (post: BlogPost) => {
    const published = post.publishedAt ? Date.parse(post.publishedAt) : NaN
    if (!Number.isNaN(published)) {
      return published
    }

    const displayDate = Date.parse(post.date)
    return Number.isNaN(displayDate) ? 0 : displayDate
  }

  return [...blogPosts].sort((a, b) => resolveTime(b) - resolveTime(a))
}