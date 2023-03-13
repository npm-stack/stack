import Image from 'next/image'
import React from 'react'
import { Button } from '@/lib/components/ui/button'

export const HomeSection = () => {
  return (
    <div>
      <div className="mx-auto flex flex-col items-start gap-4 px-6 lg:w-[52rem] lg:px-0">
        <Image src="/hero.svg" alt="Hero" width={350} height={100} className="rounded-lg" />
        <h1 className="-mt-12 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:-mt-16">
          Tell your visitors why your SaaS is awesome
        </h1>
        <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8">
          I&apos;m buidling an open-souce SaaS starter kit with Next.js, Tailwind CSS, and Prisma.
          You can use it to build your own SaaS.
        </p>
        <div className="mt-2 flex space-x-2">
          <Button>Get Started</Button>
          <Button variant={'outline'}>Github</Button>
        </div>
      </div>
    </div>
  )
}
