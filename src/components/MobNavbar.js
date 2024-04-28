import React from "react";

import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";

const MobNavbar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] px-8">
      <ul className="flex justify-between text-[28px] py-2">
        <li>
          <IoMenuOutline />
        </li>
        <li className="relative">
          <HiOutlineShoppingBag />
          <span className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            0
          </span>
        </li>
        <li>
          <AiOutlineHome />
        </li>
        <li>
          <FiHeart />
        </li>
        <li>
          <AiOutlineAppstore />
        </li>
      </ul>
    </div>
  );
};

export default MobNavbar;
