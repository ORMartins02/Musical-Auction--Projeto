import styled from "styled-components";
import musicalImg from "../../../img/musical.svg";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.9375rem;
  background-image: url(${musicalImg});

  background-repeat: no-repeat;

  max-width: 100vw;
  background-color: #fff;
  padding-bottom: 2.5rem;
  padding-top: 0.9375rem;
  box-shadow: -1px 8px 5px -3px rgba(0, 0, 0, 0.63);
  -webkit-box-shadow: -1px 8px 5px -3px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: -1px 8px 5px -3px rgba(0, 0, 0, 0.63);

  .infHeader {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
  }
  .figure {
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      border: 0.125rem solid rgba(215, 84, 19, 1);
    }
  }
  .infUser {
    display: flex;
    align-items: center;
    gap: 0.4375rem;
  }
  .userName {
    font-weight: 700;
    font-size: 1.25rem;
    color: rgba(33, 41, 46, 1);
  }
  .userLoc {
    font-size: 0.875rem;
    color: rgba(215, 84, 19, 1);
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
  @media (min-width: 48rem) {
    max-height: 15vh;
    padding-bottom: 0.9375rem;
  }
`;
