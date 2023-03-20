import Image from 'next/image'
import React from 'react'
import { Button, buttonVariants } from '@/lib/components/ui/button'
import { features } from '@/config/site'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const FeatureSection = () => {
  return (
    <section aria-labelledby="Hero-Banner">
      <div className="mx-auto flex flex-col items-start gap-4 px-6 py-8 md:py-12 lg:w-[52rem] lg:px-0 lg:py-24">
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">Features</h1>
        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start gap-4 rounded-lg">
              <h2 className="text-2xl font-bold leading-[1.1] tracking-tight md:text-3xl">
                {feature.title}
              </h2>
              <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8">
                {feature.description}
              </p>
              <Link className={cn(buttonVariants)} href={feature.href}>
                View Docs
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
