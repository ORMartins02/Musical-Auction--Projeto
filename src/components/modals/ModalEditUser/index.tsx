import { Container, Form } from "./style";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";
import { UserContext, User } from "../../../contexts/ApiContext";
import { editUserSchema } from "../../../schema/editUserSchema";

export const ModalEditUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(editUserSchema),
  });

  const { handleEditUser, setModalEditUser } = useContext(UserContext);
  return (
    <Container>
      <div>
        <div className="containerTitleButton">
          <h1 className="titleTecnology">Editar Perfil</h1>{" "}
          <button
            onClick={() => setModalEditUser(false)}
            className="crossButton"
          >
            <ImCross />
          </button>
        </div>

        <Form onSubmit={handleSubmit(handleEditUser)}>
          <label htmlFor="userImg">Insira o link do seu novo avatar</label>
          <input
            type="text"
            placeholder="Foto de perfil(Link)"
            {...register("userImg")}
          />
          <label htmlFor="name">Insira seu novo nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
          <label htmlFor="userImg">Insira sua nova senha</label>
          <input
            type="password"
            placeholder="Digite uma senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
          <label htmlFor="userImg">Repita sua nova senha</label>
          <input type="password" placeholder="Repita sua senha" />
          <span>{errors.password?.message}</span>

          <div>
            <button className="buttonSave">Salvar</button>
          </div>
        </Form>
      </div>
    </Container>
  );
};
