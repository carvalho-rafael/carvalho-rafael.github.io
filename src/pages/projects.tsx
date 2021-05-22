import Head from 'next/head'
import Navbar from '../components/navbar'
import { LayoutContainer } from '../styles/pages/layout'

export default function Projects() {
    return (
        <>
            <Head>
                <title>Rafael Carvalho</title>
            </Head>
            <LayoutContainer>
                <Navbar route="projects" />
                <main>
                    <h1>meus projetos</h1>
                </main>
            </LayoutContainer>
        </>
    )
}