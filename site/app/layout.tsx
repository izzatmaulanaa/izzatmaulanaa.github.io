import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  title: 'Ahmad Izzat — Software Engineer & Digital Marketer | Banyuwangi',
  description: 'Software Engineer, Content Designer, Digital Marketer, SEO Consultant, and Web Developer from Banyuwangi with proven sales track record.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} bg-background text-foreground antialiased min-h-full`}>{children}</body>
    </html>
  )
}
