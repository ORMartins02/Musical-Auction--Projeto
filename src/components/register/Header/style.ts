import styled from "styled-components";
import musicalImg from "../../../img/Component6.svg";
export const ContainerLoginHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${musicalImg});
  background-repeat: no-repeat;
  height: 40vh;
  width: 100%;
  background-color: white;
  position: relative;
  text-align: center;
  .header-img1 {
    width: 100vw;
    height: 40vh;
  }
  p {
    margin-top: -2.5rem;
    bottom: .625rem;
  }
  .login-box-description {
    display: none;
  }
  @media (min-width: 47.9375rem) {
    width: 30vw;
    height: 100vh;
    justify-content: space-between;
    .login-box-description {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 75%;
      height: 25%;
      display: inherit;
      margin-bottom: 10rem;
      border-width: .125rem;
      border-style: solid;
      border-color: yellow;
      text-align: center;
      font-size: .875rem;
      line-height: 1.125rem;
      border-radius: .75rem;
      box-shadow: .1875rem .25rem .3125rem 0rem rgba(117, 109, 109, 0.75);
    }
    .header-img1 {
      width: 32vw;
      height: 42vh;
    }
  }
`;
