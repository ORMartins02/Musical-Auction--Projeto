import { useContext } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoTrashSharp } from "react-icons/io5";
import { UserContext } from "../../../../contexts/ApiContext";
import { ModalEditUser } from "../../../modals/ModalEditUser";
import { Li } from "../style";
import { StUlProd } from "./style";
export const UlProducts = () => {
  const { userInst, handleDeleteInstrument, isModalEditUser } =
    useContext(UserContext);
  return (
    <>
      {userInst?.length === 0 ? (
        <p id="loading">Você não tem leilões cadastrados ainda!</p>
      ) : (
        <StUlProd>
          {userInst?.map((elem) => (
            <Li className="product" key={elem.id}>
              <figure>
                <img src={elem.img} alt={elem.title} />
              </figure>
              <div>
                <h3>{elem.title}</h3>
                <span>Valor do produto:</span>
                <p>R$: {elem.minPrice},00</p>
                <div className="btnUsProd">
                  <span id="spanButtons">
                    <button className="icon edit">
                      <AiFillEdit />
                    </button>
                    <button
                      className="icon del"
                      onClick={() => handleDeleteInstrument(elem.id)}
                    >
                      <IoTrashSharp />
                    </button>
                  </span>
                </div>
              </div>
            </Li>
          ))}
        </StUlProd>
      )}
      {isModalEditUser ? <ModalEditUser /> : <></>}
    </>
  );
};
