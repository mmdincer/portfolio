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
  externalUrl?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "leetcode-challenge-1-2627",
    title: {
      en: "leetcode challenge-1",
      tr: "leetcode challenge-1"
    },
    description: {
      en: "soru: 2627. Debounce\nzorluk: medium",
      tr: "soru: 2627. Debounce\nzorluk: medium"
    },
    date: "2025-01-29",
    publishedAt: "2025-01-29T10:00:00Z",
    readTime: "5 dk",
    tags: ["LeetCode", "JavaScript", "Debounce", "Medium"],
    content: {
      en: "soru: 2627. Debounce zorluk: medium",
      tr: "soru: 2627. Debounce zorluk: medium"
    },
    author: "Muhammet Mustafa Dincer",
    externalUrl: "https://medium.com/@mmdincer/leetcode-challenge-1-2627-b48fa880b6ce"
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