import React from 'react'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const Layout = ({ children }) => {
  const router = useRouter();
  const showNav = router.pathname === "/" ? false
    : router.pathname === "/login" ? false
    : router.pathname === "/register" ? false
    : true;

  return (
    <>
      {showNav && <Navbar />}
      <div className={styles.container}>
        <main className={styles.main}>
          {showNav && <Sidenav />}
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
