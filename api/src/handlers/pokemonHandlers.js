const {
  getAllPokemons,
  createPokemon,
  getPokemonById,
  getAllPokemonsByNameInDb,
  getAllPokemonsByNameInApi
} = require("../controllers/pokemonControllers");


  const getpokemonHandler = async (req, res) => {
    let { name } = req.query;

    try {
        if (name) {
            name = name.toLowerCase(); 
            const allPokemonsByNameInDb = await getAllPokemonsByNameInDb(name);
            const allPokemonsByNameInApi = await getAllPokemonsByNameInApi(name);
            const results = [...allPokemonsByNameInDb, ...allPokemonsByNameInApi];

            if (results.length === 0) throw new Error("Ningún pokemon coincide con la búsqueda");

            res.status(200).send(results);
        } else {
            const allPokemons = await getAllPokemons();
            res.status(200).send(allPokemons);
        };
    } catch (error) {
        res.status(404).json({error: error.message});
    };
};

 



// trae pokemon por Id

const getPokemonByIdHandler = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? "bdd" : "api";

  try {
    const pokemon = await getPokemonById(id, source);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Handler que Crea un nuevo pokemon en la Db
const createPokemonHandler = async (req, res) => {
  // res.send("ESTA RUTA CREA UN NUEVO POKEMON");
  let { name, image, hp, attack, defense, speed, height, weight, typesName } = req.body;

    try {
        if (!name || !image || !hp || !attack || !defense) throw new Error("Faltan datos obligatorios");
        name = name.toLowerCase();
        const newPokemon = await createPokemon(name, image, hp, attack, defense, speed, height, weight, typesName);
        res.status(200).json(newPokemon);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = {
  getpokemonHandler,
  getPokemonByIdHandler,
  createPokemonHandler,
};
