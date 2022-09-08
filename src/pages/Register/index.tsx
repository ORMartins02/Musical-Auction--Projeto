import { Form } from "../../components/register/Form";
import { Container, DivCont } from "./style";
import { HeaderRegister } from "../../components/register/Header";

export const Register = () => {
  return (
    <DivCont>
      <Container>
        <HeaderRegister />
        <Form />
      </Container>
    </DivCont>
  );
};
