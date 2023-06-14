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

export function CardJams(jamData: JamDataType) {
  return (
    <div
      className={`flex flex-col overflow-hidden ${
        !jamData.isActive ? 'opacity-30 grayscale' : 'opacity-100'
      }`}
    >
      <Link
        href={`/jams/${jamData._id}`}
        className="overflow-hidden flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover"
          width={100}
          height={100}
          src={jamData.image}
          alt={jamData.name}
        />

        <div className="flex flex-row align-center">
          <h5 className="text-base font-bold text-gray-900 p-2">
            {jamData.name}
          </h5>
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 ">
            {jamData.description.slice(0, 60)}
            {jamData.description.length > 60 ? '...' : ''}
          </p>
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
            {jamData.data}
          </p>
        </div>
      </Link>
    </div>
  )
}
