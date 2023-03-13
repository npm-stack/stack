import React from 'react'

export const HomeSection = () => {
  return (
    <div>
      <div className="mx-auto flex flex-col items-start gap-4 lg:w-[52rem]">
        <h1 className="text-3xl font-bold leading-[1.1] tracking-tighter md:text-6xl">
          Free and Open-Source UI Components for Maximum Productivity.
        </h1>
        <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8">
          I&apos;m building a web app with Next.js 13 and open sourcing everything. Follow along as
          we figure this out together.
        </p>
      </div>
    </div>
  )
}
