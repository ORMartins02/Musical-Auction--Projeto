import styled from "styled-components";
import musicalImg from "../../../img/musical.svg";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .9375rem;

  background-image: url(${musicalImg});

  background-repeat: no-repeat;

  max-width: 100vw;
  background-color: var(--color-white);
  padding-bottom: .9375rem;
  padding-top: .9375rem;
  box-shadow: 0rem -.5625rem .9375rem .625rem rgba(0, 0, 0, 0.3);

  .infHeader {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
  }
  .btnHeader{
    border-radius: 50%;
    background-color: transparent;
  }
  .figure {
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      border: .125rem solid var(--color-primary);
    }
  }
  .infUser {
    display: flex;
    align-items: center;
    gap: .4375rem;
  }
  .userName {
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--color-grey-6);
  }
  .userLoc {
    font-size: .875rem;
    color: var(--color-primary);
    text-shadow: rgba(0, 0, 0, 0.75) 0.1em 0.1em 0.2em;
  }
  .svg {
    color: black;
  }

  .logout {
    background-color: transparent;
    font-size: 1.5625rem;
    height: 1.5625rem;
    width: 1.5625rem;
  }
`;
