/* eslint-disable no-extra-semi */
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/useAuth"
import { StyledMain, StyledHeader } from "./styles"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Modal } from "../../components/modal"

export interface Contact {
  id: string
  name: string
  phone: number
  email: string
  company: string
  description: string
  userId: string
}

export const Dashboard = () => {
  const { loading, handleLogout } = useAuth()
  const [contacts, setContacts] = useState<Contact[]>()
  const [user, setUser] = useState()
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    ;(async () => {
      const contactResponse = await api.get<Contact[]>("/contacts")
      setContacts(contactResponse.data)
      const userResponse = await api.get(
        `/users/${contactResponse.data[0].userId}`
      )
      setUser(userResponse.data)
    })()
  }, [])

  const toggleModal = () => setIsOpenModal(!isOpenModal)
  return (
    <>
      {user && (
        <StyledHeader>
          <h1>Bem-vindo, {user.name}!</h1>
          <h2>{user.email}</h2>
          <button className="exitButton" onClick={handleLogout}>
            Sair
          </button>
          <button onClick={toggleModal}>Adicionar novo contato</button>
        </StyledHeader>
      )}
      {isOpenModal && (
        <Modal setContacts={setContacts} toggleModal={toggleModal} />
      )}
      {contacts && (
        <StyledMain>
          <h1>Sua lista de contatos:</h1>
          <ul>
            {loading ? (
              <div>CARREGANDO...</div>
            ) : (
              contacts.map((contact) => (
                <Card
                  sx={{
                    minWidth: 300,
                    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
                  }}
                  key={contact.id}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 24 }}
                      gutterBottom
                      fontWeight="bold"
                    >
                      {contact.name}
                    </Typography>
                    <Typography sx={{ fontSize: 24 }} gutterBottom>
                      Telefone: {contact.phone}
                    </Typography>
                    <Typography sx={{ fontSize: 24 }} gutterBottom>
                      E-mail: {contact.email}
                    </Typography>
                    <Typography sx={{ fontSize: 24 }} gutterBottom>
                      Empresa: {contact.company}
                    </Typography>
                    <Typography sx={{ fontSize: 24 }} gutterBottom>
                      Descrição: {contact.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            )}
          </ul>
        </StyledMain>
      )}
    </>
  )
}
