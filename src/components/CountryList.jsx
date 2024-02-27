import React from "react"
import styles from "./CountryList.module.css"
import Spinner from "./Spinner"
import Message from "./Message"
import CountryItem from "./CountryItem"
import { useCities } from "../contexts/CitiesContext"

export default function CountryList() {
  const { cities, isLoading } = useCities()
  if (isLoading) return <Spinner />

  if (!cities.length)
    return <Message message="Add your city by clicking on the Map"></Message>

  const countries = cities.reduce((acc, curr) => {
    if (!acc.map((city) => city.country).includes(curr.country))
      return [...acc, { country: curr.country, emoji: curr.emoji }]
    else return acc
  }, [])
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.emoji} />
      ))}
    </ul>
  )
}
