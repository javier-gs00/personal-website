import React from 'react'
import Head from 'next/head'
import styles from './Layout.module.css'
import { Navbar } from '../navbar/Navbar'

interface Props {
  pageTitle: string
}

export const Layout: React.FC<Props> = ({ children, pageTitle }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </div>
  )
}
