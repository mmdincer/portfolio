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
    date: "2025-09-29",
    publishedAt: "2025-09-29T10:00:00Z",
    tags: ["LeetCode", "JavaScript", "Debounce", "Medium"],
    content: {
      en: "soru: 2627. Debounce zorluk: medium",
      tr: "soru: 2627. Debounce zorluk: medium"
    },
    author: "Muhammet Mustafa Dincer",
    externalUrl: "https://medium.com/@mmdincer/leetcode-challenge-1-2627-b48fa880b6ce"
  },
  {
    slug: "leetcode-challenge-2-1518",
    title: {
      en: "leetcode challenge-2",
      tr: "leetcode challenge-2"
    },
    description: {
      en: "soru: 1518. Water Bottles\nzorluk: easy",
      tr: "soru: 1518. Water Bottles\nzorluk: easy"
    },
    date: "2025-10-01",
    publishedAt: "2025-10-01T10:00:00Z",
    tags: ["LeetCode", "Math", "Simulation", "Easy"],
    content: {
      en: "soru: 1518. Water Bottles zorluk: easy",
      tr: "soru: 1518. Water Bottles zorluk: easy"
    },
    author: "Muhammet Mustafa Dincer",
    externalUrl: "https://medium.com/@mmdincer/leetcode-challenge-2-6f29789544ab"
  },
  {
    slug: "leetcode-challenge-3-3248",
    title: {
      en: "leetcode challenge-3",
      tr: "leetcode challenge-3"
    },
    description: {
      en: "soru: 3248. Snake in Matrix\nzorluk: easy",
      tr: "soru: 3248. Snake in Matrix\nzorluk: easy"
    },
    date: "2025-10-03",
    publishedAt: "2025-10-03T10:00:00Z",
    tags: ["LeetCode", "Array", "Simulation", "String", "Easy"],
    content: {
      en: "soru: 3248. Snake in Matrix zorluk: easy",
      tr: "soru: 3248. Snake in Matrix zorluk: easy"
    },
    author: "Muhammet Mustafa Dincer",
    externalUrl: "https://medium.com/@mmdincer/leetcode-challenge-3-e1964efb00c6"
  },
  {
    slug: "leetcode-challenge-4-2807",
    title: {
      en: "leetcode challenge-4",
      tr: "leetcode challenge-4"
    },
    description: {
      en: "soru: 2807. Insert Greatest Common Divisors in Linked List\nzorluk: medium",
      tr: "soru: 2807. Insert Greatest Common Divisors in Linked List\nzorluk: medium"
    },
    date: "2025-10-06",
    publishedAt: "2025-10-06T10:00:00Z",
    tags: ["LeetCode", "Linked List", "Math", "Number Theory", "Medium"],
    content: {
      en: "soru: 2807. Insert Greatest Common Divisors in Linked List zorluk: medium",
      tr: "soru: 2807. Insert Greatest Common Divisors in Linked List zorluk: medium"
    },
    author: "Muhammet Mustafa Dincer",
    externalUrl: "https://medium.com/@mmdincer/leetcode-challenge-4-cc4de64345ce"
  },
  {
    slug: "leetcode-challenge-5-2300",
    title: {
      en: "leetcode challenge-5",
      tr: "leetcode challenge-5"
    },
    description: {
      en: "soru: 2300. Successful Pairs of Spells and Potions\nzorluk: medium",
      tr: "soru: 2300. Successful Pairs of Spells and Potions\nzorluk: medium"
    },
    date: "2025-10-08",
    publishedAt: "2025-10-08T10:00:00Z",
    tags: ["LeetCode", "Array", "Binary Search", "Sorting", "Medium"],
    content: {
      en: "soru: 2300. Successful Pairs of Spells and Potions zorluk: medium",
      tr: "soru: 2300. Successful Pairs of Spells and Potions zorluk: medium"
    },
    author: "Muhammet Mustafa Dincer",
    externalUrl: "https://medium.com/@mmdincer/leetcode-challenge-5-95c7384f9888"
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