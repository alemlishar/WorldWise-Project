import React from "react"
import { createContext, useContext, useState, useEffect } from "react"

const CitiesContext = createContext()
const API_URl = "http://localhost:9000/cities/"

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState()
  const [currentCity, setCurrentCity] = useState({})

  useEffect(function () {
    async function cityFetch() {
      try {
        setIsLoading(true)
        const res = await fetch(API_URl)
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

  async function getCity(id) {
    const url = API_URl + id
    console.log(url)
    try {
      setIsLoading(true)
      const res = await fetch(url)
      const data = await res.json()
      setCurrentCity(data)
    } catch {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  )
}

function useCities() {
  const context = useContext(CitiesContext)
  if (context === undefined)
    throw new Error("Cities context was used outside the provider")
  return context
}
export { useCities, CitiesProvider }
