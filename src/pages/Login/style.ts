import styled from "styled-components";
export const ContainerLoginMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(248 249 250 / 91%);
  .container-header-main {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 47.9375rem) {
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    .container-header-main {
      display: flex;
      flex-direction: row;
      border-width: .125rem;
      border-style: solid;
      border-color: black;
    }
  }
`;
