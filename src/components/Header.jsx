import React, { useEffect, useState } from "react";
import { useAuthentication } from "../context/AuthProvider";
import { MdLibraryAdd } from "react-icons/md";
import { FaShoppingBag, FaHeart } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { readBasketProduct, readLikeProduct } from "../service/firebase";

const CATECORIES = ["Men", "Women", "Bag", "Shoes"];

export default function Header() {
  const { user, action } = useAuthentication();
  const [likeCount, setLikeCount] = useState(0);
  const [basketCount, setBasketCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    action.onAuthChange();
  }, [action]);

  useEffect(() => {
    if (user) {
      readLikeProduct((products) => {
        products
          ? setLikeCount(Object.keys(products[user.uid]).length)
          : setLikeCount(0);
      });

      readBasketProduct((products) => {
        products
          ? setBasketCount(Object.keys(products[user.uid]).length)
          : setBasketCount(0);
      });
    }
  }, [user]);

  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow h-20 fixed z-10">
      <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block px-4">
          <p className="text-3xl  cursor-pointer" onClick={() => navigate("/")}>
            Chann
          </p>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-3 z-10 bg-white w-full md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {CATECORIES.map((catecory) => (
              <li
                className="cursor-pointer text-lg text-gray-600 hover:text-black px-2 lg:px-4"
                key={catecory}
                onClick={() => navigate(`catecories/${catecory}`)}
              >
                {catecory}
              </li>
            ))}
            <div className="flex items-center md:hidden">
              <li
                className="cursor-pointer text-lg text-gray-600 hover:text-black px-2 lg:px-4 flex items-center"
                onClick={() => navigate("/like")}
              >
                Like
                <p className="bg-black rounded-full text-white w-5 h-5 flex justify-center items-center ml-1 text-sm">
                  {likeCount}
                </p>
              </li>
              <li
                className="cursor-pointer text-lg text-gray-600 hover:text-black px-2 lg:px-4 flex items-center"
                onClick={() => navigate("/basket")}
              >
                Basket
                <p className="bg-black rounded-full text-white w-5 h-5 flex justify-center items-center ml-1 text-sm">
                  {basketCount}
                </p>
              </li>
            </div>
          </ul>
        </div>
        <div className="hidden md:block">
          {user ? (
            <div className={`flex items-center`}>
              <ul className="flex items-center">
                <li
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => navigate("/like")}
                >
                  <FaHeart className=" text-lg ml-4" />
                  <p className="bg-black rounded-full text-white w-5 h-5 flex justify-center items-center ml-1 text-sm">
                    {likeCount}
                  </p>
                </li>
                <li
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => navigate("/basket")}
                >
                  <FaShoppingBag className=" text-lg ml-4" />
                  <p className="bg-black rounded-full text-white w-5 h-5 flex justify-center items-center ml-1 text-sm">
                    {basketCount}
                  </p>
                </li>
                {user.uid === process.env.REACT_APP_HOST_USER_UD && (
                  <MdLibraryAdd
                    className=" text-lg ml-4 cursor-pointer"
                    onClick={() => navigate("/register")}
                  />
                )}
              </ul>
              <p className="text-sm ml-4">{user.displayName}</p>
              <p
                className="cursor-pointer text-sm ml-2"
                onClick={() => action.signOut()}
              >
                Logout
              </p>
            </div>
          ) : (
            <p className="cursor-pointer" onClick={() => action.signIn()}>
              Login
            </p>
          )}
        </div>
      </div>
    </nav>
  );
}
