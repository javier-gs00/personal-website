import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './NavLink.module.css'

interface Props {
  href: string
  name: string
  isActive: boolean
}

export const NavLink: React.FC<Props> = ({ href, name, isActive }) => {
  const linkClass = classNames({
    [styles.navlink]: true,
    [styles.active]: isActive,
  })

  return (
    <div className={styles.linkContainer}>
      <Link href={href} passHref>
        <a className={linkClass}>{name}</a>
      </Link>
    </div>
  )
}
