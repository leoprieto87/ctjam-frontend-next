import { NextResponse } from 'next/server'
import Users from '../../../../models/User'
import dbConnect from '../../../../lib/db'

export async function GET(req: Request, { params }: any) {
  const { id } = params
  try {
    await dbConnect()
    const userData = await Users.findById(id)

    return NextResponse.json(userData, { status: 200 })
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(error.message, { status: 500 })
  }
}
