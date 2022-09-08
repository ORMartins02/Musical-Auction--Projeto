import { StUlBids } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/ApiContext";
import { Button, Li } from "../style";
import { ModalBid } from "../../../modals/ModalBid";
import { ModalEditUser } from "../../../modals/ModalEditUser";

export const UlBids = () => {
  const { userBids, handleGetInstrument, modalBid, isModalEditUser } =
    useContext(UserContext);
  return (
    <>
      {userBids.length === 0 ? (
        <p id="loading">Você não fez lances ainda!</p>
      ) : (
        <StUlBids>
          {userBids.map(
            (elem) =>
              elem.isAuction && (
                <Li key={elem.id}>
                  <figure>
                    <img src={elem.img} alt={`Imagem do(a) ${elem.title}`} />
                  </figure>
                  <div className="cardText">
                    <h2>{elem.title}</h2>
                    <p className="description">{elem.description}</p>
                    <div className="divCurrentBid">
                      <span className="spanCurrentBid spanBid">Seu Lance</span>
                      <p className="currentBid pBid">R$ {elem.currentBid},00</p>
                    </div>
                    <Button onClick={() => handleGetInstrument(elem.id)}>
                      Aumentar Lance
                    </Button>
                  </div>
                </Li>
              )
          )}
        </StUlBids>
      )}
      {modalBid ? <ModalBid /> : <></>}
      {isModalEditUser ? <ModalEditUser /> : <></>}
    </>
  );
};
