import styled, { css } from 'styled-components';

export const NavbarContainer = styled.div<{ active: boolean }>`
    position: relative;
    display: flex;
    justify-content: flex-end;

    width: 100%;
    height: 100px;

    color: #ffc300;

    ul {
        margin: 0;
        display: flex;
        align-items: center;

        > div {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
            margin: 0 2rem;

            font-size: 24px;
        }

        li {
            position: relative;
            display: none;
            margin: 1rem 2rem;
            hr {
                position: absolute;
                width: 100%;
            }
        }

    }

    ${props => props.active && css`
        justify-content: flex-start;
        flex-direction: column;

        position: fixed;
        height: 100%;
        top: 0;

        background: #222;

        ul {
            flex-direction: column;
            align-items: flex-end;
            li {
                display: block;
            }
        }
    `}

    @media(min-width: 426px) {
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100px;
        max-width: 1200px;

        background: none;

        ul {
            flex-direction: row;
            > div {
                display: none;
            }

            li {
                display: block;
            }
        }
    }
`
export const NavbarWrapper = styled.div`
    flex: 1;    
    display: flex;
    justify-content: flex-end;

    width: 100%;
    height: 100px;

    @media(min-width: 426px) {
        flex: 0;
        justify-content: center;
    }

`
