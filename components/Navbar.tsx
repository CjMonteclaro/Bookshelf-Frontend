import React from "react"
import Link from "next/link"
import styles from '../styles/Nav.module.css'

const Navbar = () => {
  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className={styles.li}>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </li>
      <li className={styles.li}>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </li>
      {/* <Link href={user ? "/logout" : "/login"}>
        <a className="ml-auto">{user ? "Logout" : "Login"}</a>
      </Link> */}  
  </ul>
  )
}

export { Navbar }
