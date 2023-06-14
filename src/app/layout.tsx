import { NavigationHeader } from '../components/navigation/NavigationHeader'
import { NavigationMenu } from '../components/navigation/NavigationMenu'
import { AuthProvider } from '../contexts/AuthContext'
import './globals.css'
import { Nunito } from 'next/font/google'

const adventPro = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'CT Jam',
  description:
    'App para formar uma jam real, com a qualidade de um grande show',
}

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={
          adventPro.className +
          ' min-h-screen bg-grayBg text-black bg-no-repeat flex h-screen flex-col items-center justify-start'
        }
      >
        <AuthProvider>
          <NavigationHeader />
          {children}
          <NavigationMenu />
        </AuthProvider>
      </body>
    </html>
  )
}
