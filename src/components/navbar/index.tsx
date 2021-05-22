import { useState } from "react";
import Link from 'next/link'
import { NavbarContainer, NavbarWrapper } from "./styles";
import { MdClose, MdMenu } from 'react-icons/md'

export default function Navbar({ route }: { route: string }) {
    const [active, setActive] = useState(false)

    return (
        <>
            <NavbarWrapper>
                <NavbarContainer active={active}>
                    <ul>
                        <div onClick={() => setActive(prevState => !prevState)}>
                            {!active ? <MdMenu /> : <MdClose />}
                        </div>
                        <li>
                            <Link href="/">
                                <a>Home {route === "home" && <hr />}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <a>Projetos {route === "projects" && <hr />}</a>
                            </Link>
                        </li>
                    </ul>
                </NavbarContainer>
            </NavbarWrapper>
        </>
    )
}
