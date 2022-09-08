import styled from "styled-components";
import Musical from "../../img/musical.svg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(248 249 250 / 91%);

  @media (min-width: 47.9375rem) {
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${Musical});
  background-repeat: no-repeat;
  height: 40vh;
  width: 100%;
  background-color: white;
  position: relative;
  text-align: center;
  img {
    width: 100vw;
    height: 40vh;
  }
  p {
    margin-top: -2.5rem;
    bottom: .625rem;
  }
  @media (min-width: 47.9375rem) {
    width: 30vw;
    height: 100vh;
    justify-content: space-between;
  }
  img {
    width: 32vw;
    height: 42vh;
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-width: 18.75rem;
  margin: auto;
  color: white;
  padding: 0rem 1.0152rem;
  gap: .6344rem;
  span {
    color: red;
    font-size: .625rem;
  }
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: .7614rem;
    line-height: 0rem;
    color: var(--color-grey-0);
  }
  input {
    padding: 0rem 1.0152rem;
    gap: .6344rem;
    margin-top: 1.25rem;
    width: 90%;
    height: 2.1875rem;
    color: var(--color-grey-3);
    background: white;

    border: .0761rem solid var(--color-grey-5);
    border-radius: 1rem;
  }
  select {
    padding: 0rem 1.0152rem;
    gap: .6344rem;
    color: var(--color-grey-3);
    /* width: 90%; */
    height: 2.1875rem;

    background: var(--color-grey-5);

    border: .0761rem solid var(--color-grey-5);
    border-radius: .25rem;
    width: 17.1875rem;
  }
  button {
    background-color: var(--color-primary);
    color: black;
    border: .0761rem solid var(--color-negative);
    border-radius: .25rem;
    height: 2.5rem;
    width: 15rem;
    margin-top: 1.25rem;
    border-radius: 1rem;
  }

  .p-login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .9375rem;
    color: black;
    font-weight: bold;
  }
  .span-register {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .875rem;
    color: black;
    font-weight: bold;
    margin-top: .625rem;
    margin-right: 1.625rem;
  }
  .div-register {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: yellow;
    font-weight: bold;
    margin-top: .625rem;
    margin-right: 1.625rem;
    text-shadow: .0625rem 0 0 var(--color-black), 0 -0.0625rem 0 var(--color-black),
      0 .0625rem 0 var(--color-black), -0.0625rem 0 0 var(--color-black);
  }
  @media (min-width: 47.9375rem) {
    justify-content: center;
    align-items: center;
    width: 29vw;
    height: 100vh;
    margin: 0;
    margin-left: 2.5rem;
    input {
      margin-top: 2.5rem;

      height: 2.1875rem;
      color: var(--color-grey-3);
      background: white;

      border: .0761rem solid var(--color-grey-5);
      border-radius: 1rem;
    }
    button {
      margin-top: 2.5rem;
      width: 11.25rem;
    }
    .p-login {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: .9375rem;
      margin-right: 1.75rem;
      color: black;
      font-size: 1.875rem;
      font-weight: bold;
      text-shadow: .0625rem 0 0 var(--color-primary), 0 -0.0625rem 0 var(--color-primary),
        0 .0625rem 0 var(--color-primary), -0.0625rem 0 0 var(--color-primary);
    }
  }
`;
