'use client'

import {
  ButtonGoToJam,
  ButtonRegister,
  ButtonSignIn,
} from '../components/buttons/ButtonsSignIn'
import { useEffect } from 'react'
import { LogoJam } from '../components/logoJam/LogoJam'
import { useAuth } from '../contexts/AuthContext'

export default function Home() {
  const { userLogged } = useAuth()

  const userName =
    typeof window !== 'undefined'
      ? userLogged?.nickname === '' || userLogged?.nickname === null
        ? userLogged.name
        : userLogged?.nickname
      : ''

  useEffect(() => {
    // console.log('userLogged', userLogged)
  }, [userLogged])

  return (
    <main
      className="
      bg-heroBanner 
      bg-no-repeat 
      bg-cover 
      flex 
      min-h-full 
      flex-col 
      items-center 
      content-center 
      justify-start 
      p-4 
      pt-20
    "
    >
      <section className="flex min-h-full flex-col items-center text-center">
        <LogoJam className={'w-32'} />

        {userLogged ? (
          <>
            <h1 className="text-4xl text-white pt-6 font-semibold drop-shadow">
              Olá {userName}, tudo bem?{' '}
            </h1>

            <h2 className="text-2xl text-black pt-3 py-3">
              Encontre uma JAM e se prepare para o show!
            </h2>
            <ButtonGoToJam />
          </>
        ) : (
          <>
            <h1 className="text-4xl text-white pt-6 font-semibold drop-shadow">
              PRONTO PARA A GIG?
            </h1>
            <h2 className="text-2xl text-black pt-3 py-3">
              App para formar uma jam real, com a qualidade de um grande show!
            </h2>
            <ButtonRegister />
            <ButtonSignIn />
          </>
        )}
      </section>
    </main>
  )
}
