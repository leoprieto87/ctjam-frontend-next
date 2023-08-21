'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonDefault } from '../../../components/buttons/ButtonDefaut'
import api from '../../../contexts/_api'
import { LoadingModal } from '../../../components/loading/LoadingModal'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { inputClass, labelClass } from '../../../components/input/inputClass'
import { useAuth } from '../../../contexts/AuthContext'

export default function Admin() {
  const router = useRouter()
  const { userLogged } = useAuth()
  const [isLoading, setLoading] = useState(false)

  const userName =
    typeof window !== 'undefined'
      ? userLogged?.nickName === '' || userLogged?.nickName === null
        ? userLogged.name
        : userLogged?.nickName
      : ''

  const createJamFormSchema = z.object({
    name: z.string().nonempty('O nome é obrigatório'),
    data: z.string().nonempty('A data é obrigatória'),
    theme: z.string().nonempty('O tema é obrigatório'),
    address: z.string().nonempty('O endereço é obrigatório'),
    description: z.string(),
    image: z.string(),

    urlPlayList: z.string(),
    isActive: z.boolean(),
    step: z.string(),
  })

  type createJamFormData = z.infer<typeof createJamFormSchema>

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<createJamFormData>({
    resolver: zodResolver(createJamFormSchema),
  })

  async function createJam(jamData: any) {
    setLoading(true)
    console.log(jamData)
    try {
      const sendUseruserDataToRegister = await api.post('/jams/create', jamData)
      if (sendUseruserDataToRegister) {
        router.push('/')
      }
    } catch (error: any) {
      console.log(error.response.data.message, 'erro ao criar registro')
      // alert(error.response.data.message)
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
      {userLogged?.isAdm ? (
        <form
          onSubmit={handleSubmit(createJam)}
          className="w-full px-4 text-left mt-8"
        >
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
              Nome da jam
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register('description')}
              type="textarea"
              name="description"
              id="floating_description"
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="floating_description" className={labelClass}>
              Descrição da Jam
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register('theme')}
              type="text"
              name="theme"
              id="floating_theme"
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="floating_theme" className={labelClass}>
              Tema da jam
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register('image')}
              type="text"
              name="image"
              id="floating_image"
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="floating_image" className={labelClass}>
              Link da imagem
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register('address')}
              type="text"
              name="address"
              id="floating_address"
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="floating_address" className={labelClass}>
              Endereço do evento
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register('data')}
              type="text"
              name="data"
              id="floating_data"
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="floating_data" className={labelClass}>
              Data do evento
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register('step')}
              type="text"
              name="step"
              id="floating_step"
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="floating_step" className={labelClass}>
              Fase do evento
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                {...register('urlPlayList')}
                type="text"
                name="urlPlayList"
                id="floating_urlPlayList"
                className={inputClass}
                placeholder=" "
                required
              />
              <label htmlFor="floating_urlPlayList" className={labelClass}>
                Link da playlist
              </label>
            </div>
            <div className="relative z-0 w-full group flex flex-col text-left">
              <span className="text-sm text-left font-medium text-grayText dark:text-gray-900">
                Ativar Jam
              </span>
              <label className="relative inline-flex items-center mb-4 cursor-pointer">
                <input
                  {...register('isActive')}
                  type="checkbox"
                  value=""
                  name="isActive"
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-graySelect rounded-full dark:left-[2px] peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-graySelect after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-graySelect peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
          <ButtonDefault text={'BORA'} />
        </form>
      ) : (
        <>
          <h1 className="text-4xl text-red-600 pt-8 font-semibold">
            {userName}, vc não tem permissão pra estar aqui =/
          </h1>
        </>
      )}

      {isLoading ? <LoadingModal /> : null}
    </main>
  )
}
