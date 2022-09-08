import styled from "styled-components";

export const StSect = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  .filter {
    display: flex;
    width: 100%;
    justify-content: space-between;
    button {
      height: 35px;
      padding: 0.3rem;
      border-radius: 0 0 12px 12px;
      font-weight: 600;
      color: #fff;
      background-color: rgba(215, 84, 19, 0.8);
      font-size: .875rem;
      &:hover {
        transition: 150ms;
        background-color: rgba(215, 84, 19, 1);
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 768px) {
    width: 85%;
    .filter {
      display: none;
    }
  }
`;

export const Li = styled.li`
  min-width: 180px;
  min-height: 150px;
  width: 180px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--color-grey-0);
  border-radius: 12px;
  margin-left: 20px;
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
    width: 100%;
    object-fit: scale-down;
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

  .divCurrentBid {
    margin-top: -5px;
    margin-left: 0;
  }

  .currentBid {
    color: rgb(168, 0, 0);
  }

  h2 {
    font-weight: 700;
    font-size: 1.25rem;
  }

  .spanBid {
  }

  .description {
    text-align: left;
    width: 100%;
    height: 28px;
    overflow-y: hidden;
    font-weight: 400;
    font-size: .75rem;
  }

  span {
    font-weight: 400;
    font-size: .75rem;
  }

  p {
    width: 90%;
    color: black;
    font-weight: 800;
    font-size: .875rem;
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
  font-size: .875rem;
  width: 90%;
  height: 2.7rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: 1px solid var(--color-grey-4);
  border-radius: 8px;
`;
