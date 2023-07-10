import { NextResponse } from 'next/server'
import dbConnect from '../../../../lib/db'
import Jams from '../../../../models/Jams'

export async function POST(req: any) {
  // eslint-disable-next-line prefer-const
  const body = await req.json()

  try {
    await dbConnect()
    await Jams.create(body)
    return NextResponse.json(body, { status: 201 })
  } catch (error: any) {
    console.log(error)
    return new NextResponse(error.message, { status: 500 })
  }
}
