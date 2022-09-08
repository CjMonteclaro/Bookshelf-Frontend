import React from 'react'
import Head from 'next/head'
import LoginForm from '../components/LoginForm'
import styles from '../styles/Login.module.css'
import router from 'next/router'

const login = () => { 
  const loginRequest = (formData: React.FormEvent<HTMLInputElement>) => {
    console.log("login", formData)
    fetch("http://localhost:3001/api/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: formData.username,
          password: formData.password,
        },
      }),
    }).then((res) => {
      if (res.ok) {
        console.log("res: ", res)
        localStorage.setItem("token", res.headers.get("Authorization"))
        router.push("/discover")
      } else {
        throw new Error(res)
      }
    })
  }

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

export default login
