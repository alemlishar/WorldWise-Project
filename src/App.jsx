import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout"
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="app" element={<AppLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
