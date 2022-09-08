import { useContext } from "react";
import { UserContext } from "../../../contexts/ApiContext";
import { StSect } from "./style";
import { UlBids } from "./userBidsUl";
import { UlFinishOff } from "./userFinishOffUl";
import { UlProducts } from "./userProductsUl";
export const UserSection = () => {
  const { userFilt, setUserFilt } = useContext(UserContext);

  return (
    <StSect>
      <div className="filter">
        <button onClick={() => setUserFilt("products")}>Meus produtos</button>
        <button onClick={() => setUserFilt("bids")}>Meus lances</button>
      </div>
      {userFilt === "products" ? (
        <UlProducts />
      ) : userFilt === "bids" ? (
        <UlBids />
      ) : (
        <UlFinishOff />
      )}
    </StSect>
  );
};
