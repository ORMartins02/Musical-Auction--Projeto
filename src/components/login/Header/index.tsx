import { ContainerLoginHeader } from "../../login/style";
import musicalAmarel from "../../../img/Amarel1.svg";

export const HeaderLogin = () => {
  return (
    <ContainerLoginHeader className="header-login">
      <div>
        <img className="header-img1" src={musicalAmarel} alt="" />
        <p>De músico para músico</p>
      </div>
      <p className="login-box-description">
        Nós da Musical Auction acreditamos ter a solução na medida exata para
        quem quer comprar ou vender incríveis instrumentos a preços justos para
        todos.
      </p>
    </ContainerLoginHeader>
  );
};
