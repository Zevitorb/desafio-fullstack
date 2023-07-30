import { createContext, ReactNode, useEffect, useState } from "react"
import { LoginData } from "../pages/Login/validator"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextValues {
  signIn: (data: LoginData) => Promise<void>,
  loading: boolean
}

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("@CONTACT:TOKEN")

    if (!token) {
      setLoading(false)
      return
    } else {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setLoading(false)
    }
  }, [])
  const signIn = async (data: LoginData) => {
    console.log(data)
    try {
      const response = await api.post("/login", data)
      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
      localStorage.setItem("@CONTACT:TOKEN", response.data.token)
      setLoading(false)
      navigate("dashboard")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <AuthContext.Provider value={{ signIn, loading }}>{children}</AuthContext.Provider>
  )
}
