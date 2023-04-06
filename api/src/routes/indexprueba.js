const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
const { Pokemon, Type } = require("../db");
// const typeRouter = require("./typeRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.use('/types', typeRouter);

// Va a pokemonControllers

const getApiInfo = async () => {
  const apiUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
  const apiInfo = await Promise.all(
    apiUrl.data.results.map(async (pokemon) => {
      const pokemonInfo = await axios.get(pokemon.url);
      return {
        id: pokemonInfo.data.id,
        name: pokemonInfo.data.name,
        image: pokemonInfo.data.sprites.other.dream_world.front_default,
        hp: pokemonInfo.data.stats[0].base_stat,
        attack: pokemonInfo.data.stats[1].base_stat,
        defense: pokemonInfo.data.stats[2].base_stat,
        speed: pokemonInfo.data.stats[5].base_stat,
        height: pokemonInfo.data.height,
        weight: pokemonInfo.data.weight,
      };
    })
  );
  return apiInfo;
};

const getDbInfo = async () => {
  return await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllPokemons = async () => {
  let apiInfo = await getApiInfo();
  let dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);

  return infoTotal;
};

// Va a pokemonRouter
// Route de pokemon?name=""
router.get("/pokemons", async (req, res) => {
  const name = req.query.name;
  let pokemonsTotal = await getAllPokemons();
  if (name) {
    let pokemonName = await pokemonsTotal.filter((elem) =>
      elem.name.toLowerCase().includes(name.toLowerCase())
    );
    pokemonName.length
      ? res.status(200).send(pokemonName)
      : res.status(404).send("No se encuentra el pokemon");
  } else {
    res.status(200).send(pokemonsTotal);
  }
});


// Va a typeRouter
// Ruta get/types que me almacena name types en la db con id por orden de llegada

router.get("/types", async (req, res) => {
  const typeApi = await axios.get("https://pokeapi.co/api/v2/type");
  const types = typeApi.data.results.map((elem) => elem.name); // map through the "results" array to extract the "name" property
  types.forEach(async (elem) => {
    // use forEach loop to iterate through the types array and add each type to the database
    await Type.findOrCreate({
      // use await to ensure the database operation is completed before proceeding to the next type
      where: { name: elem },
    });
  });
  const allTypes = await Type.findAll();
  res.send(allTypes);
});

// Ruta get/types que me almacena name type y id de la api...

// router.get('/types', async (req, res) => {
//   const typeApi = await axios.get('https://pokeapi.co/api/v2/type');
//   const types = typeApi.data.results;

//   types.forEach(async (type) => {
//     const { name, url } = type;
//     const typeId = url.split('/')[6];
//     await Type.findOrCreate({
//       where: { id: typeId },
//       defaults: { name }
//     })
//   });

//   const allTypes = await Type.findAll();
//   res.send(allTypes);
// })

router.post("/pokemons", async (req, res) => {
  // let {
  //   name,
  //   image,
  //   hp,
  //   attack,
  //   defense,
  //   speed,
  //   height,
  //   weight,
  //   createdInDb,
  //   type,
  // } = req.body;

  // let pokemonCreated = await Pokemon.create({
  //   name,
  //   image,
  //   hp,
  //   attack,
  //   defense,
  //   speed,
  //   height,
  //   weight,
  //   createdInDb,
  // });

  // let typeDb = await Type.findAll({
  //   where: { name: type },
  // });

  // pokemonCreated.add(typeDb);
  // res.send('Pokemon creado con exito')
  res.send('ESTA RUTA CREA UN NUEVO POKEMON')
});

// router.use("/pokemons", pokemonRouter);

module.exports = router;
