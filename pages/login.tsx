import React from 'react'
import Head from 'next/head'
import { LoginForm } from '../components/LoginForm'
import { loginRequest } from './api/sessions'
import styles from '../styles/Login.module.css'

const Login = () => { 
  return(
    <div>
      <Head>
        <title>Login</title>
      </Head>
  
      <div className={styles.main}>
        <div className={styles.card}>
  
          <h2>Login</h2>
            <LoginForm onSubmit={loginRequest} buttonText="Login" />
        </div>
      </div>
    </div>
  )
}

export default Login
