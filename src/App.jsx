import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import HomePage from "./pages/HomePage"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
