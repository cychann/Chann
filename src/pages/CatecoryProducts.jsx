import React from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { readProductData } from "../service/firebase";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";

export default function CatecoryProducts() {
  const { catecoryId } = useParams();

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], readProductData);

  return (
    <div className="flex flex-col items-center max-w-7xl m-auto">
      {isLoading && <Loading />}
      {error && <ErrorPage />}
      {products && (
        <>
          <h1 className="font-semibold text-3xl my-10">{catecoryId}</h1>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-4 gap-y-5 w-full">
            {products &&
              Object.keys(products).map(
                (key) =>
                  products[key].catecory === catecoryId && (
                    <Product product={products[key]} key={key} />
                  )
              )}
          </ul>
        </>
      )}
    </div>
  );
}
