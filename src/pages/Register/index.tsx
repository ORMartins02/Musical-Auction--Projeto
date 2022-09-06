import { Form } from "../../components/register/Form";
import { Container } from "./style";
import { HeaderRegister } from "../../components/register/Header";

export const Register = () => {
  return (
    <Container>
      <HeaderRegister />
      <main>
        <Form />
      </main>
    </Container>
  );
};
