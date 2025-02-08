import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'

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
      <body className="min-h-screen w-screen bg-background text-primary antialiased selection:bg-foreground">
        {children}
      </body>
    </html>
  )
}
