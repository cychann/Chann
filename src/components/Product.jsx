import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useAuthentication } from "../context/AuthProvider";
import {
  addProductToLike,
  readLikeProduct,
  removeProductToLike,
} from "../service/database";
export default function Product({ product }) {
  const { user } = useAuthentication();
  const [likeProducts, setLikeProducts] = useState({});
  const [isLike, setIsLike] = useState(false);
  const navigate = useNavigate();

  const onClickProduct = () => {
    navigate(`/detail/${product.id}`, { state: { product } });
  };

  const onClickLikeBtn = (e) => {
    e.stopPropagation();
    if (user) {
      if (isLike) {
        removeProductToLike(product, user.uid);
      } else {
        addProductToLike(product, user.uid);
      }
      setIsLike(!isLike);
    }
  };

  useEffect(() => {
    if (user) {
      readLikeProduct((products) => {
        products && setLikeProducts(products[user.uid]);
      });
    }
  }, [user]);

  useEffect(() => {
    if (product.id in likeProducts) setIsLike(true);
  }, [likeProducts, product.id]);

  return (
    <li className="cursor-pointer" onClick={onClickProduct}>
      <img
        className="w-full h-80 mb-3"
        src={product.imageURL}
        alt="product_image"
      />
      <div className="flex justify-between px-2">
        <div className="">
          <p className="text-sm text-gray-400 font-bold">{product.catecory}</p>
          <p className="font-semibold text-lg"> {product.name}</p>
          <p className="font-semibold text-lg">
            {(+product.price).toLocaleString()}원
          </p>
        </div>
        <FaHeart
          className={
            isLike
              ? "text-xl cursor-pointer text-red-600"
              : "text-xl cursor-pointer"
          }
          onClick={onClickLikeBtn}
        />
      </div>
    </li>
  );
}
