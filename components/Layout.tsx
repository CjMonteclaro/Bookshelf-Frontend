import React from 'react'
import { Navbar } from './Navbar'
import { Sidenav } from './Sidenav'
import { FC } from "react"
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const isNavPresent = () => {
    const hiddenNavPathnames = ["/", "/login", "/register"]
  
    return !hiddenNavPathnames.includes(router.pathname)
  }

  return (
    <>
      {isNavPresent() && <Navbar />}
      <div className={styles.container}>
        <main className={styles.main}>
          {isNavPresent() && <Sidenav />}
          {children}
        </main>
      </div>
    </>
  )
}

export { Layout }
