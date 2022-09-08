import styled from "styled-components";
import musicalImg from "../../../img/Component6.svg";
export const ContainerLoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${musicalImg});
  background-repeat: no-repeat;

  width: 100%;
  height: 100%;
  text-align: center;

  figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header-img1 {
    width: 100%;
  }

  #under-logo {
    margin-top: -20px;
    margin-left: -20px;
  }

  .violinImg {
    display: none;
    width: 60%;
  }

  .login-box-description {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
  }

  p {
    font-weight: 500;
  }

  @media (min-width: 767px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    height: 100%;
    .violinImg {
      width: 70%;

      display: flex;
    }
    .header-img1 {
      width: 50%;
    }
  }
`;
