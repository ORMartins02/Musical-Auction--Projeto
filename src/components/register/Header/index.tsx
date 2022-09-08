import { ContainerLoginHeader } from "./style";
import imgVi from "../../../img/violin.svg"
export const HeaderRegister = () => {
  return (
    <ContainerLoginHeader className="header-login">
      <div>
        <img className="header-img1" src="https://i.imgur.com/YGTi4l7.png" alt="" />
      </div>
     <img className="header-img2" src={imgVi} alt="" />
    </ContainerLoginHeader>
  );
};
