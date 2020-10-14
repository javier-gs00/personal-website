import React from 'react'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/layout/Layout'
import { Underline } from '../components/underline/Underline'

export default function Home() {
  return (
    <Layout pageTitle="Javier">
      <main className={styles.main}>
        <Underline>
          <h1 className={styles.title}>Javier</h1>
        </Underline>
        <p className={styles.description}>
          Hi, I&apos;m Javier and I&apos;m a software developer. Welcome to my
          website, here you will find a little bit about me, what I do and some
          other random things.
        </p>
        <p className={styles.description}>
          Feel free to look take a look around.
        </p>
      </main>
    </Layout>
  )
}
