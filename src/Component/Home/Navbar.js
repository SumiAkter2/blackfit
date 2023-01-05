import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";
import BrandLogo from "../../img/1471828-middle-removebg-preview.png";
import { navMenu } from "../../info";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div className="navbar bg-black text-white ">
        <div className={` navbar-start`}>
                  <a className="btn btn-ghost normal-case text-xl" href="/">
                      <img src={BrandLogo} alt="brandLogo" className="w-12 h-12" />
            BlackFit
          </a>
        </div>
        {/* for desktop */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            {navMenu.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* for mobile */}
        <div className="navbar-end">
          <div
            onClick={() => setMenu(!menu)}
            className="cursor-pointer text-4xl mr-[10px] lg:hidden"
          >
            {menu ? <AiOutlineClose /> : <HiMenuAlt2 />}
          </div>
          <ul
            className={`${
              menu ? "max-h-60 p-8" : "max-h-0 p-0"
            } flex flex-col absolute w-full  top-24 bg-red-200 text-secondary left-0 shadow-lg space-y-6 overflow-hidden transition-all lg:hidden`}
          >
            {navMenu.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
