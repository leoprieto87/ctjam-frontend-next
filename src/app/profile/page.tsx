'use client'
// import { useState } from 'react'
// import { LoadingModal } from '../../components/loading/LoadingModal'
import { useAuth } from '../../contexts/AuthContext'

export default function Profile() {
  // const [isLoading, setLoading] = useState(false)
  const { userLogged } = useAuth()
  const userName =
    typeof window !== 'undefined'
      ? userLogged?.nickname === '' || userLogged?.nickname === null
        ? userLogged.name
        : userLogged?.nickname
      : ''

  return (
    <main className="flex min-h-full flex-col items-center text-center justify-start p-4">
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img
        width={150}
        height={150}
        src={userLogged?.image}
        alt="Foto do perfil"
        className="rounded-full"
      ></img>

      <h1 className="text-2xl p-6">
        Fala {userName}, confira as informações de seu perfil:
      </h1>
      <ul className="w-full flex flex-col align-left text-left p-2">
        <li>
          <label className="mb-6">
            Nome:
            <input
              id="artist"
              name="artist"
              autoComplete="artist"
              value={userLogged?.name}
              required
              className="peer block min-h-[auto] w-full text-sm rounded-xl border-grayText border bg-transparent px-3 py-[0.28rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 border-grayText data-[te-input-state-active]:placeholder:border-grayText opacity-100 motion-reduce:transition-none dark:text-grayText dark:placeholder:text-grayText border-grayText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-50 text-sm border-slate-300"
            ></input>
          </label>
        </li>
        <li>
          {' '}
          <label className="mb-6">
            Telefone:
            <input
              id="artist"
              name="artist"
              autoComplete="artist"
              value={userLogged?.phone}
              required
              className="peer block min-h-[auto] w-full text-sm rounded-xl border-grayText border bg-transparent px-3 py-[0.28rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 border-grayText data-[te-input-state-active]:placeholder:border-grayText opacity-100 motion-reduce:transition-none dark:text-grayText dark:placeholder:text-grayText border-grayText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-50 text-sm border-slate-300"
            ></input>
          </label>
        </li>
        <li>
          {' '}
          <label className="mb-6">
            E-mail:
            <input
              id="artist"
              name="artist"
              autoComplete="artist"
              value={userLogged?.email}
              required
              className="peer block min-h-[auto] w-full text-sm rounded-xl border-grayText border bg-transparent px-3 py-[0.28rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 border-grayText data-[te-input-state-active]:placeholder:border-grayText opacity-100 motion-reduce:transition-none dark:text-grayText dark:placeholder:text-grayText border-grayText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-50 text-sm border-slate-300"
            ></input>
          </label>
        </li>
        <li>
          {' '}
          <label className="mb-6">
            Instagram:
            <input
              id="artist"
              name="artist"
              autoComplete="artist"
              value={userLogged?.instagram}
              required
              className="peer block min-h-[auto] w-full text-sm rounded-xl border-grayText border bg-transparent px-3 py-[0.28rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 border-grayText data-[te-input-state-active]:placeholder:border-grayText opacity-100 motion-reduce:transition-none dark:text-grayText dark:placeholder:text-grayText border-grayText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-50 text-sm border-slate-300"
            ></input>
          </label>
        </li>
        <li>
          {' '}
          <label className="mb-6">
            Apelido:
            <input
              id="artist"
              name="artist"
              autoComplete="artist"
              value={userLogged?.nickname}
              required
              className="peer block min-h-[auto] w-full text-sm rounded-xl border-grayText border bg-transparent px-3 py-[0.28rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 border-grayText data-[te-input-state-active]:placeholder:border-grayText opacity-100 motion-reduce:transition-none dark:text-grayText dark:placeholder:text-grayText border-grayText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-50 text-sm border-slate-300"
            ></input>
          </label>
        </li>
        <li>
          {' '}
          <label className="mb-6">
            Canhoto:
            <input
              id="artist"
              name="artist"
              autoComplete="artist"
              value={userLogged?.leftHanded ? 'Sim' : 'Não'}
              required
              className="peer block min-h-[auto] w-full text-sm rounded-xl border-grayText border bg-transparent px-3 py-[0.28rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 border-grayText data-[te-input-state-active]:placeholder:border-grayText opacity-100 motion-reduce:transition-none dark:text-grayText dark:placeholder:text-grayText border-grayText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-50 text-sm border-slate-300"
            ></input>
          </label>
        </li>
        <li>
          {' '}
          <label className="mb-6">
            Estilo musical:
            <input
              id="artist"
              name="artist"
              autoComplete="artist"
              value={userLogged?.musicStyle}
              required
              className="peer block min-h-[auto] w-full text-sm rounded-xl border-grayText border bg-transparent px-3 py-[0.28rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 border-grayText data-[te-input-state-active]:placeholder:border-grayText opacity-100 motion-reduce:transition-none dark:text-grayText dark:placeholder:text-grayText border-grayText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-50 text-sm border-slate-300"
            ></input>
          </label>
        </li>
      </ul>
      {/* {isLoading && <LoadingModal />} */}
    </main>
  )
}
