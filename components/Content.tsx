import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Content.module.css'
import Link from "next/link";
import Typewriter from 'typewriter-effect';

const Content: NextPage = () => {
  return (
    <section className={styles.mainContentSection}>
        <div className={styles.entryContentContainer}>
            <h1>Hi there!  My name is </h1>
            <h1> <span className={styles.textGradient}>Johans Neira</span></h1>
            <h1 className={styles.typewriter}>
                <Typewriter 
                options={{
                    strings: [
                        "I'm a fullstack Developer.",
                        "I love software development.",
                      ],
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(2500)
                        .deleteAll()
                        .start();
                }}
                ></Typewriter>
            </h1>
        </div>
        
        <a href="mailto:johansneirap@gmail.com?Subject=Let's%20Talk!">
          <button className={styles.contactBtn}>
            Get in touch!
          </button>
        </a>
    </section>
  )
}

export default Content
