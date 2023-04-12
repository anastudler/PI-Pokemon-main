import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Filters from "../../components/Filters/Filters";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import style from "./Home.module.css";
// import Paginado from "../../components/Paginado/Paginado";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllPokemons());
  };

  return (
    <div className={style.container}>
      <div>
        <button onClick={(e) => handleClick(e)}>Ver Todos</button>
      </div>
      <div>
        <Filters />
      </div>
      <div>
        <CardsContainer />
      </div>
    </div>
  );
};

export default Home;
