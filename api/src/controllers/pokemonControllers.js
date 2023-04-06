const axios = require("axios");
const { Pokemon, Type } = require("../db");

const createPokemon = async (
  name,
  image,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  typesId
) => {
  const [newPokemon, created] = await Pokemon.findOrCreate(
    {
      where: { name },
      defaults: { name, image, hp, attack, defense, speed, height, weight },
    },
    
  );

  if (!created)
    throw new Error("No se puede crear dos pokemons o más con el mismo nombre");

  await newPokemon.addTypes(typesId);
  return newPokemon;
};

// Trae la info del pokemon por id, sea de la api o de la BDD
const getPokemonById = async (id, source) => {
  let pokemon;
  if (source === "api") {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    pokemon = cleanInfo(response.data);
  } else {
    // implement logic to retrieve data from database
    pokemon = await Pokemon.findByPk(id);
  }
  return pokemon;
};

// Crea un array con estos datos vacios para poder usar con la api
const cleanInfo = (obj) => {
  return {
    id: obj.id,
    name: obj.name,
    image: obj.sprites.other.dream_world.front_default,
    hp: obj.stats[0].base_stat,
    attack: obj.stats[1].base_stat,
    defense: obj.stats[2].base_stat,
    speed: obj.stats[5].base_stat,
    height: obj.height,
    weight: obj.weight,
    types: obj.types.map((elem) => elem.type.name),
    created: false,
  };
};

// Trae los elementos con la cleanInfo de 5 paginas de la api de pokemon más lo creado en la base de datos.
const getAllPokemons = async () => {
  const pokemonsRawApi = [];

  let count = 0;

  let url = "https://pokeapi.co/api/v2/pokemon";

  while (count < 6) {
    const { data } = await axios.get(url);

    pokemonsRawApi.push(...data.results);

    url = data.next;

    count++;
  }

  const apiResultRaw = await Promise.all(
    pokemonsRawApi.map(async (elem) => {
      const response = await axios.get(elem.url);
      return response.data;
    })
  );

  const apiResult = apiResultRaw.map((elem) => cleanInfo(elem));

  const dbResultsRaw = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const dbResults = dbResultsRaw.map((elem) => ({
    ...elem.toJSON(),
    types: elem.types.map((e) => e.name),
  }));

  return [...dbResults, ...apiResult];
};

const getAllPokemonsByNameInDb = async (name) => {
  const dbResultsRaw = await Pokemon.findAll({
    where: { name },
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const dbResults = dbResultsRaw.map((elem) => ({
    ...elem.toJSON(),
    types: elem.types.map((e) => e.name),
  }));

  return dbResults;
};

const getAllPokemonsByNameInApi = async (name) => {
  const results = [];
  try {
    const apiResultsRaw = (
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    ).data;
    const apiResults = cleanInfo(apiResultsRaw);
    results.push(apiResults);
    return results;
  } catch (error) {
    return results;
  }
};
module.exports = {
  createPokemon,
  getPokemonById,
  getAllPokemons,
  getAllPokemonsByNameInDb,
  getAllPokemonsByNameInApi,
};