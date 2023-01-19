import React, { useEffect, useState } from "react";
import BasketProduct from "../components/BasketProduct";
import { useAuthentication } from "../context/AuthProvider";
import { readBasketProduct } from "../service/database";

export default function Basket() {
  const { user } = useAuthentication();
  const [basketProducts, setBasketProducts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    readBasketProduct((products) => {
      if (user) {
        products
          ? setBasketProducts(products[user.uid])
          : setBasketProducts({});
      }
    });
  }, [user]);

  useEffect(() => {
    setTotalPrice(0);
    Object.keys(basketProducts).map((key) => {
      const subTotal = basketProducts[key].price * basketProducts[key].count;
      setTotalPrice((prev) => prev + subTotal);
    });
  }, [basketProducts]);

  return (
    <div className="flex flex-col items-center m-auto">
      <h1 className="font-semibold text-3xl my-10">Shopping Cart</h1>
      <hr className="w-full mb-10" />
      <section className="flex justify-between w-full max-w-7xl">
        <div className="flex flex-col w-4/6">
          <div className="flex w-full pb-4">
            <p className="w-1/2 font-bold">PRODUCT</p>
            <p className="w-1/6 font-bold">PRICE</p>
            <p className="w-1/6 font-bold">QUANTITY</p>
            <p className="w-1/6 font-bold">SUBTOTAL</p>
          </div>
          {Object.keys(basketProducts).length !== 0 ? (
            <ul className="flex flex-col">
              {Object.keys(basketProducts).map((key) => (
                <BasketProduct product={basketProducts[key]} />
              ))}
            </ul>
          ) : (
            <div className="text-xl text-center pt-10">
              장바구니에 상품이 없습니다.
            </div>
          )}
        </div>
        <div className="w-1/4 bg-gray-200 p-10">
          <h1 className="font-bold text-3xl border-gray-400 border-b-2 pb-4">
            Order Summary
          </h1>
          <hr />
          {Object.keys(basketProducts).length !== 0 && (
            <ul className="flex flex-col border-gray-400 border-b-2 py-4">
              {Object.keys(basketProducts).map((key) => (
                <li className="flex justify-between">
                  <p>{basketProducts[key].name}</p>
                  <p className="font-bold">
                    {basketProducts[key].price * basketProducts[key].count}
                  </p>
                </li>
              ))}
            </ul>
          )}
          <hr />
          <div className="flex justify-between pt-4 mb-8">
            <p className="font-bold text-2xl">TOTAL</p>
            <p className="font-bold text-2xl">{totalPrice}</p>
          </div>
          <button className="bg-black text-white w-full h-12">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </section>
    </div>
  );
}
