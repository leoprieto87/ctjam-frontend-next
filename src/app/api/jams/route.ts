import { NextResponse } from 'next/server'
import dbConnect from '../../../lib/db'
import Jams from '../../../models/Jams'
import users from '../../../models/User'

console.log(users)

const populateOptions = [
  { path: 'playList.usersBand.vocal', select: 'name' },
  { path: 'playList.usersBand.guitar', select: 'name' },
  { path: 'playList.usersBand.guitar2', select: 'name' },
  { path: 'playList.usersBand.bass', select: 'name' },
  { path: 'playList.usersBand.drums', select: 'name' },
  { path: 'playList.usersBand.keys', select: 'name' },
]

export async function GET() {
  try {
    await dbConnect()
    const jamsData = await Jams.find().populate(populateOptions)
    // console.log(Jams.find())

    return NextResponse.json(jamsData, { status: 200 })
  } catch (error: any) {
    console.log(error)
    return new NextResponse(error.message, { status: 500 })
  }
}
