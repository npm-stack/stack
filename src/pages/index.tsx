import Head from 'next/head'
import { HomeSection, FeatureSection } from '@/lib/components/sections'

const Home = () => {
  return (
    <>
      <Head>
        <title>Next.js SaaS Starter Kit</title>
        <meta name="description" content="Next.js SaaS Starter Kit" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <section className="divide-y">
        <HomeSection />
        <FeatureSection />
      </section>
    </>
  )
}

export default Home
