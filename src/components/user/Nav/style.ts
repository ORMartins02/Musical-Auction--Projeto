import styled from "styled-components";

export const StNav = styled.nav`
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  margin-top: -1.375rem;
  width: 100%;
  background-color: rgba(215, 84, 19, 1);
  padding: 2rem 1.5rem;
  .filter {
    display: none;
  }

  button {
    font-size: .9375rem;
    background-color: transparent;
    font-weight: 700;
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 48rem) {
    margin-top: 0;
    width: 15%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .filter {
      display: inherit;
    }
    button {
      color: rgba(255, 255, 255, 1);
    }
  }
`;
