import React from "react"
import styles from "./Map.module.css"
import { useSearchParams } from "react-router-dom"

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams()
  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")

  function handleClick(e) {
    setSearchParams({ lat: 40, lng: 30 })
    console.log(e)
  }

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>
        position {lat}, {lng}
      </h1>
      <button onClick={handleClick}></button>
    </div>
  )
}
