'use client'

import { useForm } from "react-hook-form"

export default function SignIn() {

  const {register, handleSubmit} = useForm()

  async function handleSignIn (data: any) {
    console.log(data)
  }
  return (
    <main className="flex min-h-full flex-col items-center justify-start p-24">
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <label htmlFor="email-address">
          E-mail
        </label>
        <input
          {...register('email')}
          id='email-address'
          name='email'
          autoComplete='email'
          className='email'
          placeholder='Digite seu e-mail'
          required
          >
        </input>
        <label htmlFor="email-address">
          Senha
        </label>
        <input
          {...register('password')}
          id='password'
          name='password'
          autoComplete='current-password'
          className='password'
          placeholder='Digite seu e-mail'
          required
          >
        </input>
        <button type="submit">Entrar</button>
      </form>
    </main>
  )
}
