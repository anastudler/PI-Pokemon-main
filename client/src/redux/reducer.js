import {
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_NAME,
  GET_ALL_TYPES,
  FILTER_BY_TYPE,
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

    case GET_ALL_TYPES:
      return { ...state, types: action.payload };

    case FILTER_BY_TYPE:
      return {
        ...state,
        pokemonsByType: [...state.pokemons].filter((elem) =>
          elem.types.includes(action.payload)
        ),
      };
    default:
      return { ...state };
  }
};

export default reducer;
