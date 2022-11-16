import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui/components"
import { AboutPage } from "../../ui/pages/AboutPage"
import { CakesPage, CreatePage, OrnamentPage } from "../pages"

export const ClientRoutes = () => {
  return (
    <>
        <NavBar>
            <NavLink 
                className={({ isActive }) => {
                    return `nav-link ${ isActive ? "active" : "" }`
                }} 
                to="cakes"
            >
                Sabores
            </NavLink>

            <NavLink 
                className={({ isActive }) => {
                    return `nav-link ${ isActive ? "active" : "" }`
                }} 
                to="ornament"
            >
                Adornos
            </NavLink>

            <NavLink 
                className={({ isActive }) => {
                    return `nav-link ${ isActive ? "active" : "" }`
                }} 
                to="create"
            >
                Crea tu pastel
            </NavLink>

            <NavLink 
                className={({ isActive }) => {
                    return `nav-link ${ isActive ? "active" : "" }`
                }} 
                to="about"
            >
                Contacto
            </NavLink>
        </NavBar>

        <div className="container">
        <Routes>
            <Route path="cakes" element={<CakesPage />} />
            <Route path="ornament" element={<OrnamentPage />} />
            <Route path="create" element={<CreatePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="/*" element={<Navigate to="/cakes" />} />
        </Routes>
        </div>
    </>
  )
}
