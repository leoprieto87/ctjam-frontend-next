import { NavigationHeader } from '../components/navigation/NavigationHeader'
import { AuthProvider } from '../contexts/AuthContext'
import './globals.css'
import { Inter, Nunito } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
const adventPro = Nunito({ subsets: ['latin'] })

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
      <body className={adventPro.className + ' bg-grayBg text-black flex min-h-full h-full flex-col items-center justify-start'}>
        <AuthProvider>
          <NavigationHeader />
          {children}
          <footer>
            ### MENU
          </footer> 
        </AuthProvider>
      </body>
    </html>
  )
}
