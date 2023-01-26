import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useAuthentication } from "../context/AuthProvider";
import { readLikeProduct } from "../service/firebase";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";

export default function Like() {
  const { user } = useAuthentication();

  const {
    isLoading,
    error,
    data: likeProducts,
  } = useQuery(["like_products", user && user.uid], () =>
    readLikeProduct(user && user.uid)
  );
  return (
    <div className="flex flex-col items-center max-w-7xl m-auto">
      {isLoading && <Loading />}
      {error && <ErrorPage />}

      <h1 className="font-semibold text-3xl my-10">Like Prodcuts</h1>
      {likeProducts ? (
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-4 gap-y-5">
          {likeProducts.map((product) => (
            <Product product={product} key={product.id} />
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
