import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Booklist.module.css'

const List = () => (
  <>
    <Head>
      <title>Reading List</title>
    </Head>

    <div>
      <div className={styles.card}>
        <div className={styles.grid}>
          <div>
            <Image src="/azkaban.jpg" alt="Padington" width={150} height={250} />
          </div>
          <div>
            <h2>Harry Potter and the Prisoner of Azkaban</h2>
            <p>J. K. Rowling|Scholastic</p>

            <small>
              In this third installment in the projected seven-volume series, Sirius Black, imprisoned for killing 13 people with one curse, escapes from Azkaban. As he heads for Hogwarts, the chilling Dementors who trail him quickly descend upon the school. "Each successive volume expands upon its predecessor with dizzyingly well-planned plots and inventive surprises," said PW in a Best Books of 2001 citation. Ages 8-up.
            </small>

            <div className={styles.grid}>
              <button className={styles.button}>
                <Link href="#">Mark as read</Link>
              </button>
              
              <button className={styles.button}>
                <Link href="#">Remove from list</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default List
