import styled from "styled-components";
export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  color: white;
  padding: 0rem 1.0152rem;
  gap: .6344rem;
  padding-bottom: 1.25rem;

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
    margin-top: .75rem;
    width: 90%;
    height: 2.1875rem;
    color: var(--color-grey-3);
    background: white;

    border: .0761rem solid var(--color-grey-5);
    border-radius: .5rem;
  }
  select {
    padding: 0rem 1.0152rem;
    gap: .6344rem;
    color: var(--color-grey-3);
    height: 2.1875rem;

    background: var(--color-grey-5);

    border: .0761rem solid var(--color-grey-5);
    border-radius: .5rem;
    width: 17.1875rem;
  }
  button {
    background-color: var(--color-primary);
    color: white;
    border: .0761rem solid var(--color-negative);
    border-radius: .25rem;
    height: 2.5rem;
    width: 15rem;
    margin-top: 1.25rem;
    border-radius: .5rem;
    font-weight: 600;
    &:hover{
      transition: 150ms;
      font-size: 20px;
    }
  }
  select {
    padding: 0rem 1.0152rem;
    gap: .6344rem;
    margin-top: 1.25rem;
    width: 90%;
    height: 2.1875rem;
    color: var(--color-grey-3);
    background: white;
    border: .0761rem solid var(--color-grey-5);
    border-radius: .5rem;
  }

  .p-login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .9375rem;
    color: black;
    font-weight: bold;
    width: 100%;
    text-align: center;
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
    height: 1.25rem;
    a {
      font-size: 1rem;
      color: var(--color-primary);
      font-weight: bold;
      margin-top: 0.625rem;
      margin-right: 1.625rem;
      &:hover{
        transition: 150ms;
        font-size: 20px;
      }
    }
  }
  @media (min-width: 47.9375rem) {
    background-color: var(--color-grey-2);
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 90%;
    margin: 0;
    input {
      margin-top: .625rem;

      height: 2.1875rem;
      color: var(--color-grey-3);
      background: white;

      border: .0761rem solid var(--color-grey-5);
      border-radius: .5rem;
    }
    button {
      margin-top: .9375rem;
      width: 90%;
    }
    select {
      margin-top: .625rem;
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
      text-shadow: .0625rem 0 0 var(--color-primary), 0 -.0625rem 0 var(--color-primary),
        0 .0625rem 0 var(--color-primary), -.0625rem 0 0 var(--color-primary);
    }
  }
`;
