import React from "react"
import Logo from "./Logo"
import AppNav from "./AppNav"
import styles from "./Sidebar.module.css"
import { Outlet } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <p>List of Cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWide Inc.
        </p>
      </footer>
    </div>
  )
}
