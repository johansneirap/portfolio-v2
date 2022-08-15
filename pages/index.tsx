import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Content from '../components/Content'
import MediaBar from '../components/MediaBar'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Content />
      <MediaBar />
    </>
  )
}

export default Home
