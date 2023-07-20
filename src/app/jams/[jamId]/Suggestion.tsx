'use client'
import React, { useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import { getJamById } from '../services/getJamById'
import { ButtonDefault } from '../../../components/buttons/ButtonDefaut'
import api from '../../../contexts/_api'
import { LoadingModal } from '../../../components/loading/LoadingModal'

export function Suggestion(jamId: { _id: string }) {
  const { userLogged } = useAuth()
  const [isLoading, setLoading] = useState(false)
  const [isSuggested, setSuggested] = useState(false)
  const [newSong, setNewSong] = useState({
    usersBand: {
      vocal: null,
      guitar: null,
      guitar2: null,
      bass: null,
      drums: null,
      keys: null,
    },
    artistName: null,
    songName: null,
  })

  const handleChange = (e: any) => {
    const { value } = e.target
    setNewSong((prevSong) => ({
      ...prevSong,
      usersBand: {
        ...prevSong.usersBand,
        [value]: userLogged?._id,
      },
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const artist = e.target.artist.value
    const song = e.target.song.value
    const instrument = e.target.usersBand.value
    setNewSong((prevSong) => ({
      ...prevSong,
      usersBand: {
        ...prevSong.usersBand,
        [instrument]: userLogged?._id,
      },
    }))
    newSong.artistName = artist
    newSong.songName = song
    sendNewSongToJamIdInDataBate()
  }

  async function sendNewSongToJamIdInDataBate() {
    try {
      const jamDataResponse = await getJamById(jamId._id)

      await jamDataResponse.playList.push(newSong)

      try {
        const sendUpdateJamToData = await api.put(
          `/jams/addSongToJamPlayList/${jamId._id}`,
          newSong,
        )
        console.log('nova musica incluida', sendUpdateJamToData)
      } catch (error) {
        console.log('error', error)
      }
    } catch (error) {
      console.log('Erro ao buscar jam')
    } finally {
      setSuggested(true)
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col">
      {isSuggested ? (
        <>
          <h1 className="text-4xl text-lime-600 pt-6 font-semibold">
            Olá {userLogged?.name}, sua sugestão de música para esta edição foi
            registrada, aguarde a fase de escolha para incluir mais musicas.
          </h1>
        </>
      ) : (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-around p-6 text-left"
          >
            <label className="mb-6">
              Artista:
              <input
                id="artist"
                name="artist"
                autoComplete="artist"
                placeholder="Bob Marley"
                required
                className="peer block min-h-[auto] w-full text-sm rounded-xl border-grayText border px-3 py-[0.28rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 border-grayText data-[te-input-state-active]:placeholder:border-grayText opacity-100 motion-reduce:transition-none dark:text-grayText dark:placeholder:text-grayText border-grayText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-50 text-sm border-slate-300"
              ></input>
            </label>
            <label className="mb-6">
              Música:
              <input
                id="song"
                name="song"
                autoComplete="song"
                placeholder="Is this love"
                required
                className="peer block min-h-[auto] w-full text-sm rounded-xl border-grayText border px-3 py-[0.28rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 border-grayText data-[te-input-state-active]:placeholder:border-grayText opacity-100 motion-reduce:transition-none dark:text-grayText dark:placeholder:text-grayText border-grayText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-50 text-sm border-slate-300"
              ></input>
            </label>

            <select
              id="usersBand"
              name="usersBand"
              onChange={handleChange}
              className="peer p-3 block min-h-[auto] w-full text-sm rounded-xl border-grayText border py-2 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 border-grayText data-[te-input-state-active]:placeholder:border-grayText opacity-100 motion-reduce:transition-none dark:text-grayText dark:placeholder:text-grayText border-grayText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-50 text-sm border-slate-300 mb-6"
            >
              <option>Escolha o instrumento</option>
              <option id="vocal" value="vocal">
                Vocal
              </option>
              <option id="guitar" value="guitar">
                Guitarra
              </option>
              <option id="guitar2" value="guitar2">
                Guitarra 2
              </option>
              <option id="bass" value="bass">
                Baixo
              </option>
              <option id="drums" value="drums">
                Bateria
              </option>
              <option id="keys" value="keys">
                Teclado
              </option>
            </select>

            <ButtonDefault text={'Adicionar à Lista de Reprodução'} />
          </form>
        </>
      )}
      {isLoading && <LoadingModal />}
    </div>
  )
}
