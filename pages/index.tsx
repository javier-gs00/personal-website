import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/navbar/Navbar'
import { Layout } from '../components/layout/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Javier</h1>

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
