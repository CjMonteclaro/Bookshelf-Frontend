import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Booklist.module.css'

const Finished = () => (
  <>
    <Head>
      <title>Finished Books</title>
    </Head>

    <div>
      <div className={styles.card}>
        <div className={styles.grid}>
          <div>
            <Image src="/hollows.jpg" alt="Padington" width={150} height={250} />
          </div>
          <div>
            <h2>Harry Potter and the Deathly Hallows</h2>
            <p>J. K. Rowling|Scholastic</p>

            <small>
              A spectacular finish to a phenomenal series, Harry Potter and the Deathly Hallows is a bittersweet read for fans. The journey is hard, filled with events both tragic and triumphant, the battlefield littered with the bodies of the dearest and despised, but the final chapter is as brilliant and blinding as a phoenix&#39;s flame, and fans and skeptics alike will emerge from the confines of the story with full but heavy hearts, giddy and grateful for the experience.
            </small>

            <div className={styles.grid}>
              <button className={styles.button}>
                <Link href="#">Mark as unread</Link>
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

export default Finished
