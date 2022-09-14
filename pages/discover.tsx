import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import api from "../pages/api/api"
import styles from '../styles/Booklist.module.css'

const Discover = () => {
  const [bookData, setBookData] = useState([]) 

  useEffect(() => {
    const token = localStorage.getItem("token")
    api.get("books", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      } 
    })
    .then(function (response) {
      setBookData(response.data.data)
      return response
    })
    .then(function (data) {
      return data
    })
    .catch(function (error: Error) {
      console.log(error)
    })
  }, [])

  return(
  <>
    <Head>
      <title>Discover New Books</title>
    </Head>

    <main>
      <p>Welcome to the discover page.</p>
    </main>
    
    {bookData && bookData.map((book) => ( 
      <div key={book.attributes.id}>
        <div className={styles.card}>
          <div className={styles.grid}>
            <div>
              <Image src={book.attributes.cover_image_url} alt={book.attributes.title} width={150} height={250} />
            </div>
            <div>
              <h2>{book.attributes.title}</h2>
              <p>{book.attributes.author}</p>
              <p>{book.attributes.publisher}</p>

              <small>{book.attributes.synopsis}</small>

              <div className={styles.grid}>
                <button className={styles.button}>
                  <Link href="#">Add to list</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
)}

export default Discover
