import styled from "styled-components";

export const StSect = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  
  .filter {
    display: flex;
    width: 100%;
    justify-content: space-between;
    button {
      height: 35px;
      padding: 0.3rem;
      border-radius: 0 0 12px 12px;
      font-weight: 600;
      color: #fff;
      background-color: rgba(215, 84, 19, 0.8);
      font-size: 14px;
      &:hover{
        transition: 150ms;
        background-color: rgba(215, 84, 19, 1);
        font-size: 16px;

      }
    }
  }

  @media (min-width: 768px) {
    width: 85%;
    .filter{
     display: none;
    }
  }
`;
