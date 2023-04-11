import React from "react";
import style from "./Filters.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllTypes } from "../../redux/actions";

const Filters = () => {
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTypes());
  }, []);

  return (
    <div className={style.allFilters}>
      <div>
        <div className={style.filter}>
          <h5>Origen:</h5>
          <select name="origin" className={style.selectFilter}>
            <option>Seleccionar</option>
            <option value="api">Api</option>
            <option value="db">Base de Datos</option>
          </select>
        </div>

        <div className={style.filter}>
          <h5>Tipo:</h5>
          <select name="type" className={style.selectFilter}>
            <option>Seleccionar</option>
            {types.map((type, index) => {
              return (
                <option key={index} value={type.name}>
                  {type.name[0].toUpperCase() + type.name.substring(1)}
                </option>
              );
            })}
          </select>
        </div>

        <div className={style.filter}>
          <h5>Orden Alfabetico:</h5>
          <select name="alphabetic" className={style.selectFilter}>
            <option>Seleccionar</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>

        <div className={style.filter}>
          <h5>Ataque:</h5>
          <select name="attack" className={style.selectFilter}>
            <option>Seleccionar</option>
            <option value="min">Mínimo</option>
            <option value="max">Máximo</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
