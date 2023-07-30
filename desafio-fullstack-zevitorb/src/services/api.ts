import axios from "axios"

export const api = axios.create({
  baseURL: "http://http://localhost:5173",
  timeout: 5000,
})
