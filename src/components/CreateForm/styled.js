import styled from 'styled-components';

export const Line = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 15px;
  margin-bottom: 15px;

  button {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;

    button {
      margin-bottom: 0;
    }
  }

  .formGroup {
    width: 100%;
    margin-bottom: 10px;

    @media screen and (min-width: 1024px) {
      width: 20%;
      margin-bottom: 0;
    }
  }
`;