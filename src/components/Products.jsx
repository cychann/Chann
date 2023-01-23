import React, { useEffect, useState } from "react";
import Product from "./Product";
import { readProductData } from "../service/database";

export default function Products({ products }) {
  return (
    <div className="flex flex-col items-center max-w-7xl m-auto">
      <h1 className="font-semibold text-3xl my-10">All Prodcuts</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-4 gap-y-5  w-full">
        {products &&
          Object.keys(products).map((key) => (
            <Product product={products[key]} key={key} />
          ))}
      </ul>
    </div>
  );
}
