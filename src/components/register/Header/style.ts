import styled from "styled-components";
import musicalImg from "../../../img/Component6.svg";
export const ContainerLoginHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${musicalImg});
  background-repeat: no-repeat;
  width: 100%;
  background-color: white;
  position: relative;
  text-align: center;
  .header-img1 {
      width: 50%;
    }
  .header-img2 {
    display: none;
  }
  p {
    margin-top: -2.5rem;
    bottom: .625rem;
  }
  .login-box-description {
    display: none;
  }
  @media (min-width: 47.9375rem) {
    width: 40%;
    height: 90%;
    justify-content: space-around;
    .login-box-description {
      display: flex;
      justify-content: center;
      align-items: center;
      display: inherit;
      border-width: .125rem;
      width: 80%;
      height: 30%;
      border-style: solid;
      border-color: var(--color-primary);
      text-align: center;
      font-size: .875rem;
      line-height: 1.125rem;
      border-radius: .75rem;
      box-shadow: .1875rem .25rem .3125rem 0rem rgba(117, 109, 109, 0.75);
    }
    .header-img1 {
      width: 50%;
    }
    .header-img2{
      display: inherit;
      width: 70%;
    }
  }
`;
