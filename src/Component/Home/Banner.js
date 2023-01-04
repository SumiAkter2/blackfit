import React from "react";
import { NavLink } from "react-router-dom";
import brandLogo from "../../img/1471828-middle-removebg-preview.png";
import "./Banner.css";
const Banner = ({ children }) => {
  return (
    <div className="banner-container">
      <div className="banner-content opacity-50">
    {/* navbar section */}
          <div className="drawer drawer-end fixed top-0 text-primary">
            <input
              id="  my-drawer-3"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content  flex flex-col">
              <div className="w-full navbar  lg:px-12   ">
                <div className="flex-1 px-2 lg:mx-2 font-bold text-2xl">
                  <img
                    style={{ width: "70px" }}
                    src={brandLogo}
                    alt="bitcoin-logo"
                  />
                  <h2 className="text-primary lg:text-4xl text-2xl font-serif">BlackFit</h2>
                </div>

                <div className="flex-none lg:hidden">
                  <label
                    for="  my-drawer-3"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>

                <div className="flex-none hidden lg:block  ">
                  <ul className="menu  menu-horizontal gap-x-2  ">
                    <li>
                      <NavLink className="rounded-md h-12 my-auto" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="rounded-md h-12 my-auto" to="/coin">
                        Coins
                      </NavLink>
                    </li>

                    <li>
                      <NavLink className="rounded-md h-12 my-auto" to="/about">
                        About
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className="rounded-md h-12 my-auto"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              {children}
            </div>
            <div className="drawer-side   ">
              <label for="  my-drawer-3" className="drawer-overlay"></label>
              <ul className="menu p-2 overflow-y-auto w-80 bg-base-100">
                <li>
                  <NavLink className="rounded-md h-12 my-auto" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="rounded-md h-12 my-auto" to="/coin">
                    Coins
                  </NavLink>
                </li>

                <li>
                  <NavLink className="rounded-md h-12 my-auto" to="/about">
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink className="rounded-md h-12 my-auto" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
              </div>
              {/* banner text */}
              <div>
                  
              </div>
        </div>
      </div>
   
  );
};

export default Banner;
