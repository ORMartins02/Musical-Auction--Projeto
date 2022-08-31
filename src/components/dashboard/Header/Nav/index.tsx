import { GiSaxophone, GiPianoKeys } from "react-icons/gi";
import { StNav } from "./style";
import { FaGuitar, FaDrum } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
export const Nav = () => {
  return (
    <StNav>
      <form className="form">
        <input type="text" placeholder="Pesquise aqui" className="input" />
        <button className="search">
          <ImSearch />
        </button>
      </form>
      <div className="filter">
        <button>
          <FaGuitar />
        </button>
        <button>
          <GiSaxophone />
        </button>
        <button>
          <GiPianoKeys />
        </button>
        <button>
          <FaDrum />
        </button>
      </div>
    </StNav>
  );
};
