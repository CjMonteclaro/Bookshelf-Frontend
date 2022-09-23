import router from "next/router";
import React from "react";
import styles from '../styles/Login.module.css'

interface SubmitProps {
  username: string,
  password: string,
}

interface LoginFormProps {
  onSubmit: (props: SubmitProps) => void,
  buttonText: string
}

const LoginForm = ({onSubmit, buttonText}:LoginFormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const {username, password} = event.currentTarget

    onSubmit({
      username: username.value,
      password: password.value,
    })
    router.push("/discover")
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

export { LoginForm }
