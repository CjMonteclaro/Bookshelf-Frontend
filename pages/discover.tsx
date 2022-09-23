import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Booklist.module.css'
import { addToReadingList, fetchBooks } from '../api/books'
import { fetchUser } from '../api/users'
import Router from 'next/router'

const Discover = () => {
  const [bookData, setBookData] = useState([]) 
  const [user, setUser] = useState(null) 

  useEffect(() => {
    const data = fetchBooks()
    const userData = fetchUser()

    const getBooks = async () => { 
      const books = await data.books
      setBookData(books.data)
    }

    const getUser = async () => { 
      const users = await userData.user
      setUser(users.data)
    }
    getUser()
    getBooks()
    
  }, [])

  const handleClick = (e, bookId) => {
    addToReadingList(bookId, user.id)
    Router.reload(window.location.pathname)
  }
  
  return(
    <>
      <Head>
        <title>Discover New Books</title>
      </Head>

      <main>
        <p>Welcome to the discover page.</p>
      </main>
      
      {bookData && bookData.map((book) => ( 
        <div key={book.id}>
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
                    <Link href="#">
                      <a onClick={(e) => handleClick(e, book.id)}>Add to list</a>
                    </Link>
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
