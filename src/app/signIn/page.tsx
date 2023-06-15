'use client'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../contexts/AuthContext'
import { LoadingModal } from '../../components/loading/LoadingModal'
import { ButtonDefault } from '../../components/buttons/ButtonDefaut'
import { inputClass, labelClass } from '../register/page'

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
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register('email')}
            type="email"
            name="email"
            id="floating_email"
            className={inputClass}
            placeholder=" "
            required
          />
          <label htmlFor="floating_email" className={labelClass}>
            E-mail
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register('password')}
            type="password"
            name="password"
            id="floating_password"
            className={inputClass}
            placeholder=" "
            required
          />
          <label htmlFor="floating_password" className={labelClass}>
            Senha
          </label>
        </div>

        <ButtonDefault text={'Entrar'} />
      </form>
      {isLoading ? <LoadingModal /> : null}
    </main>
  )
}
