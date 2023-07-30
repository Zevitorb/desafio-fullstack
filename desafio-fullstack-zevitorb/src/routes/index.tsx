import { Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import { Register } from "../pages/Register"
import { ProtectedRoutes } from "./ProtectedRoutes"

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoutes/>}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}
