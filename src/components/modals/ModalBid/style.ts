import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(18, 18, 20, 0.8);
  position: fixed;
  top: 0;
  left: 0;

  .divModal {
    min-width: 18.75rem;
    width: 20%;
    background: var(--color-grey-0);
    box-shadow: 0rem .25rem 2.5rem -.625rem rgba(0, 0, 0, 0.25);
    border-radius: .75rem;
    .containerTitleButton {
      width: 100%;

      display: flex;
      justify-content: space-between;
      border-radius: .75rem .75rem 0 0rem;
      padding: .75rem 1.25rem;
      align-items: center;
      height: 3.125rem;
      background-color: var(--color-grey-0);
      .titleBid {
        font-style: normal;
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.5rem;

        color: var(--color-grey-4);
      }
      .crossButton {
        font-size: medium;
        background-color: transparent;
        color: var(--color-black);
      }
    }
  }

  figure {
    width: 95%;
    height: 15.9375rem;
    border: .3125rem solid rgba(215, 84, 19, 1);
    overflow: hidden;
    border-radius: .75rem;
    margin: .5rem;
  }

  img {
    width: 100%;
    height: 15.625rem;
    object-fit: scale-down;
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
  }

  .title {
    font-size: .75rem;
    text-align: left;
    margin: .875rem 0rem .25rem .9375rem;
    color: rgb(215, 84, 19);
  }

  .nameItemModal {
    font-size: 1.375rem;

    text-align: left;
    margin-left: .9375rem;
  }

  .descriptionItemModal {
    width: 90%;
    height: 2.1875rem;
    font-size: 1rem;
    text-align: left;
    margin-left: .9375rem;
  }

  .priceItemModal {
    font-size: 1rem;
    text-align: left;
    margin-left: .9375rem;
    font-weight: 700;
  }

  .bidItemModal {
    color: rgb(168, 0, 0);
  }

  .divBidModal {
    display: flex;
    flex-direction: row;
  }

  .bid {
    width: 45%;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 0rem;
  label {
    width: 90%;
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    color: black;
    text-align: left;
    margin-bottom: -.9375rem;
  }
  input {
    width: 90%;
    height: 2.8rem;
    min-height: 1.5rem;
    padding-left: 1rem;
    color: black;

    background-color: var(--color-grey-0);
    border: .0761rem solid #343b41;
    border-radius: .25rem;

    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
  }
  textarea {
    width: 90%;
    resize: none;
    height: 5rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    font-family: var(--font-inter);
  }

  .errors {
    color: red;
    width: 90%;
  }
  div {
    width: 90%;
    display: flex;
    justify-content: center;

    .buttonBid {
      width: 80%;
      height: 2.8rem;
      min-height: 1.5rem;
      margin-top: -.9375rem;
      font-size: medium;
      background: rgba(215, 84, 19, 1);
      color: var(--color-grey-0);
      border: .0761rem solid #59323f;
      border-radius: .25rem;
      &:hover {
        background-color: rgba(215, 84, 19, 0.7);
        transition: 0.8s;
      }
    }
  }
`;
