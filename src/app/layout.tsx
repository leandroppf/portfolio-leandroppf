import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'

import Spotlight from '@/app/components/Spotlight'

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Leandro Pedroso',
  description: 'Leandro Pedroso Portifolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={[firaCode.className, 'scroll-smooth'].join(' ')}>
      <body className="flex min-h-screen w-screen items-center justify-center overflow-x-hidden bg-background leading-relaxed text-primary antialiased selection:bg-foreground">
        {children}
        <Spotlight />
      </body>
    </html>
  )
}
