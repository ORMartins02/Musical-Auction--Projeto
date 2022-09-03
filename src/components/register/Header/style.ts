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
    margin-top: -40px;
    bottom: 10px;
  }
  .login-box-description {
    display: none;
  }
  @media (min-width: 767px) {
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
      margin-bottom: 160px;
      border-width: 2px;
      border-style: solid;
      border-color: yellow;
      text-align: center;
      font-size: 14px;
      line-height: 18px;
      border-radius: 12px;
      box-shadow: 3px 4px 5px 0px rgba(117, 109, 109, 0.75);
    }
    .header-img1 {
      width: 32vw;
      height: 42vh;
    }
  }
`;
