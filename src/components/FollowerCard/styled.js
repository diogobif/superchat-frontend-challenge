import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;

  .image-block {
    width: 40px;
    height: 40px;

    img {
      height: auto;
      width: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  a {
    margin-left: 5px;
    font-weight: 500;
    text-decoration: none;
    font-size: 1rem;
    color: #000;
  }
`