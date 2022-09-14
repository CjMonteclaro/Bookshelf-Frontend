import React from "react";
import styles from '../styles/Login.module.css'

interface LoginFormProps {
  onSubmit: any,
  buttonText: string,
}

function LoginForm({onSubmit, buttonText}:LoginFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const {username, password} = event.currentTarget

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" className={styles.label}>Username:</label>
      <input type="text" id="username" name="username" className={styles.textfield} />
      <label htmlFor="password" className={styles.label}>Password:</label>
      <input type="password" id="password" name="password" className={styles.textfield} />
      <button type="submit" className={styles.submit}>{buttonText}</button>
    </form>
  )
}

export default LoginForm
