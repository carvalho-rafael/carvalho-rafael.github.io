import { useState } from "react";
import { NavbarContainer, NavbarWrapper } from "./styles";
import { MdClose, MdMenu } from 'react-icons/md'

export default function Navbar() {
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
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Projetos</a>
                        </li>
                    </ul>
                </NavbarContainer>
            </NavbarWrapper>
        </>
    )
}
