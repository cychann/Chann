import React, { useRef, useState } from "react";
import { writeUserData } from "../service/database";
import { uploadImage } from "../service/UploadImage";

export default function Register() {
  // const [product, setProduct] = useState({
  //   imageURL: "",
  //   name: "",
  //   price: "",
  //   catecory: "",
  //   description: "",
  //   options: "",
  // });
  const [imageUploadURL, setImageUploadURL] = useState("");

  const formRef = useRef();
  const imageRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const catecoryRef = useRef();
  const descriptionRef = useRef();
  const optionsRef = useRef();

  const imageUploadBtn = () => {
    imageRef.current.click();
  };
  const handleFileChange = async (e) => {
    const uploaded = await uploadImage(e.target.files[0]);
    setImageUploadURL(uploaded.url);
  };
  // const handleInputChange = (e) => {
  //   setProduct({ ...product, [e.target.name]: e.target.value });
  // };

  const onSubmitProduct = (e) => {
    e.preventDefault();
    const product = {
      imageURL: imageUploadURL || "",
      name: nameRef.current.value,
      price: priceRef.current.value,
      catecory: catecoryRef.current.value,
      description: descriptionRef.current.value,
      options: optionsRef.current.value,
    };
    formRef.current.reset();
    setImageUploadURL("");
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
        <div>
          <input
            className="border border-gray-300 w-full my-1 p-3 text-slate-500 font-semibold text-xl hidden"
            type="file"
            onChange={handleFileChange}
            ref={imageRef}
          />
          {imageUploadURL ? <img src={imageUploadURL} /> : <div>asd</div>}
          <button onClick={imageUploadBtn}>이미지 업로드</button>
        </div>
        <input
          className="border border-gray-300 w-full my-1 p-3 text-slate-500 font-semibold text-xl"
          type="text"
          placeholder="Product Name"
          name="name"
          ref={nameRef}
        />
        <input
          className="border border-gray-300 w-full my-1 p-3 text-slate-500 font-semibold text-xl"
          type="text"
          placeholder="Price"
          name="price"
          ref={priceRef}
        />
        <input
          className="border border-gray-300 w-full my-1 p-3 text-slate-500 font-semibold text-xl"
          type="text"
          placeholder="Catecory"
          name="catecory"
          ref={catecoryRef}
        />
        <input
          className="border border-gray-300 w-full my-1 p-3 text-slate-500 font-semibold text-xl"
          type="text"
          placeholder="Description"
          name="description"
          ref={descriptionRef}
        />
        <input
          className="border border-gray-300 w-full my-1 p-3 text-slate-500 font-semibold text-xl"
          type="text"
          placeholder="Options (separate with a comma)"
          name="options"
          ref={optionsRef}
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
