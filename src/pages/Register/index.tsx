import musicalAmarel from "../../img/Amarel1.svg";
import {Form} from "../../components/register/Form";
import {Container, ContainerHeader} from "./style";

export const Register = () => {
  return (
    <Container>
      <ContainerHeader>
        <img src={musicalAmarel} alt="" />
        <span>Aqui seu instrumento tem valor!</span>
        <p>
          Nós da Musical Auction acreditamos ter a solução na medida exata para
          quem quer comprar ou vender incríveis instrumentos a preços justos
          para todos.
        </p>
      </ContainerHeader>

      <main>
        <Form />

        <p>Já tem uma conta?</p>

        <a>Entre</a>
      </main>
    </Container>
  );
};
