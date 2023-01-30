import React from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";
import useProducts from "../hooks/useProducts";

export default function Main() {
  const {
    productQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <main>
      <div className="flex justify-center">{isLoading && <Loading />}</div>
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
