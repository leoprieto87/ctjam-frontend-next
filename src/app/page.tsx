'use client'

import { ButtonGoToJam, ButtonRegister, ButtonSignIn } from "../components/buttons/ButtonsSignIn"
import { useEffect, useState } from "react"
import { useGlobalContext } from "../contexts/AuthContext"
import { LogoJam }  from "../components/logoJam/LogoJam"


export default function Home() {
  const {isLogged} = useGlobalContext()
  
  useEffect(() => {
    console.log('isLogged', isLogged)
  }, [])

  return (
    <main className="
      bg-heroBanner 
      bg-no-repeat 
      bg-cover 
      flex 
      min-h-full 
      flex-col 
      items-center 
      content-center 
      justify-start 
      p-3 
      pt-20
    ">
      <section className="flex min-h-full flex-col items-center text-center">
        <LogoJam className={'w-32'} />
        <h1 className="text-4xl text-white pt-8">PRONTO PARA A GIG?</h1>
        <h2 className="text-2xl text-black pt-3 py-3">App para formar uma jam real, com a qualidade de um grande show!</h2>
      </section>
      {!isLogged ? 
        <>
          <ButtonRegister />
          <ButtonSignIn />
        </>
        : 
          <ButtonGoToJam />
      }
    </main>
  )
}
