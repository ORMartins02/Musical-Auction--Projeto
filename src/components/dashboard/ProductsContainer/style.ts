import styled from "styled-components";

export const StyledProductsContainer = styled.section`
  width: 90%;
  height: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  #loading {
    margin-top: 180px;
  }

  @media (max-width: 1110px) {
    #loading {
      margin-top: 100px;
      font-size: 18px;
    }
  }
`;

export const ListProducts = styled.ul`
  width: 85%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 20px;

`;
