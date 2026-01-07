import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsFillCartPlusFill, BsThreeDots } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContextCard } from "../context/CartContext";
import { useContext } from "react";
import { LikeContextCard } from "../context/LikeContext";
import { CiStar } from "react-icons/ci";
const Card = ({ el }) => {
  const { cart, addToCart, removeToCart } = useContext(CartContextCard);
  const { like, addToLike , removeToLike } = useContext(LikeContextCard);

  return (
    <div className="max-w-[400px] group w-full p-5 rounded-2xl bg-white transition duration-1000">
      <div className="relative w-full h-[230px] ">
        <img
          className="object-contain w-full h-full "
          src={el.thumbnail}
          alt={el.title}
        />
        <div className=" items-center opacity-0 group-hover:opacity-100 duration-300 flex justify-center gap-2 bg-gray-200/50 rounded-2xl absolute top-0 left-0 w-full h-full">
          {like?.find((item) => item === el.id) ? (
            <button
              onClick={() => removeToLike(el.id)}
              className="cursor-pointer w-[50px] flex items-center justify-center h-[50px] flex items-center justify-center rounded-full bg-white"
            >
              <FaHeart className="text-red-500 text-[24px]" />
            </button>
          ) : (
            <button
              onClick={() => addToLike(el.id)}
              className="cursor-pointer w-[50px] flex items-center justify-center h-[50px] flex items-center justify-center rounded-full bg-white"
            >
              <FaRegHeart className="text-red-500 text-[24px]" />
            </button>
          )}
          {cart?.find((item) => item?.id === el?.id) ? (
            <button
              onClick={() => removeToCart(el)}
              className="cursor-pointer w-[50px] flex items-center justify-center h-[50px] flex items-center justify-center rounded-full bg-white"
            >
              <BsFillCartDashFill className="text-[24px]" />
            </button>
          ) : (
            <button
              onClick={() => addToCart(el)}
              className="cursor-pointer w-[50px] flex items-center justify-center h-[50px] flex items-center justify-center rounded-full bg-white"
            >
              <BsFillCartPlusFill className="text-[24px]" />
            </button>
          )}
          <Link
            to={`/cart/${el.id}`}
            className="w-[50px] flex items-center justify-center h-[50px] flex items-center justify-center rounded-full bg-white"
          >
            <BsThreeDots className="text-[24px]" />
          </Link>
        </div>
      </div>
      <h1 className="mt-2 text-[24px] font-bold line-clamp-1">{el.title}</h1>
      <p className="mt-2 line-clamp-2 text-gray-500 italic">{el.description}</p>
      <div className="flex items-center mt-1 px-2 justify-between">
        <p className="font-bold pt-2">${el.price}</p>
        <p className="font-bold pt-2 text-yellow-400 flex items-center"><CiStar className="text-yellow-400 text-2xl"/>{el.rating}</p>
      </div>
    </div>
  );
};

export default Card;
