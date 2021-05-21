import Head from 'next/head'
import { HomeContainer } from '../styles/pages/index'
import Navbar from '../components/navbar'
export default function Home() {
  return (
    <>
      <Head>
        <title>Rafael Carvalho</title>
      </Head>
      <HomeContainer>
        <Navbar />
        <h1>Olá soal</h1>
      </HomeContainer>
    </>
  )
}
