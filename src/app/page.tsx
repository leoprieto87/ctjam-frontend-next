'use client'

import {
  ButtonGoToJam,
  ButtonRegister,
  ButtonSignIn,
} from '../components/buttons/ButtonsSignIn'
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

  return (
    <main
      className="
      bg-heroBanner 
      bg-no-repeat 
      bg-contain
      bg-white 
      flex 
      min-h-full 
      h-full 
      w-full 
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
            <h1 className="text-4xl text-white pt-8 font-semibold drop-shadow">
              Olá {userName}, tudo bem?{' '}
            </h1>

            <h2 className="text-2xl text-black pt-3 py-3 mb-6">
              Encontre uma JAM e se prepare para o show!
            </h2>
            <ButtonGoToJam />
          </>
        ) : (
          <>
            <h1 className="text-4xl text-gray pt-8 font-semibold mt-6 mb-6">
              App para formar uma jam real, com a qualidade de um grande show!
            </h1>
            <ButtonRegister />
            <ButtonSignIn />
          </>
        )}
      </section>
    </main>
  )
}
