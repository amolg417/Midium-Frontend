import React from 'react'
import styles from './navbar.module.css'
import ThemeToggler from '../themeToggler/ThemeToggler'
import Authlink from '../authLinks/Authlink'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>Midium Lite</div>
      <div className={styles.links}>
        <ThemeToggler />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Authlink />
      </div>
    </div>
  )
}

export default Navbar
