import styled from 'styled-components';

export const AppContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background-color: #ecf8f8;
    height: 100%;
    padding: 5px;
    p {
        margin: 0;
    }

    @media screen and (min-width: 1024px) {
        padding: 20px 45px;
    }
`;
