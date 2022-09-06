import Leonidas from "../../../../img/leonidas_widelg.jpg";
import { StUlProd } from "./style";

export const UlProducts = () =>{
    return(
        <StUlProd>
        <li className="product">
          <img src={Leonidas} alt="" />
          <div>
            <h3>Tuba 5/4 Select Sib Hs Musical Hstb2 C/ Capa -nova</h3>
            <span>Meu lance</span>
            <p>R$ 25.750,00</p>
            <button>Retirar lance</button>
          </div>
        </li>
        <li className="product">
          <img src={Leonidas} alt="" />
          <div>
            <h3>Tuba 5/4 Select Sib Hs Musical Hstb2 C/ Capa -nova</h3>
            <span>Meu lance</span>
            <p>R$ 25.750,00</p>
            <button>Retirar lance</button>
          </div>
        </li>
        <li className="product">
          <img src={Leonidas} alt="" />
          <div>
            <h3>Tuba 5/4 Select Sib Hs Musical Hstb2 C/ Capa -nova</h3>
            <span>Meu lance</span>
            <p>R$ 25.750,00</p>
            <button>Retirar lance</button>
          </div>
        </li>
        <li className="product">
          <img src={Leonidas} alt="" />
          <div>
            <h3>Tuba 5/4 Select Sib Hs Musical Hstb2 C/ Capa -nova</h3>
            <p>Meu lance</p>
            <p>R$ 25.750,00</p>
            <button>Retirar lance</button>
          </div>
        </li>
        
      </StUlProd>
    )
}