import React from "react";

export default function Product({ product }) {
  return (
    <li>
      <img src={product.imageURL} alt="image" />
      <div>
        <p>{product.catecory}</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    </li>
  );
}
