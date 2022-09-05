import { useContext } from "react";
import { Instrument, UserContext } from "../../../../contexts/ApiContext";
import { Button, Li } from "./style";
// import { v4 as uuid } from "uuid";

export const Product = ({
  id,
  title,
  description,
  minPrice,
  currentBid,
  img,
}: Instrument) => {
  const { handleGetInstrument } = useContext(UserContext);

  return (
    <Li key={id}>
      <figure>
        <img src={img} alt={`Imagem do(a) ${title}`} />
      </figure>
      <div className="cardText">
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <div className="divPrice">
          <div className="divMinPrice">
            <span className="spanBid">Preço inicial</span>
            <p className="minPrice pBid">R$ {minPrice.toFixed(2)}</p>
          </div>
          <div className="divCurrentBid">
            <span className="spanCurrentBid spanBid">Lance Atual</span>
            <p className="currentBid pBid"> R$ {currentBid.toFixed(2)}</p>
          </div>
        </div>
        <Button onClick={() => handleGetInstrument(id)}>Dar Lance</Button>
      </div>
    </Li>
  );
};
