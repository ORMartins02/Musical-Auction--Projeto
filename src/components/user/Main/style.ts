import styled from "styled-components";

export const StMain = styled.main`
  display: flex;
  flex-direction: column;
 
  background-color: rgba(237, 237, 237, 1);
  @media (min-width: 768px) {
    width: 100vw;
    flex-direction: row;
    max-height: 85vh;
  }
`;
