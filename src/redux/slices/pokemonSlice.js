import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tenPokemon: "Pikachu",
  he: "Dien",
  tanCong: 500,
  pokemons: [
    {
      name: "Pikachu",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      dame: 55,
      thu: 40,
      cong: 90,
    },
    {
      name: "Charizard",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
      dame: 84,
      thu: 78,
      cong: 100,
    },
    {
      name: "Bulbasaur",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      dame: 49,
      thu: 49,
      cong: 45,
    },
    {
      name: "Squirtle",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      dame: 48,
      thu: 65,
      cong: 43,
    },
    {
      name: "Gengar",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
      dame: 65,
      thu: 60,
      cong: 110,
    },
    {
      name: "Snorlax",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
      dame: 110,
      thu: 65,
      cong: 30,
    },
    {
      name: "Dragonite",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
      dame: 134,
      thu: 95,
      cong: 80,
    },
    {
      name: "Eevee",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
      dame: 55,
      thu: 50,
      cong: 55,
    },
    {
      name: "Lucario",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png",
      dame: 110,
      thu: 70,
      cong: 90,
    },
    {
      name: "Mewtwo",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
      dame: 110,
      thu: 90,
      cong: 130,
    },
  ],
};
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
});

export default pokemonSlice.reducer;
