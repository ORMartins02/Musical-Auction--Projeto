import styled from "styled-components";
import musicalImg from "../../../img/musical.svg";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  background-image: url(${musicalImg});

  background-repeat: no-repeat;

  max-width: 100vw;
  background-color: #fff;
  padding-bottom: 15px;
  padding-top: 15px;
  box-shadow: 0px -9px 15px 10px rgba(0, 0, 0, 0.3);

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
      border-radius: 50%;
      border: 2px solid rgba(215, 84, 19, 1);
    }
  }
  .infUser {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .userName {
    font-weight: 700;
    font-size: 20px;
    color: rgba(33, 41, 46, 1);
  }
  .userLoc {
    font-size: 14px;
    color: rgba(215, 84, 19, 1);
    text-shadow: rgba(0, 0, 0, 0.75) 0.1em 0.1em 0.2em;
  }
  .svg {
    color: black;
  }

  .logout {
    background-color: transparent;
    font-size: 25px;
    height: 25px;
    width: 25px;
  }
`;
