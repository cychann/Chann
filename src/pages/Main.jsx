import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { readProductData } from "../service/database";

export default function Main() {
  const [products, setProducts] = useState({});
  useEffect(() => {
    readProductData((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <main>
      <section>
        <Banner products={products} />
      </section>
      <section>
        <Products products={products} />
      </section>
    </main>
  );
}
