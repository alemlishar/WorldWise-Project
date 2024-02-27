import React, { useContext, useEffect, useState } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout"
import pageNotFound from "./pages/PageNotFound"
import CityList from "./components/CityList"
import CountryList from "./components/CountryList"
import City from "./components/City"
import { createContext } from "react"
import { CitiesProvider } from "./contexts/CitiesContext"

export default function App() {
  return (
    <div>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="product" element={<Product />}></Route>
            <Route path="pricing" element={<Pricing />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="app" element={<AppLayout />}>
              <Route index element={<CityList />}></Route>
              <Route path="cities" element={<CityList />}></Route>
              <Route path="cities/:id" element={<City />}></Route>

              <Route path="countries" element={<CountryList />}></Route>
              <Route path="*" element={pageNotFound}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </div>
  )
}
