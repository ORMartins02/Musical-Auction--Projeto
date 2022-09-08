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
    margin-top: 6.25rem;
  }

  #under-logo {
    margin-top: -1.25rem;
    margin-left: -1.25rem;
  }

  #div-text {
    width: 60%;
    height: 40vh;
    border: .1875rem solid var(--color-primary);
    border-radius: .5rem;
    box-shadow: .1875rem .25rem .3125rem 0rem rgba(117, 109, 109, 0.75);
    margin-top: 2.1875rem;
    margin-left: -1.875rem;
  }

  .login-box-description {
    margin-top: .9375rem;
    margin-bottom: .9375rem;
    margin-left: .625rem;
  }

  p {
    font-weight: 500;
  }

  @media (min-width: 47.9375rem) {
    width: 50%;
    .header-img1 {
      width: 50%;
      margin-top: 6.25rem;
    }
  }
`
