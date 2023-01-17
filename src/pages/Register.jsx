import React, { useState } from "react";
import { writeUserData } from "../firebase/database";

export default function Register() {
  const [product, setProduct] = useState({
    imageURL: "",
    name: "",
    price: "",
    catecory: "",
    description: "",
    options: "",
  });

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmitProduct = (e) => {
    e.preventDefault();
    writeUserData(product);
  };
  return (
    <>
      <h1>Register New Product</h1>
      <form onSubmit={onSubmitProduct}>
        <input
          type="file"
          vlaue={product.imageURL}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          name="name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Price"
          value={product.price}
          name="price"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Catecory"
          value={product.catecory}
          name="catecory"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Description"
          value={product.description}
          name="description"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="옵션을 쉼표로 분리해서 입력해주세요"
          value={product.options}
          name="options"
          onChange={handleInputChange}
        />
        <button type="submit">Register!</button>
      </form>
    </>
  );
}
