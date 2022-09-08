import styled from "styled-components";

export const StyledProductsContainer = styled.section`
  width: 90%;
  height: 100%;
  margin-top: 1.875rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  #loading {
    margin-top: 11.25rem;
  }

  @media (max-width: 69.375rem) {
    #loading {
      margin-top: 6.25rem;
      font-size: 1.125rem;
    }
  }
`;

export const ListProducts = styled.ul`
  width: 85%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1.5625rem;
  margin-bottom: 1.25rem;

`;
