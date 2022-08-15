import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/MediaBar.module.css'
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaDiscord, FaMailBulk, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const MediaBar: NextPage = () => {
  return (
    <div className={styles.barContainer}>
        <div className={`${styles.iconContainer} ${styles.github}`}>
            <Link href="https://github.com/johansneirap" target="_blank">
                <FaGithub size={70}/>
            </Link>
        </div>
        <div className={`${styles.iconContainer} ${styles.linkedin}`}>
            <Link href="https://github.com/johansneirap" target="_blank">
                <FaLinkedinIn size={70}/>
            </Link>
        </div>
        {/* <div className={`${styles.iconContainer} ${styles.mail}`}>
            <Link href="https://github.com/johansneirap" target="_blank">
                <MdMail size={70}/>
            </Link>
        </div> */}
        <div className={`${styles.iconContainer} ${styles.discord}`}>
            <Link href="https://github.com/johansneirap" target="_blank">
                <FaDiscord size={70}  />
            </Link>
        </div>
        <div className={`${styles.iconContainer} ${styles.twitter}`}>
            <Link href="https://github.com/johansneirap" target="_blank">
                <FaTwitter size={70}  />
            </Link>
        </div>
        <div className={`${styles.iconContainer} ${styles.instagram}`}>
            <Link href="https://github.com/johansneirap" target="_blank">
                <FaInstagram size={70}/>
            </Link>
        </div>
    </div>
  )
}

export default MediaBar