'use client'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../contexts/AuthContext'
import { LoadingModal } from '../../components/loading/LoadingModal'
import { ButtonDefault } from '../../components/buttons/ButtonDefaut'

export default function SignIn() {
  const { isLoading, authLogin } = useAuth()
  const { register, handleSubmit } = useForm()

  const handleLogin = async (data: any) => {
    const userDataRequest = {
      email: data.email,
      password: data.password,
    }
    await authLogin(userDataRequest)
  }

  return (
    <main className="flex min-h-full flex-col items-center text-center justify-start p-4">
      <h2 className="text-xl">
        Entre para ter acesso as Jams e marcar sua presença
      </h2>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col pt-8 w-full space-y-4 md:space-y-6 text-left"
      >
        <div className="flex flex-col">
          <label htmlFor="email-address" className="text-sm">
            E-mail
          </label>
          <input
            {...register('email')}
            id="email-address"
            name="email"
            autoComplete="email"
            placeholder="seuemail@dominio.com"
            required
            className="peer block min-h-[auto] w-full text-sm rounded-xl border-grayText border bg-transparent px-3 py-[0.28rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 border-grayText data-[te-input-state-active]:placeholder:border-grayText opacity-100 motion-reduce:transition-none dark:text-grayText dark:placeholder:text-grayText border-grayText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-50 text-sm border-slate-300"
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email-address" className="text-sm">
            Senha
          </label>
          <input
            {...register('password')}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Digite sua senha"
            required
            className="peer block min-h-[auto] w-full text-sm rounded-xl border-grayText border bg-transparent px-3 py-[0.28rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 border-grayText data-[te-input-state-active]:placeholder:border-grayText opacity-100 motion-reduce:transition-none dark:text-grayText dark:placeholder:text-grayText border-grayText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-50 text-sm border-slate-300"
          ></input>
        </div>
        <ButtonDefault text={'Entrar'} />
      </form>
      {isLoading ? <LoadingModal /> : null}
    </main>
  )
}
