import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  min-height: 100%;
  justify-content: space-between;
  background-color: #fff;
  flex-grow: 1;
  border-radius: 10px;
  font-size: 1rem;
  padding: 5px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  background-color: #${props => props.theme.bgColor || 'fff'};
  border: 1px solid #${props => props.theme.borderColor || '000'};
  border-radius: 8px;
  padding: 10px;
  flex-grow: 0;

  @media screen and (min-width: 1024px) {
    width: 30%;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    max-height: 150px;
  }

  .image-block {
    height: 130px;
    width: 130px;
    display: flex;
    align-items: center;

    img {
      height: auto;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .info-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    font-weight: normal;
    margin-top: 10px;
    width: 100%;
    margin-left: 0;

    @media screen and (min-width: 1440px) {
      align-items: flex-start;
      margin-left: 10px;
    }

    .info-name {
      font-weight: bold;
      font-size: 1.5rem;
    }

    .info-username {
      margin-bottom: 5px;
      font-size: 1.2rem;
    }

    .info-description {
      font-size: 1.2rem;
      font-weight: 500;
    }

    .info-followers {
      font-size: 1.1rem;

      i {
        font-size: 1.1rem;
      }

      span {
        margin-left: 4px;
      }
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #${props => props.bgColor || 'fff'};
  border: 1px solid #${props => props.border || 'fff'};
  border-radius: 8px;
  padding: 10px 5px;
  margin-bottom: 15px;

  h4 {
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 15px;
  }
`;