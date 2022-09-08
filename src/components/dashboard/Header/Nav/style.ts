import styled from "styled-components";

export const StNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: .625rem;
  width: 80%;
  .form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5rem;
    border: .125rem solid var(--color-primary);

    background-color: var(--color-white);
    border-radius: .25rem;
  }
  .input {
    padding-left: .9375rem;
    background-color: transparent;
    border-radius: 1.5625rem;
    outline: none;
    width: 90%;
  }
  .search {
    width: 10%;
    background-color: transparent;
    border-radius: 1.5625rem;
    color: var(--color-primary);
    padding-right: .625rem;
  }
  .filter {
    display: flex;
    justify-content: space-between;
    button {
      display: flex;
      align-items: center;
      background-color: var(--color-primary);
      border-radius: 50%;
      font-weight: 700;
      padding: .9375rem;
      font-size: 1.25rem;
      color: white;
      box-shadow: var(--color-grey-4) 0.2em 0.2em 0.3em;
    }
  }
  @media (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .form {
      width: 50%;
      align-self: flex-end;
    }
    .filter {
      justify-content: flex-start;
      gap: 1.25rem;
      button {
        font-size: 1.5625rem;
      }
    }
  }
`;
