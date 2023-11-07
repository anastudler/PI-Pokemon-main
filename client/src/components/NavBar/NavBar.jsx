import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import Filters from "../Filters/Filters";
const NavBar = () => {
  return (
    <div className={style.mainConatiner}>
      <h1>Pokemon</h1>
      <nav className={style.nav}>
        <Link className={style.button} to="/home">
          Home
        </Link>
        <Link className={style.button} to="/create">
          Crear
        </Link>
      </nav>
      <div> 

      </div>
    </div>
  );
};

export default NavBar;
