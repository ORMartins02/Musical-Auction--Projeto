import { GiMagnifyingGlass } from "react-icons/gi";

export function Nav() {
  return (
    <nav>
      <form action="">
        <input type="text" placeholder="Pesquise aqui" />
        <button>
          <GiMagnifyingGlass />
        </button>
      </form>
    </nav>
  );
}
