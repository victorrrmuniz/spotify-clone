import styled from "styled-components";

export const TopMenuContainer = styled.div`
  background-color: #080404;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
      background-color: inherit;
      border: none;
    }
  }
`;