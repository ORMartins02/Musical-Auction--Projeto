import { useContext } from "react";
import { Instrument, UserContext } from "../../../../contexts/ApiContext";
import { Button, Li } from "./style";

export const Product = ({
  id,
  title,
  description,
  minPrice,
  img,
  currentBid,
  minBid,
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
        <span className="spanPrice">Preço inicial</span>
        <p className="minPrice pPrice">R$ {minPrice},00</p>
        <div className="divPrice">
          <div className="divMinPrice">
            <span className="spanBid">Lance minimo</span>
            <p className="minPrice pBid">R$ {minBid},00</p>
          </div>
          <div className="divCurrentBid">
            <span className="spanCurrentBid spanBid">Lance Atual</span>
            <p className="currentBid pBid"> R$ {currentBid},00</p>
          </div>
        </div>
        <Button onClick={() => handleGetInstrument(id)}>Dar Lance</Button>
      </div>
    </Li>
  );
};
