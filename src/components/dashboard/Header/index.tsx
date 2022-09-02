import { BiMap } from "react-icons/bi";
import { ImExit } from "react-icons/im";
import { Container } from "./style";
import userImg from "../../../img/usuario-teste.svg";
import { Nav } from "./Nav";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const logoutbtn = () => {
    localStorage.removeItem("@token");
    localStorage.removeItem("@userId");
    navigate("/");
  };

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
        <button onClick={logoutbtn} className="logout">
          <ImExit />
        </button>
      </div>
      <Nav />
    </Container>
  );
};
