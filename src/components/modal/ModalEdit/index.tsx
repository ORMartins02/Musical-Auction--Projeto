import { Container, Form } from "./style";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";
import { schemaModal } from "../../../schema/modalEdit";
import { UserContext, Instrument } from "../../../contexts/ApiContext";

export const ModalEditInstrument = ({
  instrument,
  setModalEdit,
}: PropsModalEdit) => {
  const { register, handleSubmit } = useForm<Instrument>({
    resolver: yupResolver(schemaModal),
  });

  const { handleEditInstrument } = useContext(UserContext);
  return (
    <Container>
      <div>
        <div className="containerTitleButton">
          <h1 className="titleTecnology">Editar Tecnologia</h1>{" "}
          <button onClick={() => setModalEdit(false)} className="crossButton">
            <ImCross />
          </button>
        </div>

        <Form onSubmit={handleSubmit(handleEditInstrument)}>
          <label htmlFor="title">Nome</label>
          <input disabled placeholder={} id="title" type="text" />

          <label htmlFor="status">Selecionar status</label>
          <select {...register("status")} id="status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <div>
            <button className="buttonSave">Salvar</button>
          </div>
        </Form>
      </div>
    </Container>
  );
};
