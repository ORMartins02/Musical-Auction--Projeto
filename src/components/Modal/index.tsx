import { ContainerTest } from "./style";
import { UserContext } from "../../contexts/ApiContext";
import { useContext } from "react";
import { ModalEditInstrument } from "../modals/ModalEdit";
import { ModalPostInstrument } from "../modals/ModalPostProduct";
import { IChildrenProps } from "../../contexts/ApiContext";
export const ModalTest = ({ children }: IChildrenProps) => {
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
      {children}
      {isModalAddOpen && <ModalPostInstrument setModalAdd={setModalAdd} />}
      {isModalEditOpen && (
        <ModalEditInstrument
          instrument={instrument}
          setModalEdit={setModalEdit}
        />
      )}
    </ContainerTest>
  );
};
