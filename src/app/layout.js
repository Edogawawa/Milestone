import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Timefy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel='icon' href="/logo.png"></link>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
