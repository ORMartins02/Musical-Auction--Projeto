import { useContext } from "react";
import { UserContext } from "../../../contexts/ApiContext";
import { StNav } from "./style";
export const UserNav = () => {
  const {
    setUserFilt,
    navigate,
    setModalEditUser,
    isModalAddOpen,
    setModalAdd,
    loadBids,
    userId,
  } = useContext(UserContext);

  return (
    <StNav>
      <button onClick={() => navigate(`/dashboard/:${userId}`)}>Home</button>
      <button onClick={() => setModalEditUser(true)}>Editar Perfil</button>
      <button onClick={() => setModalAdd(!isModalAddOpen)}>
        Cadastrar produto
      </button>
      <button className="filter" onClick={() => setUserFilt("products")}>
        Meus produtos
      </button>
      <button
        className="filter"
        onClick={() => {
          loadBids();
          setUserFilt("bids");
        }}
      >
        Meus lances
      </button>
      <button
        onClick={() => {
          setUserFilt("finishOff");
        }}
      >
        Arremates
      </button>
    </StNav>
  );
};
