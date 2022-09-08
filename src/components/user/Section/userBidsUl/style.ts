import styled from "styled-components";

export const StUlBids = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 1.5rem;
  padding: 1rem;
  justify-content: center;

  .product {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    padding: .2rem .2rem;
    gap: .5rem;
    &:hover {
      box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.5);
    }
    .btnUsProd {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: center;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(144, 13, 9, 0.7);
        border-radius: 25px;
        font-weight: 700;
        color: #fff;
        max-width: 12rem;
        width: 70%;
        padding: .5rem;
        &:hover {
          background-color: rgba(144, 13, 9, 1);
        }
      }

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        width: 20px;
        padding: .2rem;
      }
      .edit {
        background-color: rgb(78, 100, 36, 0.8);
        &:hover {
          background-color: rgb(78, 100, 36, 1);
        }
      }
    }
    img {
      width: 150px;
      height: 150px;
      border-radius: 12px;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: .2rem;
      justify-content: space-between;
      width: 100%;

      h3 {
        font-weight: 600;
        font-size: .8125rem;
      }
      span {
        font-weight: 500;
        font-size: .625rem;
      }
      p {
        font-weight: 700;
        font-size: .9375rem;
      }
    }
  }
  @media (min-width: 768px) {
    overflow: auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 100%;
    .product {
      height: 280px;
      flex-direction: column;
      img {
        width: 150px;
        height: 150px;
        border-radius: 12px;
      }
      div {
        button {
          font-size: .9375rem;
        }
      }
    }
  }
`;
