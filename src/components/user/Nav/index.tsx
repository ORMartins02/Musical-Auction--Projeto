import { useContext } from "react";
import { UserContext } from "../../../contexts/ApiContext";
import { StNav } from "./style";
export const UserNav = () => {
  const { setUserFilt } = useContext(UserContext);

  return (
    <StNav>
      <button>Home</button>
      <button>Editar Perfil</button>
      <button>Cadastrar produto</button>
      <button className="filter" onClick={() => setUserFilt("products")}>
        Meus lances
      </button>
      <button className="filter" onClick={() => setUserFilt("bids")}>
        Meus produtos
      </button>
    </StNav>
  );
};