import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;


  > div:nth-child(1) {
    height: 80px;
  }

  > div:nth-child(2) {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > div:nth-child(1) {
      width: 300px;
    }

    > div:nth-child(2) {
      flex: 1;
    }
  }

  > div:nth-child(3) {
      height: 200px;
    }
`;