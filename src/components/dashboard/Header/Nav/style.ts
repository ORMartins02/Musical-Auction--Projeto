import styled from "styled-components";

export const StNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  .form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5rem;
    border: 2px solid var(--color-primary);

    background-color: var(--color-white);
    border-radius: 4px;
  }
  .input {
    padding-left: 15px;
    background-color: transparent;
    border-radius: 25px;
    outline: none;
    width: 90%;
  }
  .search {
    width: 10%;
    background-color: transparent;
    border-radius: 25px;
    color: var(--color-primary);
    padding-right: 10px;
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
      padding: 15px;
      font-size: 20px;
      color: white;
      box-shadow: var(--color-grey-4) 0.2em 0.2em 0.3em;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .form {
      width: 50%;
      align-self: flex-end;
    }
    .filter {
      justify-content: flex-start;
      gap: 20px;
      button {
        font-size: 25px;
      }
    }
  }
`;
