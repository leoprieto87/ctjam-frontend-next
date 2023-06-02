'use client'

import { usePathname, useRouter } from 'next/navigation'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { LogoJam } from '../logoJam/LogoJam'

export function NavigationHeader() {
  const router = useRouter()
  const routerPathName = usePathname()

  const handleGoBack = () => {
    router.back()
  }

  if (routerPathName !== '/') {
    // Lógica específica para não exibir a navegação na home '/'
    return (
      <header className="w-full flex-col p-3">
        <aside className="flex min-w-full flex-row items-center justify-between">
          <button onClick={handleGoBack}>
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <LogoJam className={'w-9'} />
        </aside>
      </header>
    )
  } else {
    return null
  }
}
