'use client'

import React, { useEffect, useState } from 'react'
import { JamDataType } from '../../../components/cardsJams/CardJams'
import {
  CardPlayList,
  PlayListType,
} from '../../../components/cardsJams/CardPlayList'

export function Choice(jamData: {
  currentJam: JamDataType
}): React.JSX.Element {
  const [playList, setPlayList] = useState<any>()

  useEffect(() => {
    setPlayList(jamData.currentJam.playList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                _id={song._id}
                jamId={jamData.currentJam._id}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
