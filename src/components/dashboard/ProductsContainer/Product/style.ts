import styled from "styled-components";

export const Li = styled.li`
  min-width: 11.25rem;
  min-height: 9.375rem;
  width: 16.5625rem;
  height: 26.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: .125rem solid var(--color-grey-0);
  border-radius: .75rem;
  margin-left: 1.875rem;
  margin-right: 1.875rem;
  margin-bottom: 1.5625rem;
  box-shadow: .3125rem .3125rem .3125rem -.0625rem rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: .3125rem .3125rem .3125rem -.0625rem rgba(0, 0, 0, 0.5);
  -moz-box-shadow: .3125rem .3125rem .3125rem -.0625rem rgba(0, 0, 0, 0.5);

  figure {
    width: 95%;
    height: 15.9375rem;
    border: .3125rem solid var(--color-primary);
    overflow: hidden;
    border-radius: .75rem;
    margin-top: .5rem;
  }

  img {
    width: 100%;
<<<<<<< HEAD
    height: 15.625rem;
    object-fit: scale-down;
=======
    height: 250px;
    object-fit: cover;
>>>>>>> fab00137b2f7343c0482df845efd85fb92da4bc3
    display: flex;
    align-items: center;
    background-color: var(--color-grey-1);
  }

  div {
    width: 90%;
    height: 45%;
    margin-left: .3125rem;
    margin-top: .5rem;
    display: flex;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  .divPrice {
    display: flex;
    flex-direction: row;
    margin-top: -.3125rem;
    margin-left: -.3125rem;
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
    font-size: 1.25rem;
  }

  .description {
    text-align: left;
    width: 100%;
<<<<<<< HEAD
    height: 1.75rem;
=======
    height: 18px;
>>>>>>> fab00137b2f7343c0482df845efd85fb92da4bc3
    overflow-y: hidden;
    font-weight: 400;
    font-size: .75rem;
  }

  .pBid {
    margin-bottom: -.875rem;
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
    margin: .3125rem 0rem;
    text-align: left;
  }

  @media (max-width: 53.125rem) {
    width: 11.25rem;
    height: 21.25rem;
  }
`;

export const Button = styled.button`
  margin-left: .625rem;
  margin-bottom: .375rem;
  font-size: .875rem;
  width: 90%;
  height: 2.7rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: .0625rem solid var(--color-grey-4);
  border-radius: .5rem;
`;
