'use client'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import { LoadingModal } from '../../../components/loading/LoadingModal'
import { getJamById } from '../services/getJamById'
import { JamDataType } from '../../../components/cardsJams/CardJams'
import {
  CardPlayList,
  PlayListType,
} from '../../../components/cardsJams/CardPlayList'

export function Choice(jamId: { _id: string }) {
  console.log('jamId', jamId)
  const { userLogged } = useAuth()
  const [isLoading, setLoading] = useState(false)
  const [jamData, setJamData] = useState<JamDataType>()

  async function getJam() {
    try {
      const jamDataResponse = await getJamById(jamId._id)
      setJamData(jamDataResponse)
    } catch (error) {
      console.log('erro ao ')
    }
  }

  useEffect(() => {
    getJam()
    setTimeout(() => {
      console.log(jamData?.playList)
    }, 2000)
  }, [])

  return (
    <div className="flex flex-col">
      <h1>TESTE</h1>
      {jamData?.playList.map((playList: PlayListType) => (
        <CardPlayList
          _id={''}
          usersBand={playList.usersBand}
          artist={playList.artist}
          song={playList.song}
        />
      ))}
      {isLoading && <LoadingModal />}
    </div>
  )
}
