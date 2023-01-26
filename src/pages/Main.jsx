import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { readProductData } from "../service/firebase";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";

export default function Main() {
  // const [products, setProducts] = useState({});
  // useEffect(() => {
  //   readProductData((products) => {
  //     setProducts(products);
  //   });
  // }, []);

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], readProductData);

  return (
    <main>
      {isLoading && <Loading />}
      {error && <ErrorPage />}
      {products && (
        <>
          <section>
            <Banner products={products} />
          </section>
          <section>
            <Products products={products} />
          </section>
        </>
      )}
    </main>
  );
}
