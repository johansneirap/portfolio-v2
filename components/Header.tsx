import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import Link from "next/link";

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
        <div className={styles.navBarContainer}>
            <div className={styles.logo}>Logo</div>
            <nav className={styles.nav}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/works">Works</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
