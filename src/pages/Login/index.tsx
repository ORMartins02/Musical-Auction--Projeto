import { ContainerLoginMain } from "../Login/style";
import { HeaderLogin } from "../../components/login/Header";
import { MainLogin } from "../../components/login/Main";
const Login = () => {
  return (
    <ContainerLoginMain>
      <div className="container-header-main">
        <HeaderLogin />
        <MainLogin />
      </div>
    </ContainerLoginMain>
  );
};

export default Login;
