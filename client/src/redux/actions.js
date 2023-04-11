import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";

export const getAllPokemons = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/pokemons");
    const pokemons = apiData.data;
    dispatch({ type: GET_ALL_POKEMONS, payload: pokemons });
  };
};

export const getPokemonById = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const pokemon = apiData.data;
    dispatch({ type: GET_POKEMON_BY_ID, payload: pokemon });
  };
};

export const getPokemonByName = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/pokemons?name=${name}`
    );
    const pokemon = apiData.data;
    dispatch({ type: GET_POKEMON_BY_NAME, payload: pokemon });
  };
};

export const getAllTypes = () => {
  return async function (dispatch) {
      const axiosInfo = await axios.get("http://localhost:3001/types");
      const types = axiosInfo.data;
      dispatch({ type: GET_ALL_TYPES, payload: types });
  };
};

export const filterPokemonByType = (type) => {
  return { type:  FILTER_BY_TYPE , payload: type}
};
