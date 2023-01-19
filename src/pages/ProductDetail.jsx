import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuthentication } from "../context/AuthProvider";
import { addProductToBasket } from "../service/database";

export default function ProductDetail() {
  const {
    state: { product },
  } = useLocation();
  const { user } = useAuthentication();

  const [sizeBtnActive, setSizeBtnActive] = useState(0);
  const [count, setCount] = useState(1);

  const toggleActive = (e) => {
    setSizeBtnActive(e.target.value);
  };

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCount((prev) => {
      if (prev > 1) return prev - 1;
      else return prev;
    });
  };

  const addToBasket = () => {
    const addToProduct = {
      ...product,
      count,
      size: product.options[sizeBtnActive],
    };
    addProductToBasket(addToProduct, user.uid);
  };

  return (
    <div className="flex max-w-7xl m-auto">
      <img className="w-1/2 h-full mr-16" src={product.imageURL} alt="image" />
      <div className="w-1/2">
        <p className="font-semibold">{product.catecory}</p>
        <p className="font-bold text-2xl mb-1">{product.name}</p>
        <p className="font-bold text-2xl mb-3">{product.price}</p>
        <p className="mb-5">{product.description}</p>
        <ul className="flex items-center mb-10">
          <p className="font-semibold text-2xl mr-10">SIZE</p>
          {product.options.map((option, idx) => (
            <li
              value={idx}
              className={
                idx === sizeBtnActive
                  ? "w-12 h-7 border border-gray-300 flex justify-center items-center mr-3 cursor-pointer bg-black text-white"
                  : "w-12 h-7 border border-gray-300 flex justify-center items-center mr-3 cursor-pointer"
              }
              onClick={toggleActive}
            >
              {option}
            </li>
          ))}
        </ul>
        <div className="w-full flex items-center">
          <div className="w-28 h-12 mr-3 border border-gray-300 flex justify-between items-center px-3">
            <p className="text-3xl" onClick={decreaseCount}>
              -
            </p>
            <p className="text-2xl font-semibold">{count}</p>
            <p className="text-3xl" onClick={increaseCount}>
              +
            </p>
          </div>
          <button
            className="w-1/2 h-12 bg-black text-white font-bold"
            type="submit"
            onClick={addToBasket}
          >
            ADD TO BASKET
          </button>
        </div>
      </div>
    </div>
  );
}
