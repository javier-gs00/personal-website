import React from 'react'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'
import { NavLink } from './NavLink'

export const Navbar: React.FC = () => {
  const router = useRouter()

  console.log(router.pathname)

  const routes = [
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
    {
      name: 'Javier',
      href: '/',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ]

  const links = routes.map((r) => {
    const isActive = r.href === router.pathname

    return (
      <NavLink key={r.href} href={r.href} name={r.name} isActive={isActive} />
    )
  })

  return <div className={styles.container}>{links}</div>
}
