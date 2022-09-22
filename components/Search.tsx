import Router from "next/router";
import React from "react";
import styles from '../styles/Search.module.css'

interface SubmitProps {
  query: string;
}

interface SearchProps {
  onSubmit: (props: SubmitProps) => void;
}

const SearchForm = ({onSubmit}:SearchProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const {query} = event.currentTarget
    
    onSubmit({
      query: query.value,
    })
  }

  const handleClick = (e) => {
    Router.reload(window.location.pathname)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="query" name="query" placeholder="Search books..." className={styles.textfield} />
      <button type="submit" className={styles.submit}>Search</button>
      <button className={styles.submit} onClick={(e) => handleClick(e)}>Clear</button>
    </form>
  )
}

export default SearchForm
