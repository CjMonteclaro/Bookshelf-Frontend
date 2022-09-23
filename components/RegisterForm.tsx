import router from "next/router";
import React from "react";
import styles from '../styles/Login.module.css'

interface RegisterForm {
  onSubmit: React.FormEvent,
  buttonText: string,
}

function RegisterForm({onSubmit, buttonText}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {username, password, email} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
      email: email.value,
    })
    router.push("/discover")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" className={styles.label}>Username:</label>
      <input type="text" id="username" name="username" className={styles.textfield} />
      <label htmlFor="email" className={styles.label}>Email:</label>
      <input type="text" id="email" name="email" className={styles.textfield} />
      <label htmlFor="password" className={styles.label}>Password:</label>
      <input type="password" id="password" name="password" className={styles.textfield} />
      <button type="submit" className={styles.submit}>{buttonText}</button>
    </form>
  )
}

export { RegisterForm }
