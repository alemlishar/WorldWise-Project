import React from "react"
import { createContext, useContext, useState, useEffect } from "react"
const CitiesContext = createContext()

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState()

  useEffect(function () {
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
    <CitiesContext.Provider value={{ cities, isLoading }}>
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
