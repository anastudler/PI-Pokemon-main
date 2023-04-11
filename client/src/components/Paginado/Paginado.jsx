import React from "react";
import style from "./Paginado.module.css";

const Paginado = ({ pokemonsPerPage, allPokemons, paginado }) => {
  const pageNumebers = [];

  for (let i = 0; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumebers.push(i+1);
  }

  return (
    <nav>
      <ul className={style.paginado}>
        {pageNumebers &&
          pageNumebers.map((number) => (
            <button onClick={() => paginado(number)}>{number}</button>
          ))}
      </ul>
    </nav>
  );
};

export default Paginado;
