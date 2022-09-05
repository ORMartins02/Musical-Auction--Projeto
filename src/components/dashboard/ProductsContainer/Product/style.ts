import styled from "styled-components";

export const Li = styled.li`
  font-family: "Inter", sans-serif;
  min-width: 200px;
  min-height: 150px;
  width: 265px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--color-grey-0);
  border-radius: 12px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 25px;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.5);

  figure {
    width: 95%;
    height: 255px;
    border: 5px solid var(--color-primary);
    overflow: hidden;
    border-radius: 12px;
    margin-top: 8px;
  }

  img {
    width: 150%;
    height: 250px;
    object-fit: cover;
    display: flex;
    align-items: center;
    background-color: var(--color-grey-1);
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

  h2 {
    font-weight: 700;
    font-size: 20px;
    margin-top: -10px;
  }

  span {
    text-align: left;
    width: 100%;
    height: 28px;
    overflow-y: hidden;
    font-weight: 400;
    font-size: 12px;
  }

  p {
    color: black;
    font-weight: 800;
    font-size: 14px;
  }

  @media (max-width: 850px) {
    width: 180px;
    height: 340px;
  }
`;

export const Button = styled.button`
  margin-left: 10px;
  font-size: 14px;
  width: 90%;
  height: 2.7rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: 1px solid var(--color-grey-4);
  border-radius: 8px;
`;
