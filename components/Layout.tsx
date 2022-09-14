import React from 'react'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import { FC } from "react"
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
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
