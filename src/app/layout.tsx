import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CT Jam',
  description: 'App para formar uma jam real, com a qualidade de um grande show',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' flex min-h-screen flex-col items-center justify-between p-4'}>
        <header>
          <h1>CT Jam</h1>
          <h2>App para formar uma jam real, com a qualidade de um grande show</h2>
        </header>
        {children}
      </body>
    </html>
  )
}
