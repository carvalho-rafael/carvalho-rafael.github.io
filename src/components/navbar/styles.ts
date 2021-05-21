import styled, { css } from 'styled-components';

export const NavbarContainer = styled.ul<{ active: boolean }>`
    position: relative;
    display: flex;
    justify-content: flex-end;

    width: 100%;
    height: 100px;
    margin: 0;
    
    > div {
        display: flex;
        align-items: center;
        height: 100px;
        margin: 0 2rem;

        font-size: 24px;
    }

    li {
        display: none;
        margin: 1rem 2rem;
    }

    ${props => props.active && css`
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;

        position: fixed;
        height: 100vh;
        width: 80vw;
        top: 0;

        background: #222;
        
        li {
            display: block;
        }
    `}

    @media(min-width: 426px) {
        flex-direction: row;
        align-items: center;

        width: 100%;
        height: 100px;
        max-width: 1200px;

        background: none;

        > div {
            display: none;
        }

        li {
            display: block;
        }
    }
`
export const NavbarWrapper = styled.div`
    height: 100px;
    display: flex;
    justify-content: flex-end;

`
