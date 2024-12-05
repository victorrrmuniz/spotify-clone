import styled from "styled-components";

export const TopMenuContainer = styled.div`
  background-color: #080404;
  width: 100%;
  height: 100%;
  padding: 0 16px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: inherit;
    border: none;
    cursor: pointer;
    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(0.7);
    }
  }

  > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  > div:nth-child(3) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    > button:nth-child(3) {
      position: relative;
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
          content: '';
          position: absolute;
          top: -8px;
          left: -8px;
          bottom: -8px;
          right: -8px;
          background-color: #1f1f1f;
          border-radius: 50%;
          z-index: 1;
        }

      img {
        display: inline-block;
        position: relative;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        z-index: 2;

        
      }
    }
  }
`;