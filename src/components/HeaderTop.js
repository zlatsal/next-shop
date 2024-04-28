import React from "react";

import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b borfer-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div>
            <ul className="hidden lg:flex gap-1">
              <li className="header_top__icon_wrapper">
                <BsFacebook />
              </li>
              <li className="header_top__icon_wrapper">
                <BsTwitter />
              </li>
              <li className="header_top__icon_wrapper">
                <BsInstagram />
              </li>
              <li className="header_top__icon_wrapper">
                <BsLinkedin />
              </li>
            </ul>
          </div>
          <div className="text-gray-500 text-md">
            <strong>FREE SHIPPING</strong>
            THIS WEEK ORDER OVER - $55
          </div>
          <div className="flex gap-4">
            <select
              name="currency"
              id="currency"
              className="text-gray-500 text-[12px] w-[70px]"
            >
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
            </select>
            <select
              name="language"
              id="language"
              className="text-gray-500 text-[12px] w-[80px]"
            >
              <option value="English">English</option>
              <option value="Deutsch">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
