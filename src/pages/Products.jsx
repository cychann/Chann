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
    <div>
      <h1>Prodcuts</h1>
      <ul>
        {products &&
          Object.keys(products).map((key) => (
            <Product product={products[key]} />
          ))}
      </ul>
    </div>
  );
}
