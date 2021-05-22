import Head from 'next/head'
import { HomeContainer } from '../styles/pages/index'
import Navbar from '../components/navbar'
import Profile from '../components/profile'
export default function Home() {
  return (
    <>
      <Head>
        <title>Rafael Carvalho</title>
      </Head>
      <HomeContainer>
        <Navbar />
        <main>
          <Profile />
        </main>
      </HomeContainer>
    </>
  )
}
