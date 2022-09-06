import { StUlBids } from "./style";
import { IoTrashSharp } from "react-icons/io5";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/ApiContext";
import { AiFillEdit } from "react-icons/ai";

export const UlBids = () => {
  const { login } = useContext(UserContext);
  return (
    <StUlBids>
      {login.bids.map((elem) => (
        <li className="product" key={elem.id}>
            <img src={elem.img} alt={elem.title} />
          <div>
            <h3>{elem.title}</h3>
            <span>Valor do produto:</span>
            <p>R$: {elem.minPrice.toFixed(2)}</p>
            <div>
            <div className="btnUsProd">
              <button>Encerrar</button>
              <span>
              <button className="icon del">
                <IoTrashSharp />
              </button>
              <button className="icon edit">
                <AiFillEdit />
              </button>
              </span>
            </div>
            </div>
          </div>
        </li>
      ))}
    </StUlBids>
  );
};
