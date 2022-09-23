import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Index = () => (
  <>
    <Head>
      <title>Bookshelf</title>
    </Head>
    
    <main>
      <div className={styles.grid}>
        <span>
          <Image src="/book-stack.png" alt="Vercel Logo" width={200} height={200} />
        </span>
      </div>

      <div className={styles.grid}>
        <h2 className={styles.title}>Bookshelf</h2>
      </div>

      <div className={styles.grid}>
        <button className={styles.button}>
          <Link href="/login">Login</Link>
        </button>
        
        <button className={styles.button}>
          <Link href="/register">Register</Link>
        </button>
      </div>
    </main>
  </>
)

export default Index
