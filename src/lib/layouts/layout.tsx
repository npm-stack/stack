import { ReactNode } from 'react'
import { buttonVariants } from '@/lib/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { landingPageConfig } from '@/config/site'
import { MainNav } from '@/lib/components/main-nav'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="container sticky top-0 z-40 bg-white">
          <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
            <MainNav items={landingPageConfig.mainNav} />
            <nav>
              <Link href="/login" className={cn(buttonVariants({ size: 'sm' }), 'px-4')}>
                Login
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        {/* <SiteFooter /> */}
      </div>
    </>
  )
}
