import { NextResponse } from 'next/server'
import dbConnect from '../../../../../lib/db'
import Jams from '../../../../../models/Jams'

export async function PUT(req: Request, { params }: any) {
  const { id } = params
  try {
    await dbConnect()
    const body = await req.json()
    console.log(body)
    await Jams.findByIdAndUpdate(id, body)
    return NextResponse.json(
      { msg: 'Jam alterada com sucesso' },
      { status: 200 },
    )
  } catch (error: any) {
    console.log(error)
    return new NextResponse(error.message, { status: 500 })
  }
}
