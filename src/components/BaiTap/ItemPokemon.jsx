import React from "react";
import { Link } from "react-router-dom";

const ItemPokemon = ({ pokemon }) => {
  return (
    <div className="border border-red-500 p-5 rounded-xl">
      <img src={pokemon?.image} className="text-center border " alt="" />
      <h1 className="text-2xl font-bold">{pokemon?.name}</h1>
      <p>Tan cong: {pokemon?.cong}</p>
      <p className="my-2">Phong thu: {pokemon?.thu}</p>
      <Link
        to={`shoe-detail/${pokemon.name}`}
        className="px-5 py-2 bg-blue-400 rounded-xl text-white "
      >
        Xem chi tiet
      </Link>
    </div>
  );
};

export default ItemPokemon;
