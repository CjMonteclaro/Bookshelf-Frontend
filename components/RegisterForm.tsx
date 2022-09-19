import React from "react";
import styles from '../styles/Login.module.css'

interface RegisterFormProps {
  onSubmit: any,
  buttonText: string,
}

const RegisterForm = ({onSubmit, buttonText}:RegisterFormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const {username, password, email} = event.currentTarget

    onSubmit({
      username: username.value,
      password: password.value,
      email: email.value,
    })
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
