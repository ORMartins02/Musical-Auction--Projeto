import { Container, Form } from "./style";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";
import { schemaModalBid } from "../../../schema/schemaModalBid";
import { UserContext, Instrument } from "../../../contexts/ApiContext";

export const ModalBid = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Instrument>({
    resolver: yupResolver(schemaModalBid),
  });

  const { instrument, handleBidInstrument, setModalBid } =
    useContext(UserContext);
  return (
    <Container>
      <div className="divModal">
        <div className="containerTitleButton">
          <h1 className="titleBid">Dar Lance</h1>
          <button onClick={() => setModalBid(false)} className="crossButton">
            <ImCross />
          </button>
        </div>
        <figure>
          <img src={instrument.img} alt={`Imagem do(a) ${instrument.title}`} />
        </figure>
        <p className="title">Nome do instrumento</p>
        <p className="nameItemModal">{instrument.title}</p>
        <p className="title">Descrição</p>
        <p className="descriptionItemModal">{instrument.description}</p>
        <p className="title">Valor inicial</p>
        <p className="priceItemModal">{`R$ ${instrument.minPrice.toFixed(
          2
        )}`}</p>
        <div className="divBidModal">
          <div className="bid">
            <p className="title">Lance mínimo</p>
            <p className="priceItemModal">{`R$ ${instrument.minBid.toFixed(
              2
            )}`}</p>
          </div>
          <div className="bid">
            <p className="title">Lance atual</p>
            <p className="bidItemModal priceItemModal">{`R$ ${instrument.currentBid.toFixed(
              2
            )}`}</p>
          </div>
        </div>
        <Form onSubmit={handleSubmit(handleBidInstrument)}>
          <label htmlFor="currentBid">Meu lance</label>
          <input
            placeholder={`R$ ${
              instrument.currentBid > 0
                ? instrument.currentBid + instrument.minBid
                : instrument.minPrice + instrument.minBid
            },00`}
            id="currentBid"
            type="number"
            {...register("currentBid")}
          />
          <span className="errors">{errors.minPrice?.message}</span>

          <div>
            <button className="buttonBid">Dar meu lance</button>
          </div>
        </Form>
      </div>
    </Container>
  );
};
