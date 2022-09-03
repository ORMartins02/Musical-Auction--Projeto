import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../../schema/login";
import { useContext } from "react";
import { UserLogin, UserContext } from "../../../contexts/ApiContext";
import { ContainerLogin } from "./style";
import { Link } from "react-router-dom";
export const MainLogin = () => {
  const { handleLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({
    resolver: yupResolver(schemaLogin),
  });
  return (
    <ContainerLogin className="login-container">
      <div className="p-login">
        <p>Faça seu login</p>
      </div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          type="text"
          id="email"
          placeholder="Digite o email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>

        <input
          type="password"
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
          <Link to={"/register"}>Cadastre-se</Link>
        </div>
      </div>
    </ContainerLogin>
  );
};
