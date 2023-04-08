import {
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_NAME,
} from "./actions";

const initialState = {
  pokemons: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return { ...state, pokemons: action.payload };

    case GET_POKEMON_BY_ID:
      return { ...state, pokemon: action.payload };

    case GET_POKEMON_BY_NAME:
      return { ...state, pokemon: action.payload };
      
    default:
      return { ...state };
  }
};

export default reducer;
