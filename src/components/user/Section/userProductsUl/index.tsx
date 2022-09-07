import { useContext } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoTrashSharp } from "react-icons/io5";
import { UserContext } from "../../../../contexts/ApiContext";
import { StUlProd } from "./style";
export const UlProducts = () => {
  const { userInst, handleDeleteInstrument, setModalEdit, isModalEditOpen, setInstrumentId } =
    useContext(UserContext);
  return (
    <StUlProd>
      {userInst?.map((elem) => (
        <li className="product" key={elem.id}>
          <figure>
            <img src={elem.img} alt={elem.title} />
          </figure>
          <div>
            <h3>{elem.title}</h3>
            <span>Valor do produto:</span>
            <p>R$: {elem.minPrice.toFixed(2)}</p>
            <div className="btnUsProd">
              <button>Encerrar</button>
              <span>
                <button
                  className="icon del"
                  onClick={() => handleDeleteInstrument(elem.id)}
                >
                  <IoTrashSharp />
                </button>
                <button
                  className="icon edit"
                  onClick={() => {
                    setInstrumentId(elem.id)
                    setModalEdit(!isModalEditOpen)}
                  }
                    
                >
                  <AiFillEdit />
                </button>
              </span>
            </div>
          </div>
        </li>
      ))}
    </StUlProd>
  );
};
