import { ContainerTest } from "./style";
import { UserContext } from "../../contexts/ApiContext";
import { useContext, useEffect } from "react";
import { ModalEditInstrument } from "../modals/ModalEdit";
import { ModalPostInstrument } from "../modals/ModalPostProduct";
export const ModalTest = () => {
  const {
    isModalEditOpen,
    setModalEdit,
    isModalAddOpen,
    setModalAdd,
    instrument,
    setInstrument,
  } = useContext(UserContext);

  return (
    <ContainerTest>
      {isModalAddOpen && <ModalPostInstrument setModalAdd={setModalAdd} />}
      {isModalEditOpen && (
        <ModalEditInstrument
          instrument={instrument}
          setModalEdit={setModalEdit}
        />
      )}

      <h1>teste</h1>
      <button onClick={() => setModalEdit(!isModalEditOpen)}>
        abrir modal edit
      </button>
      <button onClick={() => setModalAdd(!isModalAddOpen)}>
        {" "}
        abrir modal post produto
      </button>
    </ContainerTest>
  );
};
