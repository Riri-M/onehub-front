export const nav = {
  links: [
    { href: '/about', label: 'ABOUT US' },
    { href: '/add', label: 'ADD BUSINESS' },
    { href: '/#businesses', label: 'DIRECTORY', path: '/' },
    { href: '/events', label: 'EVENTS' },
    { href: '/contact', label: 'CONTACT/CONNECT' },
    { href: '/careers', label: 'CAREERS' },
  ],
  search: {
    placeholder: 'Search businesses...',
    ariaLabel: 'Search businesses',
    submitAriaLabel: 'Submit search',
  },
  mobileToggleAriaLabel: 'Toggle menu',
} as const;
