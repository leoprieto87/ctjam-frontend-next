import { FormEvent, useState } from 'react'
import { ButtonDefault } from '../buttons/ButtonDefaut'
import { useAuth } from '../../contexts/AuthContext'
import { LoadingModal } from '../loading/LoadingModal'
import api from '../../contexts/_api'
import { useRouter } from 'next/navigation'
export interface PlayListType {
  jamId: string
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

export function CardPlayList(playList: PlayListType) {
  const router = useRouter()

  const { userLogged } = useAuth()
  const [isLoading, setLoading] = useState(false)
  const [showMore, setShowmore] = useState(false)
  const [updateSong, setUpdateSong] = useState({
    usersBand: {
      vocal: playList.usersBand.vocal?._id || null,
      guitar: playList.usersBand.guitar?._id || null,
      guitar2: playList.usersBand.guitar2?._id || null,
      bass: playList.usersBand.bass?._id || null,
      drums: playList.usersBand.drums?._id || null,
      keys: playList.usersBand.keys?._id || null,
    },
    artistName: playList.artistName,
    songName: playList.songName,
  })
  const classLabels =
    'border-double inline-flex items-center justify-between w-full p-3 text-grayText bg-white border border-graySelect rounded-lg cursor-pointer dark:hover:text-gray-900 dark:border-gray-500 dark:peer-checked:text-green-700 peer-checked:border-green-700 peer-checked:bg-green-50 peer-checked:text-green-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-600 dark:bg-gray-200'

  const disableClass =
    'opacity-50 text-red-500 border-red-500 cursor-not-allowed'

  function handleShowUsersBand() {
    setLoading(true)
    if (showMore) {
      setShowmore(false)
    } else {
      setShowmore(true)
    }
    setLoading(false)
  }

  const handleChange = (e: any) => {
    setLoading(true)
    const valueInstument = e.target.id
    const instrument = valueInstument
    setUpdateSong((prevSong) => ({
      ...prevSong,
      usersBand: {
        ...prevSong.usersBand,
        [instrument]: userLogged?._id,
      },
    }))
    setLoading(false)
  }

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true)
    e.preventDefault()
    await sendUserBandToDataBase()
  }

  async function sendUserBandToDataBase() {
    try {
      console.log('updateSong', updateSong)
      const sendUserBandToDataBase = await api.put(
        `/jam/${playList.jamId}/playList/${playList._id}`,
        updateSong,
      )
      console.log('nova musica incluida', sendUserBandToDataBase)
    } catch (error) {
      console.log('error', error)
    } finally {
      router.back()
      setLoading(false)
    }
  }

  return (
    <>
      {isLoading && <LoadingModal />}
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
        <div className="fixed bg-opacity-70 bg-black z-20 left-0 top-0 w-full h-full bg-black overflow-hidden">
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
                Selecione um instrumento:
              </h2>
              <h3 className="text-xl font-bold text-blueActions mt-2">
                {playList.artistName} - {playList.songName}
              </h3>
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-around text-left mt-6"
                >
                  <ul className="grid w-full gap-3 md:grid-cols-2 mb-6">
                    <li>
                      <input
                        onChange={handleChange}
                        type="radio"
                        id="vocal"
                        name="instrument"
                        value="vocal"
                        className="hidden peer"
                        disabled={!!playList?.usersBand?.vocal?.name}
                        required
                      />
                      <label
                        htmlFor="vocal"
                        className={`${
                          playList?.usersBand?.vocal?.name
                            ? disableClass
                            : 'opacity-100'
                        } ${classLabels}`}
                      >
                        <div className="flex w-full items-baseline">
                          <div className="w-full text-base font-semibold">
                            Vocal
                          </div>
                          {playList?.usersBand?.vocal?.name && (
                            <div className="w-full text-right text-sm">
                              {playList.usersBand.vocal.name}
                            </div>
                          )}
                        </div>
                        {!playList?.usersBand?.vocal?.name && (
                          <svg
                            aria-hidden="true"
                            className="w-6 h-6 ml-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        )}
                      </label>
                    </li>
                    <li>
                      <input
                        onChange={handleChange}
                        type="radio"
                        id="guitar"
                        name="instrument"
                        value="guitar"
                        className="hidden peer"
                        disabled={!!playList?.usersBand?.guitar?.name}
                        required
                      />
                      <label
                        htmlFor="guitar"
                        className={`${
                          playList?.usersBand?.guitar?.name
                            ? disableClass
                            : 'opacity-100'
                        } ${classLabels}`}
                      >
                        <div className="flex w-full items-baseline">
                          <div className="w-full text-base font-semibold">
                            Guitarra
                          </div>
                          {playList?.usersBand?.guitar?.name && (
                            <div className="w-full text-right text-sm">
                              {playList.usersBand.guitar.name}
                            </div>
                          )}
                        </div>
                        {!playList?.usersBand?.guitar?.name && (
                          <svg
                            aria-hidden="true"
                            className="w-6 h-6 ml-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        )}
                      </label>
                    </li>
                    <li>
                      <input
                        onChange={handleChange}
                        type="radio"
                        id="guitar2"
                        name="instrument"
                        value="guitar2"
                        className="hidden peer"
                        disabled={!!playList?.usersBand?.guitar2?.name}
                        required
                      />
                      <label
                        htmlFor="guitar2"
                        className={`${
                          playList?.usersBand?.guitar2?.name
                            ? disableClass
                            : 'opacity-100'
                        } ${classLabels}`}
                      >
                        <div className="flex w-full items-baseline">
                          <div className="w-full text-base font-semibold">
                            Guitarra 2
                          </div>
                          {playList?.usersBand?.guitar2?.name && (
                            <div className="w-full text-right text-sm">
                              {playList.usersBand.guitar2.name}
                            </div>
                          )}
                        </div>
                        {!playList?.usersBand?.guitar2?.name && (
                          <svg
                            aria-hidden="true"
                            className="w-6 h-6 ml-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        )}
                      </label>
                    </li>
                    <li>
                      <input
                        onChange={handleChange}
                        type="radio"
                        id="bass"
                        name="instrument"
                        value="bass"
                        className="hidden peer"
                        disabled={!!playList?.usersBand?.bass?.name}
                        required
                      />
                      <label
                        htmlFor="bass"
                        className={`${
                          playList?.usersBand?.bass?.name
                            ? disableClass
                            : 'opacity-100'
                        } ${classLabels}`}
                      >
                        <div className="flex w-full items-baseline">
                          <div className="w-full text-base font-semibold">
                            Baixo
                          </div>
                          {playList?.usersBand?.bass?.name && (
                            <div className="w-full text-right text-sm">
                              {playList.usersBand.bass.name}
                            </div>
                          )}
                        </div>
                        {!playList?.usersBand?.bass?.name && (
                          <svg
                            aria-hidden="true"
                            className="w-6 h-6 ml-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        )}
                      </label>
                    </li>
                    <li>
                      <input
                        onChange={handleChange}
                        type="radio"
                        id="drums"
                        name="instrument"
                        value="drums"
                        className="hidden peer"
                        disabled={!!playList?.usersBand?.drums?.name}
                        required
                      />
                      <label
                        htmlFor="drums"
                        className={`${
                          playList?.usersBand?.drums?.name
                            ? disableClass
                            : 'opacity-100'
                        } ${classLabels}`}
                      >
                        <div className="flex w-full items-baseline">
                          <div className="w-full text-base font-semibold">
                            Bateria
                          </div>
                          {playList?.usersBand?.drums?.name && (
                            <div className="w-full text-right text-sm">
                              {playList.usersBand.drums.name}
                            </div>
                          )}
                        </div>
                        {!playList?.usersBand?.drums?.name && (
                          <svg
                            aria-hidden="true"
                            className="w-6 h-6 ml-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        )}
                      </label>
                    </li>
                    <li>
                      <input
                        onChange={handleChange}
                        type="radio"
                        id="keys"
                        name="instrument"
                        value="keys"
                        className="hidden peer"
                        disabled={!!playList?.usersBand?.keys?.name}
                        required
                      />
                      <label
                        htmlFor="keys"
                        className={`${
                          playList?.usersBand?.keys?.name
                            ? disableClass
                            : 'opacity-100'
                        } ${classLabels}`}
                      >
                        <div className="flex w-full items-baseline">
                          <div className="w-full text-base font-semibold">
                            Teclado
                          </div>
                          {playList?.usersBand?.keys?.name && (
                            <div className="w-full text-right text-sm">
                              {playList.usersBand.keys.name}
                            </div>
                          )}
                        </div>
                        {!playList?.usersBand?.keys?.name && (
                          <svg
                            aria-hidden="true"
                            className="w-6 h-6 ml-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        )}
                      </label>
                    </li>
                  </ul>
                  <ButtonDefault text={'Confirmar minha participação'} />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
