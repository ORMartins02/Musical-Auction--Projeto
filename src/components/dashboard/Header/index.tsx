import { BiMap } from "react-icons/bi";
import { ImExit } from "react-icons/im";
import { Container } from "./style";
import { Nav } from "./Nav";
import { useContext } from "react";
import { UserContext } from "../../../contexts/ApiContext";

export const Header = () => {
  const { navigate, logoutBtn, login } = useContext(UserContext);
  

  return (
    <Container>
      <div className="infHeader">
        <div className="infUser">
          <button className="btnHeader" onClick={()=> navigate("/user")}>
            <figure className="figure">
              <img src={login?.userImg} alt="" />
            </figure>
          </button>
          <div>
            <h2 className="userName">{login?.name}</h2>
            <p className="userLoc">
              Curitiba - PR <BiMap className="svg" />
            </p>
          </div>
        </div>
        <button onClick={logoutBtn} className="logout">
          <ImExit />
        </button>
      </div>
      <Nav />
    </Container>
  );
};
