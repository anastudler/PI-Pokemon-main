const axios = require("axios");
const { Type } = require("../db");

const getAllTypes = async () => {
  const typesDb = await Type.findAll();
  if (typesDb.length) {
    return typesDb;
  }

  const typeApi = await axios.get("https://pokeapi.co/api/v2/type");
  const types = typeApi.data.results.map((elem) => elem.name);
  const data = types.map((elem, index) => {
    return {
      id: index + 1,
      name: elem,
    };
  });

  
//   const typeApi = await axios.get("https://pokeapi.co/api/v2/type");
// const data = typeApi.data.results.map((elem) => {
//   return {
//     id: elem.url.split("/")[6], // Extract the id from the type's URL
//     name: elem.name,
//   };
// });

const results = await Type.bulkCreate(data);
return results;

};

module.exports = { getAllTypes };
