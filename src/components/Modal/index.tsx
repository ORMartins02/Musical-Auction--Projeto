import { ContainerTest } from "./style";
import { UserContext } from "../../contexts/ApiContext";
import { useContext } from "react";
import { ModalPostInstrument } from "../modals/ModalPostProduct";
import { IChildrenProps } from "../../contexts/ApiContext";
export const ModalTest = ({ children }: IChildrenProps) => {
  const { isModalAddOpen, setModalAdd } = useContext(UserContext);

  return (
    <ContainerTest>
      {children}
      {isModalAddOpen && <ModalPostInstrument setModalAdd={setModalAdd} />}
    </ContainerTest>
  );
};
