import { Route, Routes } from "react-router-dom"
import { BakerRoutes } from "../baker/routes/BakerRoutes"
import { ClientRoutes } from "../client/routes/ClientRoutes"
import { MainPage } from "../main/pages/MainPage"
import { Footer } from "../ui/components"

export const AppRouter = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={ <MainPage /> } />
          <Route path="client/*" element={ <ClientRoutes /> } />
          <Route path="baker/*" element={<BakerRoutes />} />
      </Routes>
      <Footer />
    </>
  )
}
