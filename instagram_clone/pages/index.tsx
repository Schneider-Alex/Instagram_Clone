import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> This is the INSTAGRAM CLONE</h1>
      {/* <Header></Header>
      <Feed></Feed>
      <Modal></Modal> */}

      <Header/>
    </div>
  )
}

export default Home
