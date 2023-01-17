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
    <div className="flex flex-col items-center w-full">
      <h1 className="font-bold text-3xl w-full h-60 flex items-center justify-center">
        Register New Product
      </h1>
      <form
        className="flex flex-col items-center w-1/2"
        onSubmit={onSubmitProduct}
      >
        <input
          className="border border-gray-300 w-full my-1 p-3 text-slate-500 font-semibold text-xl"
          type="file"
          vlaue={product.imageURL}
          onChange={handleInputChange}
        />
        <input
          className="border border-gray-300 w-full my-1 p-3 text-slate-500 font-semibold text-xl"
          type="text"
          placeholder="Product Name"
          value={product.name}
          name="name"
          onChange={handleInputChange}
        />
        <input
          className="border border-gray-300 w-full my-1 p-3 text-slate-500 font-semibold text-xl"
          type="text"
          placeholder="Price"
          value={product.price}
          name="price"
          onChange={handleInputChange}
        />
        <input
          className="border border-gray-300 w-full my-1 p-3 text-slate-500 font-semibold text-xl"
          type="text"
          placeholder="Catecory"
          value={product.catecory}
          name="catecory"
          onChange={handleInputChange}
        />
        <input
          className="border border-gray-300 w-full my-1 p-3 text-slate-500 font-semibold text-xl"
          type="text"
          placeholder="Description"
          value={product.description}
          name="description"
          onChange={handleInputChange}
        />
        <input
          className="border border-gray-300 w-full my-1 p-3 text-slate-500 font-semibold text-xl"
          type="text"
          placeholder="Options (separate with a comma)"
          value={product.options}
          name="options"
          onChange={handleInputChange}
        />
        <button
          className="w-full my-1 p-3 bg-black text-white font-semibold"
          type="submit"
        >
          Register!
        </button>
      </form>
    </div>
  );
}
