import React from "react"
import Link from "next/link"
import styles from '../styles/Sidenav.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sidenav}>
      <Link href="/list">
        <a>Reading List</a>
      </Link>
      <Link href="/finished">
        <a>Finished Books</a>
      </Link>
      <Link href="/discover">
        <a>Discover</a>
      </Link>
    </div>
  )
}

export default Sidebar
