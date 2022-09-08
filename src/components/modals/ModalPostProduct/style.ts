import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(18, 18, 20, 0.5);

  position: fixed;

  div {
    min-width: 18.75rem;
    width: 20%;

    background: var(--color-grey-0);
    box-shadow: 0rem .25rem 2.5rem -.625rem rgba(0, 0, 0, 0.25);
    border-radius: .25rem;
    .containerTitleButton {
      width: 100%;

      display: flex;
      justify-content: space-between;
      padding: .75rem 1.25rem;
      align-items: center;
      height: 50px;
      background-color: var(--color-grey-0);
      .titleTecnology {
        font-style: normal;
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.5rem;

        color: var(--color-grey-4);
      }
      .crossButton {
        background-color: transparent;
        color: var(--color-black);
      }
    }
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
  }
  select {
    width: 90%;
    height: 2.8rem;
    min-height: 1.5rem;
    padding-left: 1rem;

    color: var(--color-black);
    background-color: var(--color-grey-0);
    border: 1.2182px solid #343b41;
    border-radius: 4px;

    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
  }
  span {
    color: red;
    width: 90%;
  }

  div {
    width: 90%;
    display: flex;
    justify-content: space-between;

    .buttonSave {
      width: 100%;
      height: 2.8rem;
      min-height: 1.5rem;

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
