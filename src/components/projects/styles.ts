import  styled from 'styled-components'

export const ProjectsComponentContainer = styled.div`
    display: flex;
    flex-direction: column;

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
        h3 {
            text-align: center;
            margin-top: 0;
        }
    }
    img {
        width: 300px;
        height: 300px;
        object-fit: cover;

        padding: 1rem;
    }

    @media(min-width: 769px) {
        ul {
            display: block;
            white-space: nowrap;
            width: 1100px;
            max-width: 100vw;
            overflow: auto;

            li {
                display: inline-block;
            }
        }
    }
`
