import { ContainerLoginHeader } from "./style";
import musicalAmarel from "../../../img/Amarel1.svg";

export const HeaderLogin = () => {
  return (
    <ContainerLoginHeader className="header-login">
      <figure>
        <img
          className="header-img1"
          src="https://i.imgur.com/YGTi4l7.png"
          alt=""
        />
        <p>De músico para músico</p>
      </figure>
      <div id="divText">
        <p className="login-box-description">
          Nós da Musical Auction acreditamos ter a solução na medida exata para
          quem quer comprar ou vender incríveis instrumentos a preços justos
          para todos.
        </p>
      </div>
    </ContainerLoginHeader>
  );
};
