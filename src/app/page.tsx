'use client'

import { ButtonRegister, ButtonSignIn } from "../components/buttons/ButtonRegister"
import { useState } from "react"

export default function Home() {
  const [isLogged, setlogged] = useState(false)
  // const isLogged = false
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-3">
      {!isLogged ? 
        <>
          <ButtonRegister />
          <ButtonSignIn />
        </>
        : 
        // <ButtonSignIn />
        <p>Usuario está logado!</p> 
      }
    </main>
  )
}
