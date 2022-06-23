import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Feed from "../components/Feed"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header></Header>
      <Feed></Feed>
      <Modal></Modal> */}

      <Header/>
      <Feed/>
    </div>
  )
}

export default Home
