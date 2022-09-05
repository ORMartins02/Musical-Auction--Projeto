import { useContext } from "react";
import { Header } from "../../components/dashboard/Header";
import { Main } from "../../components/dashboard/Main";
import { UserContext } from "../../contexts/ApiContext";

export const Dashboard = () => {
  const {checkToken} = useContext(UserContext)
  checkToken()
  return (
    <>
      <Header />
      <Main />
    </>
  );
};
