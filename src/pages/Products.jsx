import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { readProductData } from "../service/database";

export default function Products() {
  const [products, setProducts] = useState({});
  useEffect(() => {
    readProductData((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div className="flex flex-col items-center max-w-5xl m-auto">
      <h1 className="font-semibold text-3xl my-10">All Prodcuts</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-4 gap-y-5">
        {products &&
          Object.keys(products).map((key) => (
            <Product product={products[key]} />
          ))}
      </ul>
    </div>
  );
}
