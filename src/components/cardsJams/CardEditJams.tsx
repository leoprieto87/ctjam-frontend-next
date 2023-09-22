/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'

export interface JamDataType {
  _id: string
  data: string
  name: string
  description: string
  image: string
  isActive: boolean
  playList: [
    {
      _id: string
      usersBand: {
        vocal: string
        guitar: string
        guitar2: string
        bass: string
        drums: string
        keys: string
      }
      artistName: string
      songName: string
    },
  ]
  step: string
}

export function CardEditJams(jamData: JamDataType) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-lg max-h-38 drop-shadow-lg ${
        !jamData.isActive ? 'opacity-30 grayscale' : 'opacity-100'
      }`}
    >
      <Link
        id="jam"
        href={jamData.isActive ? `/jams/${jamData._id}` : '/jams'}
        className="overflow-hidden max-h-38 flex flex-row items-center bg-white md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover rounded-lg"
          width={100}
          height={100}
          src={jamData.image}
          alt={jamData.name}
        />

        <div className="flex flex-col align-center text-left px-2 grow">
          <h5 className="text-lg font-bold text-gray-900">{jamData.name}</h5>
        </div>
        <div className="h-full max-w-xs bg-graySelect rounded-lg">
          <p className="font-normal text-gray-700 dark:text-gray-400 p-2">
            {jamData.data}
          </p>
        </div>
      </Link>
    </div>
  )
}
