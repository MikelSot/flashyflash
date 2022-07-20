import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@constants/routes.constants'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User
} from '@firebase/auth'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { auth } from '../../../common/firebase/client'

const AuthContext = createContext({} as AuthContextProps)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

  const logout = () => signOut(auth)

  const resetPassword = async (email: string) => sendPasswordResetEmail(auth, email)

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log({ currentUser })
      setUser(currentUser)
      setIsLoading(false)
    })
    return () => unSubscribe()
  }, [])

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)

type AuthProviderProps = {
  children: ReactNode
}

type AuthContextProps = {
  user: User | null
}

export default AuthProvider
