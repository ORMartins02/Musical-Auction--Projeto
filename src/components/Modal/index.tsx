import { ContainerTest } from "./style";
import { UserContext } from "../../contexts/ApiContext";
import { useContext } from "react";
import { ModalPostInstrument } from "../modals/ModalPostProduct";
import { IChildrenProps } from "../../contexts/ApiContext";
import { ModalEditInstrument } from "../modals/ModalEdit";
export const ModalTest = ({ children }: IChildrenProps) => {
  const {
    isModalAddOpen,
    setModalAdd,
    isModalEditOpen,
    setModalEdit,
    instrument,
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
