import { NextResponse } from 'next/server'
import dbConnect from '../../../../../../lib/db'
import Jams from '../../../../../../models/Jams'

export async function PUT(req: Request, { params }: any) {
  const { id } = params
  try {
    await dbConnect()
    Jams.findByIdAndUpdate(
      id,
      { $push: { playList: req.body } },
      { new: true },
      (err) => {
        if (!err) {
          return NextResponse.json(
            { msg: 'Música incluida com sucesso' },
            { status: 200 },
          )
        } else {
          return NextResponse.json(
            { msg: 'Erro ao incluir musica' },
            { status: 500 },
          )
        }
      },
    )
  } catch (error: any) {
    console.log('error', error)
    return NextResponse.json(error.message, { status: 500 })
  }
}
