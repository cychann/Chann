import React, { useEffect, useState } from "react";
import BasketProduct from "../components/BasketProduct";
import { useAuthentication } from "../context/AuthProvider";
import { readBasketProduct } from "../service/firebase";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";

export default function Basket() {
  const { user } = useAuthentication();
  const [totalPrice, setTotalPrice] = useState(0);

  const {
    isLoading,
    error,
    data: basketProducts,
  } = useQuery(["basket_products"], () => readBasketProduct(user && user.uid), {
    enabled: (user && !!user.uid) || false,
  });

  useEffect(() => {
    setTotalPrice(0);
    basketProducts &&
      basketProducts.map((basketProduct) => {
        const subTotal = basketProduct.price * basketProduct.count;
        return setTotalPrice((prev) => prev + subTotal);
      });
  }, [basketProducts]);

  return (
    <div className="flex flex-col items-center m-auto">
      {isLoading && <Loading />}
      {error && <ErrorPage />}
      {basketProducts && (
        <>
          <h1 className="font-semibold text-3xl my-10">Shopping Cart</h1>
          <hr className="w-full mb-10" />
          <section className="flex flex-col xl:flex-row justify-between items-center xl:items-start w-full max-w-7xl">
            <div className="flex flex-col w-full xl:w-4/6 px-10 xl:px-0">
              <div className="hidden md:block">
                <div className="flex w-full pb-4">
                  <p className="w-1/2 font-bold">PRODUCT</p>
                  <p className="w-1/6 font-bold">PRICE</p>
                  <p className="w-1/6 font-bold">QUANTITY</p>
                  <p className="w-1/6 font-bold">SUBTOTAL</p>
                </div>
              </div>
              {basketProducts ? (
                <ul className="flex flex-col">
                  {basketProducts.map((basketProduct) => (
                    <BasketProduct
                      product={basketProduct}
                      key={basketProduct.id}
                    />
                  ))}
                </ul>
              ) : (
                <div className="text-xl text-center pt-10">
                  장바구니에 상품이 없습니다.
                </div>
              )}
            </div>
            <div className="w-5/6 xl:w-1/4 bg-gray-200 p-10 mt-5 xl:mt-0">
              <h1 className="font-bold text-3xl border-gray-400 border-b-2 pb-4">
                Order Summary
              </h1>
              <hr />
              {basketProducts && (
                <ul className="flex flex-col border-gray-400 border-b-2 py-4">
                  {basketProducts.map((basketProduct) => (
                    <li
                      className="flex justify-between mb-3"
                      key={basketProduct.id}
                    >
                      <p className="w-1/3">{basketProduct.name}</p>
                      <p className="font-bold">
                        {(
                          +basketProduct.price * basketProduct.count
                        ).toLocaleString()}
                        원
                      </p>
                    </li>
                  ))}
                </ul>
              )}
              <hr />
              <div className="flex justify-between pt-4 mb-8">
                <p className="font-bold text-2xl">TOTAL</p>
                <p className="font-bold text-2xl">
                  {(+totalPrice).toLocaleString()}원
                </p>
              </div>
              <button className="bg-black text-white w-full h-12">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
