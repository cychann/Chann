import React from "react";
import { GrFormClose } from "react-icons/gr";
import { useAuthentication } from "../context/AuthProvider";
import {
  addOrUpdateProductToBasket,
  removeProductToBasket,
} from "../service/firebase";

export default function BasketProduct({ product }) {
  const { user } = useAuthentication();

  const onClickDelete = () => {
    removeProductToBasket(product, user.uid);
  };

  const increaseCount = () => {
    addOrUpdateProductToBasket(
      { ...product, count: product.count + 1 },
      user.uid
    );
  };
  const decreaseConunt = () => {
    addOrUpdateProductToBasket(
      { ...product, count: product.count - 1 },
      user.uid
    );
  };
  return (
    <li className="border-t-2 py-4 flex items-center">
      <div className="w-5/12 md:w-1/2 flex items-center mr-2">
        <img
          className="w-1/2 h-1/2 object-cover md:w-24 md:h-24 mr-2 md:mr-6"
          src={product.imageURL}
          alt="basket_prodcut"
        />
        <div className="pt-2 md:pt-5 text-xs md:text-base w-1/2">
          <p className="font-bold">{product.name}</p>
          <p className="font-bold text-gray-400">{product.catecory}</p>
        </div>
      </div>
      <p className="w-1/5 md:w-1/6 font-bold text-xs md:text-base mr-2">
        {(+product.price).toLocaleString()}원
      </p>
      <div className="w-1/6 mr-3 md:mr-0">
        <div className="w-12 h-6 md:w-24 md:h-12 mr-3 border border-gray-300 flex justify-between items-center px-3">
          <p
            className="text-sm md:text-3xl cursor-pointer"
            onClick={decreaseConunt}
          >
            -
          </p>
          <p className="text-sm md:text-2xl font-semibold">{product.count}</p>
          <p
            className="text-sm md:text-3xl cursor-pointer"
            onClick={increaseCount}
          >
            +
          </p>
        </div>
      </div>
      <div className="w-1/12 md:w-1/6 flex justify-between">
        <p className="font-bold text-xs md:text-base hidden md:block">
          {(product.price * product.count).toLocaleString()}원
        </p>
        <GrFormClose
          className="cursor-pointer text-xl"
          onClick={onClickDelete}
        />
      </div>
    </li>
  );
}
