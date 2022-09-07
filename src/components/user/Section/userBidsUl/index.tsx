import { StUlBids } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/ApiContext";

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
                <button>Aumentar lance</button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </StUlBids>
  );
};
