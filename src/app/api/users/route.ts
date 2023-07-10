import { NextResponse } from 'next/server'
import dbConnect from '../../../lib/db'
import Users from '../../../models/User'

export async function GET() {
  try {
    await dbConnect()
    const usersData = await Users.find()

    return NextResponse.json(usersData, { status: 200 })
  } catch (error: any) {
    console.log(error)
    return new NextResponse(error.message, { status: 500 })
  }
}
