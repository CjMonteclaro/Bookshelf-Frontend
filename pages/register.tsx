import React from 'react'
import Head from 'next/head'
import { RegisterForm } from '../components/RegisterForm'
import { registerRequest } from './api/sessions'
import styles from '../styles/Login.module.css'

const Register = () => { 
  return(
    <div>
      <Head>
        <title>Register</title>
      </Head>
  
      <div className={styles.main}>
        <div className={styles.card}>
  
          <h2>Register</h2>
            <RegisterForm onSubmit={registerRequest} buttonText="Register" />
        </div>
      </div>
    </div>
  )
}

export default Register
