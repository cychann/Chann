import React from "react";
import { GrFormClose } from "react-icons/gr";
import { useAuthentication } from "../context/AuthProvider";
import { removeProductToBasket } from "../service/database";

export default function BasketProduct({ product }) {
  const { user } = useAuthentication();

  const onClickDelete = () => {
    removeProductToBasket(product, user.uid);
  };
  return (
    <li className="border-t-2 py-4 flex items-center">
      <div className="w-1/2 flex">
        <img className="w-22 h-24 mr-6" src={product.imageURL} alt="image" />
        <div className="pt-5">
          <p className="font-bold">{product.name}</p>
          <p className="font-bold text-gray-400">{product.catecory}</p>
        </div>
      </div>
      <p className="w-1/6 font-bold">{product.price}원</p>
      <div className="w-1/6">
        <div className="w-24 h-12 mr-3 border border-gray-300 flex justify-between items-center px-3">
          <p className="text-3xl">-</p>
          <p className="text-2xl font-semibold">{product.count}</p>
          <p className="text-3xl">+</p>
        </div>
      </div>
      <div className="w-1/6 flex justify-between">
        <p className="font-bold">{product.price * product.count}원</p>
        <GrFormClose className="cursor-pointer" onClick={onClickDelete} />
      </div>
    </li>
  );
}
