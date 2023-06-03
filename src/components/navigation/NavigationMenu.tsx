'use client'

import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import Link from 'next/link'

// import { usePathname } from 'next/navigation'

export function NavigationMenu() {
  // const routerPathName = usePathname()
  const { userLogged } = useAuth()

  return (
    <>
      {userLogged ? (
        <div className="fixed bottom-0 left-0 z-20 w-full bg-white h-16 dark:bg-gray-800 border-t border-slate-600 dark:bg-gray-700 dark:border-slate-600">
          <div className="grid h-full max-w-lg grid-cols-2 mx-auto font-medium bg-gray-800">
            <button
              type="button"
              className=" bg-gray-800 inline-flex flex-col items-center justify-center px-5 border-r border-slate-600 hover:bg-gray-200 dark:hover:bg-gray-800 group dark:border-slate-600"
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
                    <img
                      width={24}
                      height={24}
                      src={userLogged.image}
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
            {/* <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 border-slate-600 hover:bg-gray-50 dark:hover:bg-gray-800 group border-l dark:border-slate-600"
        >
          <svg
            className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
            ></path>
          </svg>
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Wallet
          </span> 
        </button> */}
          </div>
        </div>
      ) : null}
    </>
  )
}
