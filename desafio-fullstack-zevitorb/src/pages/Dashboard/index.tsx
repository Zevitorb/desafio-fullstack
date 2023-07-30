/* eslint-disable no-extra-semi */
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/useAuth"

export interface Contact {
  id: string,
  name: string,
  number: number,
  email: string,
  company: string,
  description: string
}

export const Dashboard = () => {
  const {loading} = useAuth()
  const [contacts, setContacts] = useState<Contact[]>()

  useEffect(() => {
    (async () => {
      const response = await api.get("")
      setContacts(response.data)
    })()
  }, [])
  return <h1>Dashboard</h1>
}
