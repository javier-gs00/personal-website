import React from 'react'
import styles from './Layout.module.css'
import { Navbar } from '../navbar/Navbar'

export const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
    </div>
  )
}
