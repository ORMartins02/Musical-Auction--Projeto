import { ModalTest } from "../Modal";
import { UserHeader } from "./Header";
import { UserMain } from "./Main";

export const UserPage = () => {
  return (
    <ModalTest>
      <UserHeader />
      <UserMain />
    </ModalTest>
  );
};
