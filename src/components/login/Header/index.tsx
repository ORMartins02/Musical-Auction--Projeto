import { ContainerLoginHeader } from "./style";
import violin from "../../../img/violin.svg";

export const HeaderLogin = () => {
  return (
    <>
      <ContainerLoginHeader className="header-login">
        <figure>
          <img
            className="header-img1"
            src="https://i.imgur.com/YGTi4l7.png"
            alt=""
          />
        </figure>

        <img className="violinImg" src={violin} alt="" />
      </ContainerLoginHeader>
    </>
  );
};
