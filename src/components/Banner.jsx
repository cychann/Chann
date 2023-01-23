import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Banner({ products }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center  max-w-7xl m-auto">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 w-full place-items-center">
        <li className="relative w-2/3 h-[35rem] mt-12">
          <div className="mb-12 hidden lg:block">
            <p className="font-bold text-6xl">
              {Object.values(products).length !== 0 &&
                Object.values(products).length}{" "}
              +{" "}
            </p>
            <p className="font-semibold text-4xl">Products for you</p>
          </div>
          <img className="w-full h-full" src="/images/man-banner.jpeg" alt="" />
          <p className="-rotate-90 font-bold text-8xl drop-shadow-3xl text-white -left-24 bottom-20 absolute">
            MEN
          </p>
          <div className="absolute -right-20 bottom-32 w-1/2">
            <p className="mb-3 font-semibold">MEN</p>
            <p className="font-bold text-4xl mb-5">New Men's Clothes 2023</p>
            <div
              className="flex items-center text-lg hover:animate-none cursor-pointer animate-bounce"
              onClick={() => navigate("/catecories/Men")}
            >
              <AiOutlineLine className="mr-3" />
              <p>Shop now</p>
            </div>
          </div>
        </li>

        <li className="relative w-2/3  h-[35rem] ">
          <img
            className=" w-full h-full"
            src="/images/women-banner.jpeg"
            alt=""
          />
          <p className="rotate-90 font-bold text-8xl drop-shadow-3xl text-white -right-40 top-40 absolute">
            WOMEN
          </p>
          <div className="absolute -left-12 bottom-12 w-1/2">
            <p className="mb-3 font-semibold">WOMEN</p>
            <p className="font-bold text-4xl mb-5">New Women's Clothes 2023</p>
            <div
              className="flex items-center text-lg hover:animate-none cursor-pointer animate-bounce"
              onClick={() => navigate("/catecories/Women")}
            >
              <AiOutlineLine className="mr-3" />
              <p>Shop now</p>
            </div>
          </div>
        </li>

        <li className="relative w-2/3 h-[35rem] ">
          <img
            className="w-full h-full"
            src="/images/shoes-banner.jpeg"
            alt=""
          />
          <p className="font-bold text-8xl drop-shadow-3xl text-white top-12 absolute">
            SHOES
          </p>
          <div className="absolute left-12 top-80 w-1/2">
            <p className="mb-3 font-semibold">SHOES</p>
            <p className="font-bold text-4xl mb-5">New Shoes 2023</p>
            <div
              className="flex items-center text-lg hover:animate-none cursor-pointer animate-bounce"
              onClick={() => navigate("/catecories/Shoes")}
            >
              <AiOutlineLine className="mr-3" />
              <p>Shop now</p>
            </div>
          </div>
        </li>

        <li className=" relative w-2/3 h-[35rem] mb-12 sm:mb-96">
          <img
            className=" w-full h-full"
            src="/images/bag-banner.jpeg"
            alt=""
          />
          <p className="font-bold text-8xl drop-shadow-3xl text-white bottom-0 absolute">
            BAG
          </p>
          <div className="absolute -right-12 bottom-32 w-1/2">
            <p className="mb-3 font-semibold">MEN</p>
            <p className="font-bold text-4xl mb-5">New Bag 2023</p>
            <div
              className="flex items-center text-lg hover:animate-none cursor-pointer animate-bounce"
              onClick={() => navigate("/catecories/Bag")}
            >
              <AiOutlineLine className="mr-3" />
              <p>Shop now</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
