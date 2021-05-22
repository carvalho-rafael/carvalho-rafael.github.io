import styled from 'styled-components';

export const HomeContainer= styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    main {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    @media(min-width: 426px) {
        width: 100vw;
        height: 100vh;

        main {
            margin-top: -100px;
        }
    }
`