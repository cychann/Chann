import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";
import CartProduct from "../components/CartProduct";
import useCart from "../hooks/useCart";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);

  const {
    cartQuery: { isLoading, error, data: cartProducts },
  } = useCart();

  useEffect(() => {
    setTotalPrice(0);
    cartProducts &&
      cartProducts.map((cartProduct) => {
        const subTotal = cartProduct.price * cartProduct.count;
        return setTotalPrice((prev) => prev + subTotal);
      });
  }, [cartProducts]);

  return (
    <div className="flex flex-col items-center m-auto">
      {isLoading && <Loading />}
      {error && <ErrorPage />}
      {cartProducts && (
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
              {cartProducts && (
                <ul className="flex flex-col">
                  {cartProducts.map((cartProduct) => (
                    <CartProduct product={cartProduct} key={cartProduct.id} />
                  ))}
                </ul>
              )}
              {cartProducts && cartProducts.length === 0 && (
                <div className="text-2xl font-bold text-center pt-10">
                  장바구니에 상품이 없습니다.
                </div>
              )}
            </div>
            <div className="w-5/6 xl:w-1/4 bg-gray-200 p-10 mt-5 xl:mt-0">
              <h1 className="font-bold text-3xl border-gray-400 border-b-2 pb-4">
                Order Summary
              </h1>
              <hr />
              {cartProducts && (
                <ul className="flex flex-col border-gray-400 border-b-2 py-4">
                  {cartProducts.map((cartProduct) => (
                    <li
                      className="flex justify-between mb-3"
                      key={cartProduct.id}
                    >
                      <p className="w-1/3">{cartProduct.name}</p>
                      <p className="font-bold">
                        {(
                          +cartProduct.price * cartProduct.count
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
