import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Underline } from '../components/underline/Underline'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <Layout pageTitle="About">
      <main className={styles.main}>
        <div className={styles.container}>
          <Underline containerStyle={{ alignItems: 'flex-start' }}>
            <h1 className={styles.title}>About me...</h1>
          </Underline>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin
            fermentum leo vel orci porta non pulvinar neque laoreet. Vestibulum
            lorem sed risus ultricies tristique. Pulvinar pellentesque habitant
            morbi tristique. Nunc sed velit dignissim sodales ut eu sem integer
            vitae.
          </p>
          <p className={styles.description}>
            Scelerisque mauris pellentesque pulvinar pellentesque. Nam aliquam
            sem et tortor consequat id porta. Auctor elit sed vulputate mi sit
            amet mauris commodo. Semper risus in hendrerit gravida. Sagittis
            purus sit amet volutpat consequat mauris nunc congue nisi. Posuere
            sollicitudin aliquam ultrices sagittis orci a.
          </p>
        </div>
        <div className={styles.container}>
          <img className={styles.photo} src="/selfie.jpg" />
        </div>
      </main>
    </Layout>
  )
}
