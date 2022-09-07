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

  #divText {
    width: 250px;
    height: 200px;
    margin-bottom: 130px;
    margin-left: 10px;
    border: 3px solid var(--color-primary);
    border-radius: 8px;
    box-shadow: 3px 4px 5px 0px rgba(117, 109, 109, 0.75);
  }

  p {
    font-weight: 500;
  }

  @media (min-width: 767px) {
    width: 30vw;
    height: 100vh;
    justify-content: space-between;
    .login-box-description {
      margin-top: 20px;
      font-size: 18px;
    }
    .header-img1 {
      margin-top: 110px;
      margin-left: 15px;
      width: 32vw;
      height: 26vh;
    }
  }
`;
