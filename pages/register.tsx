import React from 'react'
import Head from 'next/head'
import styles from '../styles/Login.module.css'

const register = () => (
  <div>
    <Head>
      <title>Register</title>
    </Head>

    <div className={styles.main}>
      <div className={styles.card}>

        <h2>Register</h2>
          
        <form action="/discover" method="post">
          <label htmlFor="username" className={styles.label}>Username:</label>
          <input type="text" id="username" name="username" className={styles.textfield} />
          <label htmlFor="password" className={styles.label}>Password:</label>
          <input type="text" id="password" name="password" className={styles.textfield} />
          <button type="submit" className={styles.submit}>Register</button>
        </form>
      </div>
    </div>
  </div>
)

export default register
