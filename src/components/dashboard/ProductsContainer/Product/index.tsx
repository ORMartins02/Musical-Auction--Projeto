import { useContext } from "react";
import { Instrument, UserContext } from "../../../../contexts/ApiContext";
import { Button, Li } from "./style";
import { v4 as uuid } from "uuid";

export const Product = ({
  id,
  title,
  description,
  minPrice,
  img,
}: Instrument) => {
  const { handleGetInstruments } = useContext(UserContext);

  return (
    <Li key={uuid()}>
      <figure>
        <img src={img} alt="Imagem do {name}" />
      </figure>
      <div>
        <h2>{title}</h2>
        <span>{description}</span>

        <p> R$ {minPrice.toFixed(2)}</p>
        <Button
          onClick={() =>
            console.log(`Abrir modal Dar Lance no item com id ${id}`)
          }
        >
          Dar Lance
        </Button>
      </div>
    </Li>
  );
};
