import styled from "styled-components";
export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  max-width: 300px;
  margin: auto;
  color: white;
  padding: 0px 16.2426px;
  gap: 10.15px;
  span {
    color: red;
    font-size: 10px;
  }
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #f8f9fa;
  }
  input {
    padding: 0px 16.2426px;
    gap: 10.15px;
    margin-top: 20px;
    width: 90%;
    height: 35px;
    color: #868e96;
    background: white;

    border: 1.2182px solid #343b41;
    border-radius: 16px;
  }
  select {
    padding: 0px 16.2426px;
    gap: 10.15px;
    color: #868e96;
    /* width: 90%; */
    height: 35px;

    background: #343b41;

    border: 1.2182px solid #343b41;
    border-radius: 4px;
    width: 275px;
  }
  button {
    background-color: #fffe57;
    color: black;
    border: 1.2182px solid #59323f;
    border-radius: 4px;
    height: 40px;
    width: 240px;
    margin-top: 20px;
    border-radius: 16px;
  }

  .p-login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    color: black;
    font-weight: bold;
  }
  .span-register {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: black;
    font-weight: bold;
    margin-top: 10px;
    margin-right: 26px;
  }
  .div-register {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      font-size: 16px;
      color: yellow;
      font-weight: bold;
      margin-top: 10px;
      margin-right: 26px;
      text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
    }
  }
  @media (min-width: 767px) {
    justify-content: center;
    align-items: center;
    width: 29vw;
    height: 100vh;
    margin: 0;
    margin-left: 40px;
    input {
      margin-top: 40px;

      height: 35px;
      color: #868e96;
      background: white;

      border: 1.2182px solid #343b41;
      border-radius: 16px;
    }
    button {
      margin-top: 40px;
      width: 90%;
    }
    .p-login {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
      margin-right: 28px;
      color: black;
      font-size: 30px;
      font-weight: bold;
      text-shadow: 1px 0 0 #fffe57, 0 -1px 0 #fffe57, 0 1px 0 #fffe57,
        -1px 0 0 #fffe57;
    }
  }
`;
