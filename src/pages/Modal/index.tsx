import { ContainerTest } from "./style";
import { UserContext } from "../../contexts/ApiContext";
import { useContext, useEffect } from "react";
import { ModalEditInstrument } from "../../components/modal/ModalEdit";
export const ModalTest = () => {
  const { isModalEditOpen, setModalEdit, instrument, setInstrument } =
    useContext(UserContext);

  return (
    <ContainerTest>
      {isModalEditOpen && (
        <ModalEditInstrument
          instrument={instrument}
          setModalEdit={setModalEdit}
        />
      )}
      <h1>teste</h1>
      <button onClick={() => setModalEdit(!isModalEditOpen)}>
        abrir modal
      </button>
    </ContainerTest>
  );
};
