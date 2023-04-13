import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Paginado from "../../components/Paginado/Paginado";

// const pokemons = [
//   {
//     id: "f29e1c1c-cb25-4afe-ad58-4cbe1b1bcde5",
//     name: "chala",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
//     hp: 39,
//     attack: 52,
//     defense: 43,
//     speed: 65,
//     height: 6,
//     weight: 85,
//     created: true,
//     types: [],
//   },
//   {
//     id: "8f874cae-a1a4-4dc6-a040-d73f81f43f51",
//     name: "charmand",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
//     hp: 45,
//     attack: 49,
//     defense: 49,
//     speed: 45,
//     height: 7,
//     weight: 69,
//     created: true,
//     types: [],
//   },
//   {
//     id: "3447de0e-5ea9-43c3-98fd-bc632eaa8044",
//     name: "char",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
//     hp: 45,
//     attack: 49,
//     defense: 49,
//     speed: 45,
//     height: 7,
//     weight: 69,
//     created: true,
//     types: [],
//   },
//   {
//     id: "24baf59a-2227-4325-adc8-f795192cd53a",
//     name: "chacha",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
//     hp: 39,
//     attack: 52,
//     defense: 43,
//     speed: 65,
//     height: 6,
//     weight: 85,
//     created: true,
//     types: [],
//   },
//   {
//     id: "9a783b0b-3df7-4e39-ac79-fbcf3f61a015",
//     name: "ivy",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
//     hp: 45,
//     attack: 49,
//     defense: 49,
//     speed: 45,
//     height: 7,
//     weight: 69,
//     created: true,
//     types: [],
//   },
//   {
//     id: "c5142050-043e-4979-ab5c-019121d932a5",
//     name: "bulb",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
//     hp: 45,
//     attack: 49,
//     defense: 49,
//     speed: 45,
//     height: 7,
//     weight: 69,
//     created: true,
//     types: [],
//   },
//   {
//     id: "427b5330-cd5f-492e-bde5-3071bc2e1ad9",
//     name: "chariz",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
//     hp: 45,
//     attack: 49,
//     defense: 49,
//     speed: 45,
//     height: 7,
//     weight: 69,
//     created: true,
//     types: [],
//   },
//   {
//     id: 1,
//     name: "bulbasaur",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
//     hp: 45,
//     attack: 49,
//     defense: 49,
//     speed: 45,
//     height: 7,
//     weight: 69,
//     types: ["grass", "poison"],
//     created: false,
//   },
//   {
//     id: 2,
//     name: "ivysaur",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
//     hp: 60,
//     attack: 62,
//     defense: 63,
//     speed: 60,
//     height: 10,
//     weight: 130,
//     types: ["grass", "poison"],
//     created: false,
//   },
//   {
//     id: 3,
//     name: "venusaur",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
//     hp: 80,
//     attack: 82,
//     defense: 83,
//     speed: 80,
//     height: 20,
//     weight: 1000,
//     types: ["grass", "poison"],
//     created: false,
//   },
//   {
//     id: 4,
//     name: "charmander",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
//     hp: 39,
//     attack: 52,
//     defense: 43,
//     speed: 65,
//     height: 6,
//     weight: 85,
//     types: ["fire"],
//     created: false,
//   },
//   {
//     id: 5,
//     name: "charmeleon",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
//     hp: 58,
//     attack: 64,
//     defense: 58,
//     speed: 80,
//     height: 11,
//     weight: 190,
//     types: ["fire"],
//     created: false,
//   },
//   {
//     id: 6,
//     name: "charizard",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
//     hp: 78,
//     attack: 84,
//     defense: 78,
//     speed: 100,
//     height: 17,
//     weight: 905,
//     types: ["fire", "flying"],
//     created: false,
//   },
//   {
//     id: 7,
//     name: "squirtle",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
//     hp: 44,
//     attack: 48,
//     defense: 65,
//     speed: 43,
//     height: 5,
//     weight: 90,
//     types: ["water"],
//     created: false,
//   },
//   {
//     id: 8,
//     name: "wartortle",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
//     hp: 59,
//     attack: 63,
//     defense: 80,
//     speed: 58,
//     height: 10,
//     weight: 225,
//     types: ["water"],
//     created: false,
//   },
//   {
//     id: 9,
//     name: "blastoise",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
//     hp: 79,
//     attack: 83,
//     defense: 100,
//     speed: 78,
//     height: 16,
//     weight: 855,
//     types: ["water"],
//     created: false,
//   },
//   {
//     id: 10,
//     name: "caterpie",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
//     hp: 45,
//     attack: 30,
//     defense: 35,
//     speed: 45,
//     height: 3,
//     weight: 29,
//     types: ["bug"],
//     created: false,
//   },
//   {
//     id: 11,
//     name: "metapod",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
//     hp: 50,
//     attack: 20,
//     defense: 55,
//     speed: 30,
//     height: 7,
//     weight: 99,
//     types: ["bug"],
//     created: false,
//   },
//   {
//     id: 12,
//     name: "butterfree",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
//     hp: 60,
//     attack: 45,
//     defense: 50,
//     speed: 70,
//     height: 11,
//     weight: 320,
//     types: ["bug", "flying"],
//     created: false,
//   },
//   {
//     id: 13,
//     name: "weedle",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",
//     hp: 40,
//     attack: 35,
//     defense: 30,
//     speed: 50,
//     height: 3,
//     weight: 32,
//     types: ["bug", "poison"],
//     created: false,
//   },
//   {
//     id: 14,
//     name: "kakuna",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
//     hp: 45,
//     attack: 25,
//     defense: 50,
//     speed: 35,
//     height: 6,
//     weight: 100,
//     types: ["bug", "poison"],
//     created: false,
//   },
//   {
//     id: 15,
//     name: "beedrill",
//     image:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
//     hp: 65,
//     attack: 90,
//     defense: 40,
//     speed: 75,
//     height: 10,
//     weight: 295,
//     types: ["bug", "poison"],
//     created: false,
//   },
// ];

const CardsContainer = () => {

  const pokemons = useSelector((state) => state.pokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
  
  const paginado = (pageNumeber) => {
    setCurrentPage(pageNumeber);
  }

  return (
    <div >
      <div>
      <Paginado pokemonsPerPage={pokemonsPerPage} allPokemons={pokemons.length} paginado={paginado} />
      </div>
      <div className={style.container}>
      {currentPokemons?.map((pokemon) => {
        return (
          <Card
          id={pokemon.id}
          image={pokemon.image}
          
          name={pokemon.name}
          types={pokemon.types}
          />
          );
        })}
        </div>
    </div>
  );
};

export default CardsContainer;
