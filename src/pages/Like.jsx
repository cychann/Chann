import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useAuthentication } from "../context/AuthProvider";
import { readLikeProduct } from "../service/database";

export default function Like() {
  const { user } = useAuthentication();
  const [likeProducts, setLikeProducts] = useState({});

  useEffect(() => {
    readLikeProduct((products) => {
      products ? setLikeProducts(products[user.uid]) : setLikeProducts({});
    });
  }, []);
  return (
    <div className="flex flex-col items-center max-w-7xl m-auto">
      <h1 className="font-semibold text-3xl my-10">All Prodcuts</h1>

      {Object.keys(likeProducts).length !== 0 ? (
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-4 gap-y-5">
          {Object.keys(likeProducts).map((key) => (
            <Product product={likeProducts[key]} />
          ))}
        </ul>
      ) : (
        <div className="text-2xl font-bold">
          찜한 상품이 없습니다. 상품을 등록해보세요!
        </div>
      )}
    </div>
  );
}
