import { useContext } from "react";
import { UserContext } from "../../../contexts/ApiContext";
import { StNav } from "./style";
export const UserNav = () => {
  const {
    setUserFilt,
    navigate,
    isModalEditOpen,
    setModalEdit,
    isModalAddOpen,
    setModalAdd,
    instrument,
    setInstrument,
    userId
  } = useContext(UserContext);

  return (
    <StNav>
      <button onClick={() => navigate(`/dashboard/:${userId}`)}>Home</button>
      <button onClick={() => setModalEdit(!isModalEditOpen)}>Editar Instrumento</button>
      <button>Cadastrar produto</button>
      <button className="filter" onClick={() => setUserFilt("products")}>
        Meus produtos
      </button>
      <button className="filter" onClick={() => setUserFilt("bids")}>
        Meus lances
      </button>
    </StNav>
  );
};
