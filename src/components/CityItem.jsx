import React from "react"
import styles from "./CityItem.module.css"
import { Link } from "react-router-dom"
import { useCities } from "../contexts/CitiesContext"

export default function CityItem({ city }) {
  const { currentCity } = useCities()
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date))
  const { emoji, cityName, date, id, position } = city
  console.log("id:" + id + "currentid:" + currentCity.id)
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        <span className={styles.emoji}> {city.emoji} </span>
        <h3 className={styles.name}> {city.cityName} </h3>
        <time className={styles.date}> {formatDate(city.date)} </time>
        <button className={styles.deleteButton}>x</button>
      </Link>
    </li>
  )
}
