import React from "react";
import { Link } from "react-router-dom";

const ItemShoe = ({ image, name, price, id }) => {
  return (
    <div className="render_shoes_item space-y-3">
      <img src={image} alt="" />
      <h3 className="font-bold uppercase">{name}</h3>
      <p className="text-lg text-gray-400">{price}</p>
      <Link
        to={`/demo-useEffect-detail/${id}`}
        className="text-white bg-red-500 rounded-md px-5 py-2"
      >
        Xem ngay
      </Link>
    </div>
  );
};

export default ItemShoe;
