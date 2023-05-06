import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gabriel Vaz - Frontend Engineer',
  description: 'Gabriel Vaz - Frontend Engineer - React, Next.js, TypeScript, Node.js, AWS, SQL, NoSQL and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
