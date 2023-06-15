'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonDefault } from '../../components/buttons/ButtonDefaut'
import api from '../../contexts/_api'
import { LoadingModal } from '../../components/loading/LoadingModal'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { LoadingModal } from '../../components/loading/LoadingModal'

export const inputClass =
  'rounded-lg block p-3 w-full text-sm text-gray bg-transparent border border-graySelect appearance-none dark:text-gray dark:border-graySelect dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'

export const labelClass =
  'px-2 peer-focus:font-medium absolute text-sm text-zinc-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:px-0  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1.5 peer-focus:scale-75 peer-focus:-translate-y-6'

export default function Register() {
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)

  const createUserFormSchema = z.object({
    name: z
      .string()
      .nonempty('O nome é obrigatório')
      // eslint-disable-next-line prettier/prettier
      .transform((name) => {
        const words = name.split(' ')
        const capitalizedWords = words.map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1)
        })
        return capitalizedWords.join(' ')
      }),
    password: z.string().min(6, 'A senha precisa de no mínimo 6 caracteres'),
    email: z.string().nonempty('O e-mail é obrigatório'),
    leftHanded: z.boolean(),
    phone: z.string(),
  })

  type createUserFormData = z.infer<typeof createUserFormSchema>

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  })

  async function createUser(userData: any) {
    setLoading(true)
    try {
      const sendUseruserDataToRegister = await api.post(
        '/users/register',
        userData,
      )
      if (sendUseruserDataToRegister) {
        router.push('/')
      }
    } catch (error: any) {
      // console.log(error.response.data.message, 'erro ao criar registro')
      alert(error.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-full flex-col items-center justify-start p-4 text-center">
      <h2 className="text-xl">
        Pra você fazer parte da jam, precisamos de algumas informações. Bora pro
        cadastro?
      </h2>
      <form
        onSubmit={handleSubmit(createUser)}
        className="w-full px-4 text-left mt-8"
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
            Seu melhor e-mail
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
            Senha (min de 6 caracteres)
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register('name')}
            type="text"
            name="name"
            id="floating_name"
            className={inputClass}
            placeholder=" "
            required
          />
          <label htmlFor="floating_name" className={labelClass}>
            Nome completo
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register('phone')}
              type="phone"
              pattern="[0-9]{11}"
              name="phone"
              id="floating_phone"
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="floating_phone" className={labelClass}>
              Telefone 11999999999
            </label>
          </div>
          <div className="relative z-0 w-full group flex flex-col text-left">
            <span className="text-sm text-left font-medium text-grayText dark:text-gray-900">
              Canhoto
            </span>
            <label className="relative inline-flex items-center mb-4 cursor-pointer">
              <input
                {...register('leftHanded')}
                type="checkbox"
                value=""
                name="leftHanded"
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-graySelect rounded-full dark:left-[2px] peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-graySelect after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-graySelect peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <ButtonDefault text={'BORA'} />
      </form>
      {isLoading ? <LoadingModal /> : null}
    </main>
  )
}
