import React, { useEffect, useState } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout"
import pageNotFound from "./pages/PageNotFound"
import CityList from "./components/CityList"
import CountryList from "./components/CountryList"

export default function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState()

  useEffect(function () {
    console.log("data")
    async function cityFetch() {
      try {
        setIsLoading(true)
        const res = await fetch("http://localhost:9000/cities")
        const data = await res.json()
        setCities(data)
      } catch {
        a(error)
      } finally {
        setIsLoading(false)
      }
    }

    cityFetch()
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route path="*" element={pageNotFound}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
