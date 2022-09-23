import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Booklist.module.css'
import { addToFinishedBooks, fetchReadingList, removeToReadingList } from '../api/books'
import Router from 'next/router'

const List = () => {
  const [readingListData, setReadingListData] = useState([]) 

  useEffect(() => {
    const data = fetchReadingList();

    const getBooks = async () => { 
      const books = await data.books
      setReadingListData(books.data)
    };
    getBooks()
    
  }, [])

  const handleClick = (e, listId, type) => {
    if (type=="mark") {
      addToFinishedBooks(listId)
      Router.reload(window.location.pathname)
    } else {
      removeToReadingList(listId)
      Router.reload(window.location.pathname)
    }
  }

  return(
    <>
      <Head>
        <title>Reading List</title>
      </Head>

      {readingListData && readingListData.map((list) => ( 
        <div key={list.id}>
          <div className={styles.card}>
            <div className={styles.grid}>
              <div>
                <Image src={list.attributes.book.cover_image_url} alt={list.attributes.book.title} width={150} height={250} />
              </div>
              <div>
                <h2>{list.attributes.book.title}</h2>
                <p>{list.attributes.book.author}</p>
                <p>{list.attributes.book.publisher}</p>

                <small>{list.attributes.book.synopsis}</small>

                <div className={styles.grid}>
                  <button className={styles.button}>
                    <Link href="#">
                      <a onClick={(e) => handleClick(e, list.id, "mark")}>Mark as Read</a>
                    </Link>
                  </button>
                  <button className={styles.button}>
                    <Link href="#">
                      <a onClick={(e) => handleClick(e, list.id, "remove")}>Remove from list</a>
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

export default List
