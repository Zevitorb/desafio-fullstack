import { TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { LoginData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"
import { StyledMain } from "./styles"
import { Link } from "react-router-dom"

export const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema),
  })
  const { signIn } = useAuth()
  return (
    <StyledMain>
      <h1>Gerenciador de contatos</h1>

      <form onSubmit={handleSubmit(signIn)}>
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
        <button type="submit">Entrar</button>
        <p className="paragraph">Ainda não possui conta?</p>
        <Link to="/register">Cadastrar-se</Link>
      </form>
    </StyledMain>
  )
}
