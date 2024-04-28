import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <ul className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <li className="navbar__link relative">HOME</li>
          <li className="navbar__link relative">DAILY SPECIAL</li>
          <li className="navbar__link relative">{`MEN'S`}</li>
          <li className="navbar__link relative">{`WOMEN'S`}</li>
          <li className="navbar__link relative">ACCESSORIES</li>
          <li className="navbar__link relative">SHOES</li>
          <li className="navbar__link relative">BLOG</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
