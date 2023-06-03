'use client'
import { useEffect, useState } from 'react'
import { getJamById } from '../services/getJamById'
import { JamDataType } from '../../../components/cardsJams/CardJams'
import { LoadingModal } from '../../../components/loading/LoadingModal'
import { Suggestion } from './Suggestion'
import { Choice } from './Choice'

export default function JamDetailPage({
  params,
}: {
  params: { jamId: string }
}) {
  const [jamData, setJamData] = useState<JamDataType | undefined>()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const jamResponseData = await getJamById(params.jamId)
        setJamData(jamResponseData)
      } catch (error) {
        console.log('Erro ao buscar jam')
      } finally {
        setLoading(false)
      }
    }

    if (params.jamId) {
      fetchData()
    }
  }, [params.jamId])

  return (
    <main className="flex h-full flex-col items-center text-center justify-start p-4">
      <h1 className="text-3xl">{jamData?.name}</h1>
      <h2 className="text-base pt-2">{jamData?.description}</h2>
      {jamData?.step === 'suggestion' ? (
        <div className="pt-6">
          <h3 className="text-2xl text-blueActions">
            Agora você pode sugerir uma música para o tema da Jam
          </h3>
          <Suggestion _id={jamData._id} />
        </div>
      ) : (
        <div className="pt-6">
          <h3 className="text-2xl text-blueActions">
            Escolha uma musica do repertório!
          </h3>
          {jamData && <Choice currentJam={jamData} />}
        </div>
      )}
      {isLoading && <LoadingModal />}
    </main>
  )
}
