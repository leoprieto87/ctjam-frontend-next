import { NextResponse } from 'next/server'
import dbConnect from '../../../../lib/db'
import Users from '../../../../models/User'
import bcryptjs from 'bcryptjs'

export async function POST(req: any) {
  const user = await req.json()

  const salt = await bcryptjs.genSalt(12)
  const passwordHash = await bcryptjs.hash(user.password, salt)

  async function verififyIfUserExistsAndCreate(email: string) {
    try {
      const userToVerify = await Users.findOne({
        email, // Procura um usuário com o email fornecido
      })
      if (userToVerify) {
        NextResponse.json(
          {
            message: `Usuário já cadastrado`,
          },
          { status: 404 },
        )
        return true // O usuário já está cadastrado
      } else {
        user.password = passwordHash
        user.save(async (err: any) => {
          // O usuário não está cadastrado e pode ser incluído ao banco
          if (err) {
            NextResponse.json(
              {
                message: `Erro ao criar usuário: ${err.message}`,
              },
              { status: 500 },
            )
          } else {
            NextResponse.json(
              {
                message: `Usuário criado com sucesso`,
              },
              { status: 201 },
            )
          }
        })
        return null // O usuário não está cadastrado e pode ser incluído ao banco
      }
    } catch (error) {
      NextResponse.json(
        {
          message: `${error} Erro ao verificar usuário`,
        },
        { status: 400 },
      )

      return false // Ocorreu um erro durante a verificação
    }
  }

  try {
    await dbConnect()
    const userEmailRequest = user.email
    verififyIfUserExistsAndCreate(userEmailRequest)
  } catch (error: any) {
    console.log(error)
    return new NextResponse(error.message, { status: 500 })
  }
}
