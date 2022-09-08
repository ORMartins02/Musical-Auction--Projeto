import { useContext } from "react";
import { UserContext } from "../../../../contexts/ApiContext";
import { Li } from "../style";
import { StUlFinish } from "./style";
export const UlProducts = () => {
  const {userInst} = useContext(UserContext);
  return (
    <>
      <StUlFinish>
        {userInst?.map((elem) => (
          <Li className="product" key={elem.id}>
            <figure>
              <img src={elem.img} alt={elem.title} />
            </figure>
            <div>
              <h3>{elem.title}</h3>
              <span>Valor do produto:</span>
              <p>R$: {elem.minPrice},00</p>
            </div>
          </Li>
        ))}
      </StUlFinish>
    </>
  );
};
