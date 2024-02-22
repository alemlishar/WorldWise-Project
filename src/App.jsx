import React, { useEffect, useState } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout"
export default function App() {
  const [cities, setCities] = useState()
  const [isLoading, setIsLoading] = useState()

  useEffect(function () {
    async function fetchCitites() {
      try {
        const res = await fetch("http://localhost:9000/cities")
        const data = await res.json
        console.log(data)
        setCities(data)
      } catch {
        alert("there was an error loading data")
      } finally {
        setIsLoading(false)
      }
    }
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="app" element={<AppLayout />}>
            <Route index element={<p>List f Cities</p>}></Route>
            <Route path="cities" element={<p>List f Cities</p>}></Route>
            <Route path="countries" element={<p>List Of Countries</p>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
