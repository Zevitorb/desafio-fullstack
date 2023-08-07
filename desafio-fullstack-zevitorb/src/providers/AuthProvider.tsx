import { createContext, ReactNode, useEffect, useState } from "react"
import { LoginData } from "../pages/Login/validator"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextValues {
  signIn: (data: LoginData) => Promise<void>
  loading: boolean
  handleLogout: () => void
  registerUser: (data: any) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("@CONTACT:TOKEN")

    if (!token) {
      setLoading(false)
      navigate("/")
      return
    } else {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setLoading(false)
    }
  }, [])

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data)
      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
      localStorage.setItem("@CONTACT:TOKEN", response.data.token)
      toast.success("Login realizado")
      setLoading(false)
      navigate("dashboard")
    } catch (error) {
      console.log(error)
      toast.error("E-mail ou senha incorretos!")
    }
  }

  const registerUser = async (data: any) => {
    try {
      await api.post("/users", data)
      toast.success("Cadastro realizado")
      navigate("/")
    } catch (error) {
      console.error(error)
      toast.error("E-mail já cadastrado")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("@CONTACT:TOKEN")
    toast.success("Logout realizado")
    navigate("/")
  }
  return (
    <AuthContext.Provider
      value={{ signIn, loading, handleLogout, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
