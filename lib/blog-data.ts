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
    slug: "load-balancing",
    title: {
      en: "Load Balancing",
      tr: "Load Balancing"
    },
    description: {
      en: "Exploring load balancing techniques and their importance in distributed systems and web applications.",
      tr: "Dağıtık sistemlerde ve web uygulamalarında yük dengeleme teknikleri ve önemini inceleyen yazım."
    },
    date: "2025-01-20",
    publishedAt: "2025-01-20T10:00:00Z",
    tags: ["DevOps", "System Design", "Infrastructure"],
    content: {
      en: "Exploring load balancing techniques and their importance in distributed systems and web applications.",
      tr: "Dağıtık sistemlerde ve web uygulamalarında yük dengeleme teknikleri ve önemini inceleyen yazım."
    },
    author: "Muhammet Mustafa Dincer",
    externalUrl: "https://medium.com/@mmdincer/load-balancing-a255d9d9614e"
  },
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
  },
  {
    slug: "leetcode-challenge-6-3147",
    title: {
      en: "leetcode challenge-6",
      tr: "leetcode challenge-6"
    },
    description: {
      en: "soru: 3147. Taking Maximum Energy From the Mystic Dungeon\nzorluk: medium",
      tr: "soru: 3147. Taking Maximum Energy From the Mystic Dungeon\nzorluk: medium"
    },
    date: "2025-10-10",
    publishedAt: "2025-10-10T10:00:00Z",
    tags: ["LeetCode", "Array", "Dynamic Programming", "Medium"],
    content: {
      en: "soru: 3147. Taking Maximum Energy From the Mystic Dungeon zorluk: medium",
      tr: "soru: 3147. Taking Maximum Energy From the Mystic Dungeon zorluk: medium"
    },
    author: "Muhammet Mustafa Dincer",
    externalUrl: "https://medium.com/@mmdincer/leetcode-challenge-6-548d41717699"
  },
  {
    slug: "leetcode-challenge-7-1769",
    title: {
      en: "leetcode challenge-7",
      tr: "leetcode challenge-7"
    },
    description: {
      en: "soru: 1769. Minimum Number of Operations to Move All Balls to Each Box\nzorluk: medium",
      tr: "soru: 1769. Minimum Number of Operations to Move All Balls to Each Box\nzorluk: medium"
    },
    date: "2025-10-13",
    publishedAt: "2025-10-13T10:00:00Z",
    tags: ["LeetCode", "Array", "String", "Prefix Sum", "Medium"],
    content: {
      en: "soru: 1769. Minimum Number of Operations to Move All Balls to Each Box zorluk: medium",
      tr: "soru: 1769. Minimum Number of Operations to Move All Balls to Each Box zorluk: medium"
    },
    author: "Muhammet Mustafa Dincer",
    externalUrl: "https://medium.com/@mmdincer/leetcode-challenge-7-dce35c0cdc8e"
  },
  {
    slug: "leetcode-challenge-8-2161",
    title: {
      en: "leetcode challenge-8",
      tr: "leetcode challenge-8"
    },
    description: {
      en: "soru: 2161. Partition Array According to Given Pivot\nzorluk: medium",
      tr: "soru: 2161. Partition Array According to Given Pivot\nzorluk: medium"
    },
    date: "2025-10-15",
    publishedAt: "2025-10-15T10:00:00Z",
    tags: ["LeetCode", "Array", "Two Pointers", "Medium"],
    content: {
      en: "soru: 2161. Partition Array According to Given Pivot zorluk: medium",
      tr: "soru: 2161. Partition Array According to Given Pivot zorluk: medium"
    },
    author: "Muhammet Mustafa Dincer",
    externalUrl: "https://medium.com/@mmdincer/leetcode-challenge-8-264b5d98e698"
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