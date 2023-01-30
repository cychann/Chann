import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuthentication } from "../context/AuthProvider";
import { addOrUpdateProductToBasket } from "../service/firebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function ProductDetail() {
  const {
    state: { product },
  } = useLocation();
  const { user, action } = useAuthentication();
  const queryClient = useQueryClient();

  const [sizeBtnActive, setSizeBtnActive] = useState(0);
  const [count, setCount] = useState(1);
  const [isUploading, setIsUploading] = useState(false);
  const [succeess, setSuccess] = useState("");

  const { mutate: addOrUpdateBasketProduct } = useMutation(
    (product) => addOrUpdateProductToBasket(product, user.uid),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["basket_products", user.uid]);
        setSuccess("✅ 제품이 성공적으로 추가되었습니다!");
        setTimeout(() => setSuccess(false), 3000);
      },
    }
  );

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
    if (user) {
      const addToProduct = {
        ...product,
        count,
        size: product.options[sizeBtnActive],
      };
      addOrUpdateBasketProduct(addToProduct, user.uid);
    } else {
      action.signIn();
    }
  };

  return (
    <div className="flex flex-col md:flex-row max-w-7xl m-auto h-full pt-10 px-4 md:px-0">
      <img
        className="w-full md:w-1/2 h-5/6 mr-16 mb-8 md:mb-0"
        src={product.imageURL}
        alt="product_detail_image"
      />
      <div className="w-full md:w-1/2">
        <p className="font-semibold">{product.catecory}</p>
        <p className="font-bold text-2xl mb-1">{product.name}</p>
        <p className="font-bold text-2xl mb-3">{product.price}</p>
        <p className="mb-5">{product.description}</p>
        <ul className="flex items-center mb-10">
          <p className="font-semibold text-2xl mr-10">SIZE</p>
          {product.options.map((option, idx) => (
            <li
              value={idx}
              key={idx}
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
        <div className="w-full flex items-center mb-10">
          <div className="w-28 h-12 mr-3 border border-gray-300 flex justify-between items-center px-3">
            <p className="text-3xl cursor-pointer" onClick={decreaseCount}>
              -
            </p>
            <p className="text-2xl font-semibold">{count}</p>
            <p className="text-3xl cursor-pointer" onClick={increaseCount}>
              +
            </p>
          </div>
          <button
            className="w-1/2 h-12 bg-black text-white font-bold"
            type="submit"
            onClick={addToBasket}
          >
            {isUploading ? "업로드 중 ........" : "ADD TO BASKET"}
          </button>
        </div>
        {succeess && <p className="text-xl font-semibold">{succeess}</p>}
      </div>
    </div>
  );
}
