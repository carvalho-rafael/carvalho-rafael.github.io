import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 500px;
    padding: 1rem;

    h1 {
        font-weight: 400;
    }

    p {
        margin-bottom: 0px;
        text-align: justify;
    }

    > img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50px;
    }
`
