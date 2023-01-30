import React, { useRef, useState } from "react";
import useProducts from "../hooks/useProducts";
import { addeProductData } from "../service/firebase";
import { uploadImage } from "../service/UploadImage";

export default function Register() {
  const [imageUploadURL, setImageUploadURL] = useState("");
  const [succeess, setSuccess] = useState("");

  const { addProduct } = useProducts();

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
    setImageUploadURL("");
    addProduct.mutate(product, {
      onSuccess: () => {
        setSuccess("✅ 제품이 성공적으로 추가되었습니다!");
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="font-bold text-3xl w-full h-60 flex items-center justify-center">
        Register New Product
      </h1>
      {succeess && <p className="text-2xl font-semibold">{succeess}</p>}
      <form
        className="flex items-center w-1/2"
        ref={formRef}
        onSubmit={onSubmitProduct}
      >
        <div className="flex">
          <input
            className="border border-gray-300 w-full my-1 p-3 text-slate-500 font-semibold text-xl hidden"
            type="file"
            onChange={handleFileChange}
            ref={imageRef}
          />
          <div className="w-60 h-72 bg-gray-100 flex flex-col items-center justify-center rounded-lg mr-5">
            {imageUploadURL ? (
              <img src={imageUploadURL} alt="register_image" />
            ) : (
              <button
                className="font-semibold text-xl"
                onClick={imageUploadBtn}
                type="button"
              >
                이미지 업로드
              </button>
            )}
          </div>
        </div>
        <div>
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
            placeholder="Catecory (Men, Women, Bag, Shoes)"
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
        </div>
      </form>
    </div>
  );
}
