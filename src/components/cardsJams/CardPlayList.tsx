/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'

export interface PlayListType {
  _id: string
  usersBand: {
    vocal: string
    guitar: string
    guitar2: string
    bass: string
    drums: string
    keys: string
  }
  artist: string
  song: string
}

export function CardPlayList(playList: PlayListType) {
  return (
    <div className={`flex flex-col overflow-hidden`}>
      <Link
        href={`/jams/`}
        className="overflow-hidden flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="flex flex-row align-center">
          <h5 className="text-base font-bold text-gray-900 p-2">
            {playList.artist}
          </h5>
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 ">
            {playList.song}
          </p>
        </div>
      </Link>
    </div>
  )
}
