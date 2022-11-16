import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui/components"

import { AboutPage } from "../../ui/pages/AboutPage"
import { OrderPage, StockPage } from "../pages"

export const BakerRoutes = () => {
  return (
    <>
    <NavBar>
        <NavLink 
            className={({ isActive }) => {
                return `nav-link ${ isActive ? "active" : "" }`
            }} 
            to="stock"
        >
            Inventario
        </NavLink>

        <NavLink 
            className={({ isActive }) => {
                return `nav-link ${ isActive ? "active" : "" }`
            }} 
            to="orders"
        >
            Pedidos
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
        <Route path="stock" element={<StockPage />} />
        <Route path="orders" element={<OrderPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to="/stock" />} />
    </Routes>
    </div>
</>
  )
}
