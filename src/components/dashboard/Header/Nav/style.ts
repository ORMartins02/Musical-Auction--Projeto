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
    border: 2px solid rgba(215, 84, 19, 1);

    background-color: rgba(255, 255, 255, 1);
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
    color: rgba(215, 84, 19, 1);
    padding-right: 10px;
  }
  .filter {
    display: flex;
    justify-content: space-between;
    button {
      display: flex;
      align-items: center;
      background-color: rgba(215, 84, 19, 1);
      border-radius: 50%;
      font-weight: 700;
      padding: 15px;
      font-size: 20px;
      color: white;
      box-shadow: rgba(61, 61, 61, 1) 0.2em 0.2em 0.3em;
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
