import styled from "styled-components";

export const Li = styled.li`
  min-width: 180px;
  min-height: 150px;
  width: 265px;
  height: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 25px;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.5);

  figure {
    width: 95%;
    height: 230px;
    border: 5px solid rgba(215, 84, 19, 1);
    overflow: hidden;
    border-radius: 12px;
    margin-top: 8px;
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: scale-down;
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
  }

  div {
    width: 90%;
    height: 45%;
    margin-left: 5px;
    margin-top: 8px;
    display: flex;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  .divPrice {
    display: flex;
    flex-direction: row;
    margin-top: -5px;
    margin-left: -5px;
    margin-bottom: 14;
  }

  .divMinPrice .divCurrentBid {
    display: flex;
    flex-direction: column;
  }

  .currentBid {
    color: rgb(168, 0, 0);
  }

  h2 {
    font-weight: 700;
    font-size: 20px;
  }

  .description {
    text-align: left;
    width: 100%;
    height: 28px;
    overflow-y: hidden;
    font-weight: 400;
    font-size: 12px;
  }

  .pBid {
    margin-bottom: -14px;
  }

  span {
    font-weight: 400;
    font-size: 12px;
  }

  p {
    width: 90%;
    color: black;
    font-weight: 800;
    font-size: 14px;
    margin: 5px 0px;
    text-align: left;
  }

  @media (max-width: 850px) {
    width: 180px;
    height: 340px;
  }
`;

export const Button = styled.button`
  margin-left: 10px;
  margin-bottom: 6px;
  font-size: 14px;
  width: 90%;
  height: 2.7rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  background-color: rgba(215, 84, 19, 1);
  color: #ffffff;
  border: 1px solid rgba(61, 61, 61, 1);
  border-radius: 8px;
`;
