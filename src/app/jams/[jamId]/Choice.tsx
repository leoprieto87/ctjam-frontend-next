'use client'
import React, { useEffect, useState } from 'react'
// import { LoadingModal } from '../../../components/loading/LoadingModal'
import { JamDataType } from '../../../components/cardsJams/CardJams'
import {
  CardPlayList,
  PlayListType,
} from '../../../components/cardsJams/CardPlayList'

export function Choice(jamData: { currentJam: JamDataType }) {
  // const [isLoading, setLoading] = useState(false)
  const [playList, setPlayList] = useState<any>()

  useEffect(() => {
    setPlayList(jamData.currentJam.playList)
  }, [])

  return (
    <div className="flex flex-col mt-6">
      <ul>
        {playList?.map((song: PlayListType) => (
          <li key={song._id}>
            <a>
              <CardPlayList
                usersBand={song.usersBand}
                artistName={song.artistName}
                songName={song.songName}
              />
            </a>
          </li>
        ))}
      </ul>
      {/* {isLoading && <LoadingModal />} */}
    </div>
  )
}
