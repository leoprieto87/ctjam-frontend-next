'use client'

// import { LoadingModal } from '../../components/loading/LoadingModal'
// import { useState } from 'react'

import { useAuth } from '../../contexts/AuthContext'
import Link from 'next/link'
import { ButtonDefault } from '../../components/buttons/ButtonDefaut'

export default function Admin() {
  const { userLogged } = useAuth()
  // const [isLoading, setLoading] = useState(false)

  const userName =
    typeof window !== 'undefined'
      ? userLogged?.nickName === '' || userLogged?.nickName === null
        ? userLogged.name
        : userLogged?.nickName
      : ''

  return (
    <main className="flex min-h-full flex-col items-center justify-start p-4 text-center">
      {userLogged?.isAdm ? (
        <>
          <h2 className="text-xl">
            Fala adm {userName}, aqui você pode criar uma jam ou alterar e
            ativar as jams já criadas.
          </h2>
          <Link
            href={'/admin/newJam'}
            className="inline-flex flex-col items-center justify-center text-center"
          >
            <ButtonDefault text={'Criar nova jam'} />
          </Link>
        </>
      ) : (
        <>
          <h1 className="text-2xl text-red-600 pt-8 font-semibold">
            {userName}, vc não tem permissão pra estar aqui =/
          </h1>
        </>
      )}

      {/* {isLoading ? <LoadingModal /> : null} */}
    </main>
  )
}
