import { FaGuitar, FaDrum, FaBoxOpen } from "react-icons/fa";
import { GiSaxophone, GiPianoKeys } from "react-icons/gi";
import { Instrument, UserContext } from "../../../../contexts/ApiContext";
import { useContext, useState } from "react";
import { ImSearch } from "react-icons/im";
import { StNav } from "./style";
import { api } from "../../../../services/api";

interface SearchInstruments {
  preventDefault: () => void;
}

export const Nav = () => {
  const { setInstruments } = useContext(UserContext);
  const [valueInput, setValueInput] = useState("");

  const loadInstruments = async (family: string) => {
    await api
      .get("/userInstrument")
      .then((response) => {
        const newData = response.data.filter((elem: Instrument) => {
          if (family === "All") {
            return elem;
          } else {
            return elem.category === family;
          }
        });
        setInstruments(newData);
      })
      .catch((error) => console.log(error))
      .finally();
  };

  const searchInstruments = (event: SearchInstruments) => {
    event.preventDefault();

    api
      .get("/userInstrument")
      .then((response) => {
        console.log(valueInput);
        if (valueInput === "") {
          setInstruments(response.data);
        } else {
          const newList = response.data.filter((elem: Instrument) =>
            elem.title.includes(valueInput)
          );
          setInstruments(newList);
        }
      })
      .catch((error) => console.log(error))
      .finally();
  };

  return (
    <StNav>
      <form onChange={searchInstruments} className="form">
        <input
          value={valueInput}
          type="text"
          placeholder="Pesquise aqui"
          className="input"
          onChange={(event) => setValueInput(event.currentTarget.value)}
        />
        <button type="submit" className="search">
          <ImSearch />
        </button>
      </form>
      <div className="filter">
        <button>
          <FaBoxOpen onClick={() => loadInstruments("All")} />
        </button>
        <button>
          <FaGuitar onClick={() => loadInstruments("Corda")} />
        </button>
        <button>
          <GiSaxophone onClick={() => loadInstruments("Sopro")} />
        </button>
        <button>
          <GiPianoKeys onClick={() => loadInstruments("Teclas")} />
        </button>
        <button>
          <FaDrum onClick={() => loadInstruments("Percussão")} />
        </button>
      </div>
    </StNav>
  );
};
