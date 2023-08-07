import { TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"
import { schema } from "./validator"
import { StyledMain } from "./styles"
import { Link } from "react-router-dom"

export const Register = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  })
  const { registerUser } = useAuth()
  return (
    <StyledMain>
      <h1>Cadastro</h1>

      <form onSubmit={handleSubmit(registerUser)}>
        <TextField
          id="outlined-basic"
          label="Nome"
          type="text"
          variant="outlined"
          {...register("name")}
        />
        <TextField
          id="outlined-basic"
          label="E-mail"
          type="email"
          variant="outlined"
          {...register("email")}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          {...register("password")}
        />
        <button type="submit">Cadastrar</button>
        <Link to="/">Voltar</Link>
      </form>
    </StyledMain>
  )
}
