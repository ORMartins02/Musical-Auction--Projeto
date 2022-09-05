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
    min-width: 300px;
    width: 20%;
    background: var(--color-grey-0);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    .containerTitleButton {
      width: 100%;

      display: flex;
      justify-content: space-between;
      border-radius: 12px 12px 0 0px;
      padding: 12px 20px;
      align-items: center;
      height: 50px;
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
        color: var(--color-grey-1);
      }
    }
  }

  figure {
    width: 95%;
    height: 255px;
    border: 5px solid rgba(215, 84, 19, 1);
    overflow: hidden;
    border-radius: 12px;
    margin: 8px;
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: scale-down;
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
  }

  .title {
    font-size: 12px;
    text-align: left;
    margin: 14px 0px 4px 15px;
    color: rgb(215, 84, 19);
  }

  .nameItemModal {
    font-size: 22px;

    text-align: left;
    margin-left: 15px;
  }

  .descriptionItemModal {
    width: 90%;
    height: 35px;
    font-size: 16px;
    text-align: left;
    margin-left: 15px;
  }

  .priceItemModal {
    font-size: 16px;
    text-align: left;
    margin-left: 15px;
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
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  label {
    width: 90%;
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    color: black;
    text-align: left;
    margin-bottom: -15px;
  }
  input {
    width: 90%;
    height: 2.8rem;
    min-height: 1.5rem;
    padding-left: 1rem;
    color: black;

    background-color: var(--color-grey-0);
    border: 1.2182px solid #343b41;
    border-radius: 4px;

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
      margin-top: -15px;
      font-size: medium;
      background: rgba(215, 84, 19, 1);
      color: var(--color-grey-0);
      border: 1.2182px solid #59323f;
      border-radius: 4px;
      &:hover {
        background-color: rgba(215, 84, 19, 0.7);
        transition: 0.8s;
      }
    }
  }
`;
