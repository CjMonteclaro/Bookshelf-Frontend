import React from 'react'
import Head from 'next/head'
import RegisterForm from '../components/RegisterForm'
import styles from '../styles/Login.module.css'
import router from 'next/router'

const register = () => { 
  const registerRequest = (formData: React.FormEvent<HTMLInputElement>) => {
    console.log("register", formData)
    fetch("http://localhost:3001/api/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: formData.username,
          password: formData.password,
          email: formData.email,
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

export default register
