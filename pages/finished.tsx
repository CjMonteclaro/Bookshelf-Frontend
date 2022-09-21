import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Booklist.module.css'
import { fetchFinishedBooks, removeToFinishedBooks } from './api/books'
import Router from 'next/router'

const Finished = () => {
  const [finishedBookData, setfinishedBookData] = useState([]) 

  useEffect(() => {
    const data = fetchFinishedBooks();

    const getBooks = async () => { 
      const books = await data.books
      setfinishedBookData(books.data)
    };
    getBooks()
    
  }, [])

  const handleClick = (e, finishedId) => {
    removeToFinishedBooks(finishedId)
    Router.reload(window.location.pathname)
  }

  return(
  <>
    <Head>
      <title>Finished Books</title>
    </Head>

    {finishedBookData && finishedBookData.map((finished) => ( 
        <div key={finished.id}>
          <div className={styles.card}>
            <div className={styles.grid}>
              <div>
                <Image src={finished.attributes.book.cover_image_url} alt={finished.attributes.book.title} width={150} height={250} />
              </div>
              <div>
                <h2>{finished.attributes.book.title}</h2>
                <p>{finished.attributes.book.author}</p>
                <p>{finished.attributes.book.publisher}</p>

                <small>{finished.attributes.book.synopsis}</small>

                <div className={styles.grid}>
                  <button className={styles.button}>
                    <Link href="#">
                      <a onClick={(e) => handleClick(e, finished.id)}>Remove from list</a>
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

export default Finished
