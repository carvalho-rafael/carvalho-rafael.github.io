import styled from 'styled-components';

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-weight: 400;
    }

    p {
        margin-bottom: 0px;
    }

    a {
        display: flex;
        align-items: center;

        img {
            width: 35px;
            height: 35px;
            object-fit: cover;
            padding: .5rem;
        }

        span {
            font-size: 14px;
        }
    }

    div {
        flex: 1;
        display: flex;
        justify-content: space-between;
    }
`
