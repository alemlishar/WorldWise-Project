import React, { useEffect, useState } from "react"
import styles from "./CityList.module.css"
import CityItem from "./CityItem"
import Spinner from "./Spinner"
import Message from "./Message"
import { Link } from "react-router-dom"
import { useCities } from "../contexts/CitiesContext"
export default function CityList() {
  const { cities, isLoading } = useCities()

  if (isLoading) return <Spinner />
  if (!cities.length)
    return <Message message="Add your city by clicking on the Map"></Message>
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  )
}
