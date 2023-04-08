import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions";

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
    <div>
      <div>
        <h1>Esto es la Home</h1>
        <button onClick={(e) => handleClick(e)}>Ver Todos</button>
      </div>
      <div>
        <div>
          <h5>Origen:</h5>
          <select name="origin">
            <option>Seleccionar</option>
            <option value="api">Api</option>
            <option value="db">Base de Datos</option>
          </select>
        </div>

        <div>
          <h5>Tipo:</h5>
          <select name="type">
            <option>Seleccionar</option>
          </select>
        </div>

        <div>
          <h5>Orden Alfabetico:</h5>
          <select name="alphabetic">
            <option>Seleccionar</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        
        <div>
          <h5>Ataque:</h5>
          <select name="attack">
            <option>Seleccionar</option>
            <option value="min">Mínimo</option>
            <option value="max">Máximo</option>
          </select>
        </div>
      </div>
      <div>
        <CardsContainer />
      </div>
    </div>
  );
};

export default Home;
