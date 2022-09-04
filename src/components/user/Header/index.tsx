import { BiMap } from "react-icons/bi";
import { ImExit } from "react-icons/im";
import { Container } from "./style";
import userImg from "../../../img/usuario-teste.svg";
import { useContext } from "react";
import { UserContext } from "../../../contexts/ApiContext";
export const UserHeader = () => {
 const {logoutBtn} = useContext(UserContext)
  return (
    <Container>
      <div className="infHeader">
        <div className="infUser">
          <figure className="figure">
            <img src={userImg} alt="" />
          </figure>
          <div>
            <h2 className="userName">Kenzinho Junior</h2>
            <p className="userLoc">
              Curitiba - PR <BiMap className="svg" />
            </p>
          </div>
        </div>
        <button className="logout" onClick={logoutBtn}>
          <ImExit />
        </button>
      </div>
    </Container>
  );
};
