import styled from "styled-components";
export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  max-width: 300px;
  margin: auto;
  color: white;
  padding: 0rem 1.0152rem;
  gap: 0.6344rem;
  span {
    color: red;
    font-size: 0.625rem;
  }
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 0.7614rem;
    line-height: 0rem;
    color: var(--color-grey-0);
  }
  input {
    padding: 0rem 1.0152rem;
    gap: 0.6344rem;
    margin-top: 1.25rem;
    width: 90%;
    height: 2.1875rem;
    color: var(--color-grey-3);
    background: white;

    border: 0.0761rem solid var(--color-grey-5);
    border-radius: 0.5rem;
  }
  select {
    padding: 0rem 1.0152rem;
    gap: 0.6344rem;
    color: var(--color-grey-3);
    /* width: 90%; */
    height: 2.1875rem;

    background: var(--color-grey-5);

    border: 0.0761rem solid var(--color-grey-5);
    border-radius: 0.5rem;
    width: 17.1875rem;
  }
  button {
    background-color: var(--color-primary);
    color: white;
    border: 0.0761rem solid var(--color-negative);
    border-radius: 0.25rem;
    height: 2.5rem;
    width: 15rem;
    margin-top: 1.25rem;
    border-radius: 0.5rem;
  }

  .p-login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.9375rem;
    color: black;
    font-weight: bold;
  }
  .span-register {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    color: black;
    font-weight: bold;
    margin-top: 0.625rem;
    margin-right: 1.625rem;
  }
  .div-register {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      font-size: 1rem;
      color: var(--color-primary);
      font-weight: bold;
      margin-top: 0.625rem;
      margin-right: 1.625rem;
    }
  }
  @media (min-width: 47.9375rem) {
    justify-content: center;
    align-items: center;
    width: 50%;
    max-width: 1000px;
    background-color: var(--color-grey-2);

    margin: 0;
    input {
      margin-top: 2.5rem;

      height: 2.1875rem;
      color: var(--color-grey-3);
      background: white;

      border: 0.0761rem solid var(--color-grey-5);
      border-radius: 0.5rem;
    }
    button {
      margin-top: 2.5rem;
      width: 90%;
    }
    .p-login {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.9375rem;
      margin-right: 1.75rem;
      color: black;
      font-size: 1.875rem;
      font-weight: bold;
      text-shadow: 0.0625rem 0 0 var(--color-primary),
        0 -0.0625rem 0 var(--color-primary), 0 0.0625rem 0 var(--color-primary),
        -0.0625rem 0 0 var(--color-primary);
    }
  }
`;
