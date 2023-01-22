import React, { useEffect, useState } from "react";
import { useAuthentication } from "../context/AuthProvider";
import { MdLibraryAdd } from "react-icons/md";
import { FaShoppingBag, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { readBasketProduct, readLikeProduct } from "../service/database";

const CATECORIES = ["Men", "Women", "Bag", "Shoes"];

export default function Header() {
  const { user, action } = useAuthentication();
  const [likeCount, setLikeCount] = useState(0);
  const [basketCount, setBasketCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    action.onAuthChange();
  }, []);

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

  return (
    <hedaer className="flex justify-between items-center p-5 px-32 h-20 fixed w-full z-10 bg-white">
      <div className="flex items-center">
        <p className="text-3xl  cursor-pointer" onClick={() => navigate("/")}>
          Chann
        </p>
        <ul className="flex items-center ml-8">
          {CATECORIES.map((catecory) => (
            <li
              className="mr-3 cursor-pointer text-lg"
              key={catecory}
              onClick={() => navigate(`catecories/${catecory}`)}
            >
              {catecory}
            </li>
          ))}
        </ul>
      </div>
      {user ? (
        <div className="flex items-center">
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
    </hedaer>
  );
}
