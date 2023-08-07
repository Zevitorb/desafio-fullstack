import { z } from "zod"

export const schema = z.object({
  name: z.string(),
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha obrigatória"),
})

export type RegisterData = z.infer<typeof schema>
