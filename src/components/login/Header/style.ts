import styled from "styled-components";
import musicalImg from "../../../img/Component6.svg";
export const ContainerLoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${musicalImg});
  background-repeat: no-repeat;
  height: 40vh;
  width: 100%;
  background-color: white;
  text-align: center;

  figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header-img1 {
    width: 100%;
    margin-top: 100px;
  }

  #under-logo {
    margin-top: -20px;
    margin-left: -20px;
  }

  #div-text {
    width: 60%;
    height: 40vh;
    border: 3px solid var(--color-primary);
    border-radius: 8px;
    box-shadow: 3px 4px 5px 0px rgba(117, 109, 109, 0.75);
    margin-top: 35px;
    margin-left: -30px;
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
    .header-img1 {
      width: 50%;
      margin-top: 100px;
    }
  }
`;
