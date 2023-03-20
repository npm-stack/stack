import { SiteConfig, MarketingConfig, Feature } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'NPMStack',
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

export const features: Feature[] = [
  {
    title: 'Next.js',
    description: 'The React Framework for Production',
    href: 'https://nextjs.org/',
    src: '/images/nextjs.svg',
  },
  {
    title: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapidly building custom designs.',
    href: 'https://tailwindcss.com/',
    src: '/images/tailwindcss.svg',
  },
  {
    title: 'TypeScript',
    description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    href: 'https://www.typescriptlang.org/',
    src: '/images/typescript.svg',
  },
  {
    title: 'NextAuth.js',
    description: 'Authentication for Next.js',
    href: 'https://next-auth.js.org/',
    src: '/images/nextauthjs.svg',
  },
  {
    title: 'Prisma',
    description: 'Prisma is an open-source database toolkit.',
    href: 'https://www.prisma.io/',
    src: '/images/prisma.svg',
  },
  {
    title: 'PlanetScale',
    description: 'PlanetScale is a database platform for modern applications.',
    href: 'https://planetscale.com/',
    src: '/images/planetscale.svg',
  },
  {
    title: 'Stripe',
    description:
      'Stripe is a suite of payment APIs that powers commerce for online businesses of all sizes.',
    href: 'https://stripe.com/',
    src: '/images/stripe.svg',
  },
]
