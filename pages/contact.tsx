import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Underline } from '../components/underline/Underline'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <Layout pageTitle="About">
      <main className={styles.main}>
        <div className={styles.container}>
          <Underline containerStyle={{ alignItems: 'flex-start' }}>
            <h1 className={styles.title}>Contact me...</h1>
          </Underline>
          <p className={styles.description}>
            Here you will find some ways to get in touch with me.
          </p>
          <ul className={styles.linkList}>
            <li>
              <a
                href="https://github.com/javier-gs00"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/javier-gutierrez-sepulveda-66bb9835/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.container}>
          <img className={styles.photo} src="/selfie.jpg" />
        </div>
      </main>
    </Layout>
  )
}
