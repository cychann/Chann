import React from "react";
import { FaHeart } from "react-icons/fa";
export default function Product({ product }) {
  return (
    <li>
      <img src={product.imageURL} alt="image" className="mb-3" />
      <div className="flex justify-between px-2">
        <div className="">
          <p className="text-sm text-gray-400 font-bold">{product.catecory}</p>
          <p className="font-semibold text-lg"> {product.name}</p>
          <p className="font-semibold text-lg">{product.price}</p>
        </div>
        <FaHeart className="text-xl cursor-pointer" />
      </div>
    </li>
  );
}
