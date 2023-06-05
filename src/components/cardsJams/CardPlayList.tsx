import { useState } from 'react'
import { ButtonDefault } from '../buttons/ButtonDefaut'
// import { useAuth } from '../../contexts/AuthContext'

/* eslint-disable @next/next/no-img-element */
export interface PlayListType {
  _id?: string
  usersBand: {
    vocal: {
      _id: string
      name: string
    }
    guitar: {
      _id: string
      name: string
    }
    guitar2: {
      _id: string
      name: string
    }
    bass: {
      _id: string
      name: string
    }
    drums: {
      _id: string
      name: string
    }
    keys: {
      _id: string
      name: string
    }
  }
  artistName: string
  songName: string
}

const inputClasses =
  'peer block min-h-[auto] w-full text-sm rounded-xl border-grayText border px-3 py-[0.28rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 border-grayText data-[te-input-state-active]:placeholder:border-grayText opacity-100 motion-reduce:transition-none dark:text-grayText dark:placeholder:text-grayText border-grayText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-50 text-sm border-slate-300'

export function CardPlayList(playList: PlayListType) {
  // const { userLogged } = useAuth()
  const [showMore, setShowmore] = useState(false)
  console.log('playList', playList)
  function handleShowUsersBand() {
    if (showMore) {
      setShowmore(false)
    } else {
      setShowmore(true)
    }
  }
  return (
    <>
      <div
        className={`flex flex-col overflow-hidden`}
        onClick={handleShowUsersBand}
      >
        <div className="overflow-hidden flex flex-row items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-3 m-2">
          <div className="flex grow	 flex-col text-left align-left">
            <h5 className="text-base font-bold text-gray-900 ">
              {playList.artistName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              {playList.songName}
            </p>
          </div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {showMore && (
        <div className="fixed bg-opacity-70 bg-black z-30 left-0 top-0 w-full h-full bg-black overflow-hidden">
          <div className="fixed z-30 left-0 top-0 w-11/12 h-full bg-grayBg shadow-lg rounded-lg p-4 m-4 overflow-hidden">
            <div className="w-full flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
                onClick={handleShowUsersBand}
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mt-4">
              <h2 className="text-2xl text-grayText">
                Escolhendo instrumento da musica:
              </h2>
              <h3 className="text-xl font-bold text-blueActions mt-2">
                {playList.artistName} - {playList.songName}
              </h3>
              <div>
                <form className="flex flex-col justify-around text-left mt-6">
                  <label className="flex flex-col">
                    Vocal:
                    <input
                      id="song"
                      name="song"
                      autoComplete="song"
                      placeholder="Ecolher instrumento"
                      value={playList.usersBand.vocal?.name ?? ''}
                      required
                      className={`${inputClasses} ${
                        !playList.usersBand.vocal?.name ??
                        'opacity-30 grayscale text-red'
                      }`}
                    ></input>
                  </label>
                  <label className="flex flex-col">
                    Guitarra:
                    <input
                      id="song"
                      name="song"
                      autoComplete="song"
                      placeholder="Ecolher instrumento"
                      value={playList.usersBand.guitar?.name ?? ''}
                      required
                      className={`${inputClasses} ${
                        !playList.usersBand.guitar?.name ??
                        'opacity-30 grayscale text-red'
                      }`}
                    ></input>
                  </label>

                  <label className="flex flex-col">
                    Guitarra 2:
                    <input
                      id="song"
                      name="song"
                      autoComplete="song"
                      placeholder="Ecolher instrumento"
                      value={playList.usersBand.guitar2?.name ?? ''}
                      required
                      className={`${inputClasses} ${
                        playList.usersBand.guitar2?.name
                          ? 'opacity-60 bg-red-300 text-[#ffffff]'
                          : ''
                      }`}
                    ></input>
                  </label>
                  <label className="flex flex-col">
                    Baixo:
                    <input
                      id="song"
                      name="song"
                      autoComplete="song"
                      placeholder="Ecolher instrumento"
                      value={playList.usersBand.bass?.name ?? ''}
                      required
                      className={`${inputClasses} ${
                        !playList.usersBand.bass?.name ??
                        'opacity-30 grayscale text-red'
                      }`}
                    ></input>
                  </label>
                  <label className="flex flex-col">
                    Bateria:
                    <input
                      id="song"
                      name="song"
                      autoComplete="song"
                      placeholder="Ecolher instrumento"
                      value={playList.usersBand.drums?.name ?? ''}
                      required
                      className={`${inputClasses} ${
                        !playList.usersBand.drums?.name ??
                        'opacity-30 grayscale text-red'
                      }`}
                    ></input>
                  </label>
                  <label className="flex flex-col mb-6">
                    Teclado:
                    <input
                      id="song"
                      name="song"
                      autoComplete="song"
                      placeholder="Ecolher instrumento"
                      value={playList.usersBand.keys?.name ?? ''}
                      required
                      className={`${inputClasses} ${
                        !playList.usersBand.keys?.name ??
                        'opacity-30 grayscale text-red'
                      }`}
                    ></input>
                  </label>
                  <ButtonDefault text={'Escolher música'} />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
