import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../schema/login";
import { useContext } from "react";
import { UserLogin, UserContext } from "../../contexts/ApiContext";
import {
  ContainerLogin,
  ContainerLoginMain,
  ContainerLoginHeader,
} from "./style";
const Login = () => {
  const { handleLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({
    resolver: yupResolver(schemaLogin),
  });

  return (
    <ContainerLoginMain className="container-main">
      <div className="asd">
        <ContainerLoginHeader className="header-login">
          <div>
            <img className="header-img1" src="./Amarel1.svg" alt="" />
            <p>De músico para músico</p>
          </div>
          <p className="teste">
            Nós da Musical Auction acreditamos ter a solução na medida exata
            para quem quer comprar ou vender incríveis instrumentos a preços
            justos para todos.
          </p>
        </ContainerLoginHeader>
        <ContainerLogin className="login-container">
          <div className="p-login">
            <p>Faça seu login</p>
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="text"
              id="email"
              placeholder="Digite o email"
              {...register("email")}
            />
            <span>{errors.email?.message}</span>

            {/* <label htmlFor="password">Senha</label> */}
            <input
              type="text"
              id="password"
              placeholder="Digite a senha"
              {...register("password")}
            />
            <span>{errors.password?.message}</span>

            <button className="login-enter" type="submit">
              Entrar
            </button>
          </form>
          <div className="span-register">
            <p>Você ainda não tem uma conta?</p>
          </div>
          <div>
            <div className="div-register">
              <p>Cadastre-se</p>
            </div>
          </div>
        </ContainerLogin>
      </div>
    </ContainerLoginMain>
  );
};

export default Login;
