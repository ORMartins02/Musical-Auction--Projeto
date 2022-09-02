import { useContext } from "react";
import { UserContext } from "../../../contexts/ApiContext";
import { Product } from "./Product";
import { ListProducts, StyledProductsContainer } from "./style";

export const ProductsContainer = () => {
  const { loading, instruments } = useContext(UserContext);
  return (
    <StyledProductsContainer>
      {loading ? (
        <p id="loading">Carregando os melhores instrumentos...</p>
      ) : instruments.length === 0 ? (
        <>
          <h2>Produtos não encontrados</h2>
        </>
      ) : (
        <ListProducts>
          {instruments.map((elem) => {
            return (
              <Product
                id={elem.id}
                title={elem.title}
                description={elem.description}
                category={elem.category}
                minPrice={elem.minPrice}
                img={elem.img}
              />
            );
          })}
        </ListProducts>
      )}
    </StyledProductsContainer>
  );
};
