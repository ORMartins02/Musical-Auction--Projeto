import styled from "styled-components";

export const StUlProd = styled.ul`
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
    border-radius: .75rem;
    padding: .2rem .2rem;
    gap: .5rem;
    &:hover {
      box-shadow: 0rem 0rem .3125rem .3125rem rgba(0, 0, 0, 0.5);
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
        border-radius: .75rem;
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
        width: 2.75rem;
        padding: .2rem;
      }
      .edit {
        margin-top: .1rem;
        background-color: rgba(215, 84, 19, 1);
 
        &:hover {
          background-color: rgba(215, 84, 19, 0.8);
        }
      }
    }
    img {
      width: 9.375rem;
      height: 9.375rem;
      border-radius: .75rem;
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
      #spanButtons {
        width: 95%;
        font-weight: 500;
        font-size: .625rem;
        display: flex;
        justify-content: space-around;
      }
      p {
        font-weight: 700;
        font-size: 15;
      }
    }
  }
  @media (min-width: 48rem) {
    overflow: auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 100%;
    .product {
      height: 17.5rem;
      flex-direction: column;
      img {
        width: 9.375rem;
        height: 9.375rem;
        border-radius: .75rem;
      }
      div {
        button {
          font-size: .9375rem;
        }
      }
    }
  }
`;
