'use client'

import { useAuth } from '../../contexts/AuthContext'
import Link from 'next/link'

// import { usePathname } from 'next/navigation'

export function NavigationMenu() {
  // const routerPathName = usePathname()
  const { userLogged } = useAuth()

  const gridNavNumber = userLogged?.isAdm ? 'grid-cols-3' : 'grid-cols-2'

  return (
    <>
      {userLogged ? (
        <div className="fixed end-0 bottom-0 left-0 z-20 w-full bg-white h-16 dark:bg-gray-800 border-t border-slate-600 dark:bg-gray-700 dark:border-slate-600">
          <div
            className={`grid ${gridNavNumber} h-full max-w-lg mx-auto font-medium bg-gray-800`}
          >
            <button
              type="button"
              className="bg-gray-800 inline-flex flex-col items-center justify-center px-5 border-r border-slate-600 hover:bg-gray-200 dark:hover:bg-gray-800 group dark:border-slate-600"
            >
              <Link
                href={'/profile'}
                className="inline-flex flex-col items-center justify-center text-center"
              >
                {!userLogged?.image ? (
                  <>
                    <svg
                      className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      ></path>
                    </svg>
                  </>
                ) : (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      width={24}
                      height={24}
                      src={userLogged.image}
                      // src={userLogged.image}
                      alt="Foto do perfil"
                      className="rounded-full"
                    />
                  </>
                )}

                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                  Meu perfil
                </span>
              </Link>
            </button>

            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 bg-gray-800 group"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Minhas jams
              </span>
            </button>
            {userLogged?.isAdm ? (
              <>
                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group border-l border-slate-600 hover:bg-gray-200 dark:hover:bg-gray-800 group dark:border-slate-600"
                >
                  <Link
                    href={'/admin'}
                    className="inline-flex flex-col items-center justify-center text-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                      ADM
                    </span>
                  </Link>
                </button>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  )
}
