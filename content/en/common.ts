export const common = {
  siteName: 'onehub',
  siteTitle: 'One Hub Ottawa | Connect. Discover. Grow.',
  siteDescription:
    'The premier directory for Ottawa businesses. Connect with local entrepreneurs, discover new services, and grow your business network.',
  logo: {
    one: 'one',
    hub: 'hub',
    ariaLabel: 'onehub home',
  },
  footer: {
    copyright: (year: number) => `© ${year} onehub. All rights reserved.`,
  },
  required: 'Required',
  optional: 'Optional',
} as const;
