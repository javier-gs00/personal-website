import React from 'react'
import styles from './Underline.module.css'

interface Props {
  containerStyle?: React.CSSProperties
  underlineStyle?: React.CSSProperties
}

export const Underline: React.FC<Props> = ({
  children,
  containerStyle,
  underlineStyle,
}) => {
  return (
    <div className={styles.container} style={{ ...containerStyle }}>
      {children}
      <div className={styles.underline} style={{ ...underlineStyle }} />
    </div>
  )
}
