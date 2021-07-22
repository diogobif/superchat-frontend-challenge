import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;

  .repo-title {
    font-size: 1.1rem;
    font-weight: bold;
  }

  .line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
  }
`