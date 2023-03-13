import { SiteConfig, MarketingConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Npm Stack',
  description: 'An open source application built using Next.js, Tailwind CSS, and TypeScript.',
  url: 'https://npmstack.com',
  ogImage: '',
  links: {
    twitter: '',
    github: '',
  },
}

export const landingPageConfig: MarketingConfig = {
  mainNav: [
    {
      title: 'Features',
      href: '/features',
      disabled: true,
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Contact',
      href: '/contact',
      disabled: true,
    },
  ],
}
