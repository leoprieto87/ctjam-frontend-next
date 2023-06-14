'use client'
import { useEffect, useState } from 'react'
import api from '../../contexts/_api'
import { LoadingModal } from '../../components/loading/LoadingModal'
import { CardJams, JamDataType } from '../../components/cardsJams/CardJams'

export default function Jams() {
  const [jams, setJams] = useState<JamDataType[]>([]) // Ajuste da tipagem para um array de JamDataType
  const [isLoading, setLoading] = useState(false)

  const getJams = async () => {
    setLoading(true)
    try {
      const response = await api.get('/jams')
      setJams(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Erro ao buscar os dados:', error)
    }
  }

  useEffect(() => {
    getJams()
  }, [])

  return (
    <main className="flex min-h-full flex-col items-center text-center justify-start p-4">
      <h2 className="text-2xl">Escolha qual jam você quer participar.</h2>
      {jams.map(
        (
          jamData, // Removido o uso do index como chave e corrigido o map
        ) => (
          <ul key={jamData._id}>
            <li className="p-3">
              <CardJams
                _id={jamData._id}
                data={jamData.data}
                name={jamData.name}
                description={jamData.description}
                image={jamData.image}
                isActive={jamData.isActive}
                playList={jamData.playList}
                step={''}
              />
            </li>
          </ul>
        ),
      )}
      {isLoading && <LoadingModal />}
    </main>
  )
}
