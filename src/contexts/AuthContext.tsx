'use client'

import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react'
import api from './_api'
import axios from 'axios'

interface User {
  _id: string
  name: string
  password: string
  email: string
  image: string
  instagram: string
  instrument: string
  isAdm: boolean
  leftHanded: boolean
  musicStyle: string
  nickname: string
  phone: string
  // Outras propriedades do usuário
}

interface SignInData {
  email: string
  password: string
}

interface AuthContextData {
  userLogged: User | null
  authLogin: (userData: SignInData) => void
  isLoading: boolean
}

interface Props {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: Props) => {
  const [isLoading, setLoading] = useState(false)

  const authLogin = useCallback(async (userData: SignInData) => {
    setLoading(true)
    try {
      // Acesso ao endpoint que fornece o token
      const responseToken = await api.post(`/users/login/authToken`, {
        email: userData.email,
        password: userData.password,
      })

      const token = responseToken.data.token
      const userId = responseToken.data.userId
      console.log('token', token)
      console.log('userId', token)
      // VALIDA O TOKEN E RETORNA DADOS DO USUÁRIO LOGADO
      try {
        const config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `http://localhost:21041/users/login/authUser/${userId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        axios
          .request(config)
          .then((response) => {
            localStorage.setItem('userAuth', JSON.stringify(response.data))
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
              window.location.href = '/'
            }, 1000)
          })
          .catch((error) => {
            console.log(error)
          })

        setLoading(false)
      } catch (error) {
        // alert('E-mail e/ou senha inválido')
        setLoading(false)
        console.error('Erro ao buscar os DADOS do usuário:', error)
      }
    } catch (error) {
      alert('E-mail e/ou senha inválido')
      setLoading(false)
      console.error('Erro ao buscar os TOKEN do usuário:', error)
    } finally {
      setLoading(false)
      console.log('finalizou a autenticação do usuário')
    }
  }, [])

  const userLogged = useMemo(() => {
    const userAuthString =
      typeof window !== 'undefined' ? localStorage.getItem('userAuth') : null
    if (userAuthString) {
      const userAuth: User = JSON.parse(userAuthString)
      return userAuth
    }
    return null
  }, [])

  const userContext = useMemo(
    () => ({
      userLogged,
      authLogin,
      isLoading,
    }),
    [userLogged, authLogin, isLoading],
  )

  return (
    <AuthContext.Provider value={userContext}>{children}</AuthContext.Provider>
  )
}
