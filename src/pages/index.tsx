import Head from 'next/head'
import { LayoutContainer } from '../styles/pages/layout'
import Navbar from '../components/navbar'
import Profile from '../components/profile'
export default function Home() {
  return (
    <>
      <Head>
        <title>Rafael Carvalho</title>
      </Head>
      <LayoutContainer>
        <Navbar route="home" />
        <main>
          <Profile />
        </main>
      </LayoutContainer>
    </>
  )
}
