import Head from 'next/head'
import Navbar from '../components/navbar'
import ProjectsComponent from '../components/projects'
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
                    <ProjectsComponent />
                </main>
            </LayoutContainer>
        </>
    )
}