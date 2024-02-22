import React from "react"
import Logo from "./Logo"
import AppNav from "./AppNav"
import styles from "./Sidebar.module.css"

export default function Sidebar() {
  return (
    <div>
      <Logo />
      <AppNav />
      <p>List of Cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          Copyright {new Date().getFullYear()} by WorldWide Inc.
        </p>
      </footer>
    </div>
  )
}
