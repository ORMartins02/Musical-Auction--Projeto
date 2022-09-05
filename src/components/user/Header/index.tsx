import { BiMap } from "react-icons/bi";
import { ImExit } from "react-icons/im";
import { Container } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../contexts/ApiContext";
export const UserHeader = () => {
 const {logoutBtn, login} = useContext(UserContext)
  return (
    <Container>
      <div className="infHeader">
        <div className="infUser">
          <figure className="figure">
            <img src={login?.userImg} alt="" />
          </figure>
          <div>
            <h2 className="userName">{login?.name}</h2>
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
