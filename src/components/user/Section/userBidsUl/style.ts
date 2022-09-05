import styled from "styled-components";

export const StUlBids = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  
  .product {
    max-width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    padding: 0.2rem 0.2rem;
    gap: 0.5rem;
    &:hover {
      box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.5);
    }
    img {
      width: 100%;
      border-radius: 12px;
    }
    div {
      display: flex;
      flex-direction: column;
      gap:0.2rem;
      justify-content: space-between;
    

      h3 {
        font-weight: 600;
        font-size: 13px;
      }
      span {
        font-weight: 500;
        font-size: 10px;
      }
      p {
        font-weight: 700;
        font-size: 15;
      }
      button {
        font-size: 12px;
        background-color: rgba(144, 13, 9, 0.7);
        border-radius: 25px;
        font-weight: 700;
        color: #fff;
        padding: 0.3rem;
        width: 80%;
        max-width: 12rem;
        margin: 0 auto;
        &:hover {
          background-color: rgba(144, 13, 9, 1);
        }
      }
    }
  }
  @media (min-width: 768px) {
    overflow: auto;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    width: 80%;
    .product{
      flex-direction: column;
      max-width: 30%;
      div{
        button{
          font-size: 15px;
        }
      }
    }
  }
`;
