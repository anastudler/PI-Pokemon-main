import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar";


const NavBar = () => {
    return (
        <div className={style.mainConatiner}>
            <Link to="/home">HOME</Link>
            <Link to="/create">FORM</Link>
            <SearchBar/>
        </div>
    )
}

export default NavBar;