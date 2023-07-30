import { TextField, Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { LoginData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"

export const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema),
  })
  const { signIn } = useAuth()
  return (
    <main>
      <h2>LOGIN</h2>

      <form onSubmit={handleSubmit(signIn)}>
        <TextField
          id="outlined-basic"
          label="E-mail"
          type="email"
          variant="outlined"
          fullWidth
          sx={{ mb: "10px" }}
          {...register("email")}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          fullWidth
          {...register("password")}
        />
        <Button type="submit" variant="contained">
          Entrar
        </Button>
      </form>
    </main>
  )
}
