import musicalAmarel from "../../img/Amarel1.svg";
import { Form } from "../../components/register/Form";
import { Container, ContainerHeader } from "./style";
import { HeaderRegister } from "../../components/register/Header";

export const Register = () => {
  return (
    <Container>
      {/* <ContainerHeader>
        <img src={musicalAmarel} alt="" />
        <span>Aqui seu instrumento tem valor!</span>
        <p className="login-box-description">
          Nós da Musical Auction acreditamos ter a solução na medida exata para
          quem quer comprar ou vender incríveis instrumentos a preços justos
          para todos.
        </p>
      </ContainerHeader> */}
      <HeaderRegister />

      <main>
        <Form />
      </main>
    </Container>
  );
};
