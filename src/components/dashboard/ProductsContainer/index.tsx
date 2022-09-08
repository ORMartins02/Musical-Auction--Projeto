import { useContext } from "react";
import { UserContext } from "../../../contexts/ApiContext";
import { ModalBid } from "../../modals/ModalBid";
import { Product } from "./Product";
import { ListProducts, StyledProductsContainer } from "./style";

export const ProductsContainer = () => {
  const { loading, modalBid, instruments } = useContext(UserContext);

  return (
    <StyledProductsContainer>
      {loading ? (
        <p id="loading">Carregando os melhores instrumentos...</p>
      ) : (
        <ListProducts>
          {instruments.map((elem) => {
            return (
              <Product
                isAuction={elem.isAuction}
                key={elem.id}
                id={elem.id}
                title={elem.title}
                description={elem.description}
                category={elem.category}
                minPrice={elem.minPrice}
                img={elem.img}
                currentBid={elem.currentBid}
                bidUserId={elem.bidUserId}
                userId={elem.userId}
                minBid={elem.minBid}
              />
            );
          })}
        </ListProducts>
      )}
      {modalBid ? <ModalBid /> : <></>}
    </StyledProductsContainer>
  );
};
