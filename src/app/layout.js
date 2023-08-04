import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Youtube Description',
  description: 'youtube description AI',  
}
Head
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
