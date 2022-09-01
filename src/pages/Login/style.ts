import styled from "styled-components";
import musicalImg from "../../img/Component6.svg";

export const ContainerLoginMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(248 249 250 / 91%);
  .asdasd {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 767px) {
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    .asdasd {
      display: flex;
      flex-direction: row;
      border-width: 2px;
      border-style: solid;
      border-color: black;
    }
  }
`;

export const ContainerLoginHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${musicalImg});
  background-repeat: no-repeat;
  height: 40vh;
  width: 100%;
  background-color: white;
  position: relative;
  text-align: center;
  .header-img1 {
    width: 100vw;
    height: 40vh;
  }
  p {
    margin-top: -40px;
    bottom: 10px;
  }
  .teste {
    display: none;
  }
  @media (min-width: 767px) {
    width: 30vw;
    height: 100vh;
    justify-content: space-between;
    .teste {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 75%;
      height: 25%;
      display: inherit;
      margin-bottom: 160px;
      border-width: 2px;
      border-style: solid;
      border-color: yellow;
      text-align: center;
      font-size: 14px;
      line-height: 18px;
      border-radius: 12px;
      box-shadow: 3px 4px 5px 0px rgba(117, 109, 109, 0.75);
    }
    .header-img1 {
      width: 32vw;
      height: 42vh;
    }
  }
`;

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
    font-size: 16px;
    color: yellow;
    font-weight: bold;
    margin-top: 10px;
    margin-right: 26px;
    text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
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
