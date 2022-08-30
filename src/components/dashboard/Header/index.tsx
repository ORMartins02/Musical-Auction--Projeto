import { BiMap } from "react-icons/bi";
import { ImExit } from "react-icons/im";

export function Header() {
  return (
    <header>
      <div>
        <figure>
          <img src="" alt="" />
        </figure>
        <div>
          <h2>Nome do usuário</h2>
          <p>
            Localização <BiMap />{" "}
          </p>
        </div>
      </div>
      <button>
        <ImExit />
      </button>
    </header>
  );
}

