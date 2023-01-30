import React from "react";
import Product from "../components/Product";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";
import useLike from "../hooks/useLike";

export default function Like() {
  const {
    likeQuery: { isLoading, error, data: likeProducts },
  } = useLike();
  return (
    <div className="flex flex-col items-center max-w-7xl m-auto">
      {isLoading && <Loading />}
      {error && <ErrorPage />}

      <h1 className="font-semibold text-3xl my-10">Like Prodcuts</h1>
      {likeProducts && (
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-4 gap-y-5">
          {likeProducts.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </ul>
      )}
      {likeProducts && likeProducts.length === 0 && (
        <div className="text-2xl font-bold">
          찜한 상품이 없습니다. 상품을 등록해보세요!
        </div>
      )}
    </div>
  );
}
