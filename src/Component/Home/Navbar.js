import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import "./Navbar.css";
import BrandLogo from "../../img/1471828-middle-removebg-preview.png";

import { NavLink } from "react-router-dom";
const Navbar = ({ children }) => {
  // const [menu, setMenu] = useState(false);

  return (
    <div>
      <div className="">
        <div className="drawer drawer-end fixed top-0">
          <input id="  my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <div className="flex justify-between items-center bg-black text-black opacity-80 p-4 ">
              <div className="flex justify-around w-1/2">
                <p className="text-white lg:block hidden">Park Street USA</p>
                <p className="text-white ">blackfit@gmail.com</p>
                <p className="text-white lg:block hidden">
                  Mon-Fri 08:00-18:00
                </p>
              </div>
              <div className="flex lg:justify-around  items-center  text-primary">
                <ImFacebook className="lg:mr-6 mr-2 hover:text-neutral" />
                <BsTwitter className="lg:mr-6 mr-2  hover:text-neutral" />
                <FaLinkedinIn className="lg:mr-6 mr-2 hover:text-neutral" />
              </div>
            </div>
            <div className="w-full navbar bg-black text-white p-12">
              <div className="flex-1 px-2 mx-2 font-bold text-2xl">
                <img
                  style={{ width: "70px" }}
                  src={BrandLogo}
                  alt="brand-logo"
                  className="mr-4"
                />
                <a href="/"> Best Tools co.</a>
              </div>
              <div className="flex-none lg:hidden">
                <label for="  my-drawer-3" className="btn btn-square btn-ghost">
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
                    <NavLink className="rounded-lg  my-2 " to="/">
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="rounded-lg  my-2" to="/gallery">
                      Gallery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="rounded-lg  my-2" to="/services">
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="rounded-lg  my-2" to="/signup">
                      Sign Up
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
                <NavLink className="rounded-lg  my-2 " to="/">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink className="rounded-lg  my-2" to="/blogs">
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="navbar bg-black text-white ">
        <div className={` navbar-start`}>
                  <a className="btn btn-ghost normal-case text-xl" href="/">
                      <img src={BrandLogo} alt="brandLogo" className="w-12 h-12" />
            BlackFit
          </a>
        </div>
       
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
      </div> */}
    </div>
  );
};

export default Navbar;
