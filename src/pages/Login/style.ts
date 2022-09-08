import styled from "styled-components";
export const ContainerLoginMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: rgb(248 249 250 / 91%);
  .container-header-main {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 767px) {
    display: flex;
    background-color: var(--color-grey-3);
    flex-direction: row;
    height: 100vh;
    .container-header-main {
      width: 90%;
      height: 80%;
      display: flex;
      background-color: white;
      flex-direction: row;
    }
  }
`;
