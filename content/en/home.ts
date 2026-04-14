export const home = {
  meta: {
    title: 'One Hub Ottawa | Connect. Discover. Grow.',
    description:
      'The premier directory for Ottawa businesses. Connect with local entrepreneurs, discover new services, and grow your business network.',
  },
  hero: {
    badge: (count: number) => `${count}+ Ottawa businesses connected`,
    headline: {
      line1: 'Connect.',
      line2: 'Discover.',
      line3: 'Grow.',
    },
    body: "The premier destination for Ottawa's business community. Find local services, connect with entrepreneurs, and grow your network.",
    cta: {
      explore: 'Explore Businesses',
      add: 'Add Your Business',
    },
  },
  stats: {
    businesses: { label: 'Active Businesses' },
    categories: { label: 'Categories' },
    local: { value: '100%', label: 'Local Ottawa' },
    price: { value: 'Free', label: 'to Join' },
  },
  directory: {
    heading: 'Discover Local',
    headingHighlight: 'Businesses',
    body: "Browse our curated directory of Ottawa's finest businesses, from cozy cafes to innovative tech startups.",
    error: 'Failed to load businesses. Please try again later.',
  },
  cta: {
    heading: 'Ready to grow your business?',
    body: "Join hundreds of Ottawa businesses already connected on One Hub. It's free, fast, and takes less than 2 minutes.",
    button: 'Get Listed Today',
  },
} as const;
