import { useContext } from "react";
import { UserContext } from "../../../../contexts/ApiContext";
import { ModalEditUser } from "../../../modals/ModalEditUser";
import { Li } from "../style";
import { StUlFinish } from "./style";
export const UlFinishOff = () => {
  const { userFinishOff, isModalEditUser } = useContext(UserContext);
  return (
    <>
      {userFinishOff?.length === 0 ? (
        <p id="loading">Você não possui arremates ainda!</p>
      ) : (
        <StUlFinish>
          {userFinishOff?.map((elem) => (
            <Li className="product" key={elem.id}>
              <figure>
                <img src={elem.img} alt={elem.title} />
              </figure>
              <div>
                <h3>{elem.title}</h3>
                <span>Valor do produto:</span>
                <p>R$: {elem.currentBid},00</p>
              </div>
            </Li>
          ))}
        </StUlFinish>
      )}

      {isModalEditUser ? <ModalEditUser /> : <></>}
    </>
  );
};
