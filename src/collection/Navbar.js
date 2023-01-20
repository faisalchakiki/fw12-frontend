import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <nav className="px-[50px] lg:px-[120px] flex items-center w-full">
        <h1 className="text-[30px] text-black font-semibold italic mx-auto">
          <span className="text-[#fca311]">CINE</span>PHILE
        </h1>
        <div className="flex flex-1 ml-8 text-[19px] font-semibold text-[#414141] hidden md:block">
          <Link to="/" className="mx-3">
            Home
          </Link>
          <Link to="/listMovie" className="mx-3">
            List Movie
          </Link>
        </div>
        <Link to="/login">
          <Button
            value="Sign In"
            class="h-[30px] w-[100px] rounded-[5px] py-0 hidden md:block"
          ></Button>
        </Link>
      </nav>
      <div className="px-[50px] lg:px-[120px] flex items-center w-full md:hidden">
        <div className="flex flex-1  text-[18px] font-semibold text-[#414141]">
          <Link to="/homepage" className="mx-2 text-[15px]">
            Home
          </Link>
          <Link to="/listMovie" className="mx-2 text-[15px]">
            List Movie
          </Link>
        </div>
        <Link to="/login">
          <Button
            value="Sign In"
            class="h-[30px] w-[100px] rounded-[5px] py-0"
          ></Button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
