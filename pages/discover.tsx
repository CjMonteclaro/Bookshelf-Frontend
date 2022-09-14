import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Booklist.module.css'

const Discover = () => (
  <>
    <Head>
      <title>Discover New Books</title>
    </Head>

    <main>
      <p>Welcome to the discover page.</p>
    </main>

    <div>
      <div className={styles.card}>
        <div className={styles.grid}>
          <div>
            <Image src="/padington.jpg" alt="Padington" width={150} height={250} />
          </div>
          <div>
            <h2>A Bear Called Paddington</h2>
            <p>Michael Bond | HarperCollins</p>

            <small>
              Paddington Bear had just traveled all the way from Peru when the Brown family first met him in Paddington Station. Since then, their lives have never been quite the same . . . for ordinary things become extraordinary when Paddington is involved.
            </small>

            <div className={styles.grid}>
              <button className={styles.button}>
                <Link href="#">Add to list</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Discover
