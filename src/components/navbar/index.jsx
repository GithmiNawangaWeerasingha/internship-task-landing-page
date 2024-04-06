import React, { useState } from "react";
import logoimage from "../../assets/images/logoimage.png";
import closed_mark from "../../assets/images/closed_mark.png";
import menu from "../../assets/images/menu.png";

function Navbar() {
  const [active, setActive] = useState("SERVICES");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="w-full flex py-6 justify-between items-center navbar bg-primary sm:px-14 px-6">
        <img src={logoimage} alt="AT DIGITAL" className="w-[238.89px] h-[36.11px]" />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          <li
            className={`font-inter text-white font-medium cursor-pointer text-sm mr-6 ${
              active === "SERVICES" && "!text-accent1"
            }`}
            onClick={() => setActive("SERVICES")}
          >
            <a href="/services">SERVICES</a>
          </li>
          <li
            className={`font-inter text-white font-medium cursor-pointer text-sm mr-6 ${
              active === "ABOUT US" && "!text-accent1"
            }`}
            onClick={() => setActive("ABOUT US")}
          >
            <a href="/about-us">ABOUT US</a>
          </li>
          <li
            className={`font-inter text-white font-medium cursor-pointer text-sm mr-6 ${
              active === "CONTACT US" && "!text-accent1"
            }`}
            onClick={() => setActive("CONTACT US")}
          >
            <a href="/contact-us">CONTACT US</a>
          </li>
          <li
            className={`font-inter text-white font-medium cursor-pointer text-sm mr-6 ${
              active === "CAREERS" && "!text-accent1"
            }`}
            onClick={() => setActive("CAREERS")}
          >
            <a href="/careers">CAREERS</a>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? closed_mark : menu}
            alt="menu"
            className={`w-[28px] h-[28px] object-contain z-20 ${
              !toggle && "grayscale"
            }`}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white absolute top-0 right-0 min-w-full z-10 sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              <li
                className={`font-inter text-black font-medium cursor-pointer text-sm mr-6 mb-12 mt-2 ${
                  active === "HOME" && "!text-primary"
                }`}
                onClick={() => setActive("HOME")}
              >
                <a href="/">HOME</a>
              </li>
              <li
                className={`font-inter text-black font-medium cursor-pointer text-sm mr-6 mb-12 mt-2 ${
                  active === "SERVICES" && "!text-primary"
                }`}
                onClick={() => setActive("SERVICES")}
              >
                <a href="/services">SERVICES</a>
              </li>
              <li
                className={`font-inter text-black font-medium cursor-pointer text-sm mr-6 mb-12 mt-2 ${
                  active === "ABOUT US" && "!text-primary"
                }`}
                onClick={() => setActive("ABOUT US")}
              >
                <a href="/about-us">ABOUT US</a>
              </li>
              <li
                className={`font-inter text-black font-medium cursor-pointer text-sm mr-6 mb-12 mt-2 ${
                  active === "CONTACT US" && "!text-primary"
                }`}
                onClick={() => setActive("CONTACT US")}
              >
                <a href="/contact-us">CONTACT US</a>
              </li>
              <li
                className={`font-inter text-black font-medium cursor-pointer text-sm mr-6 mb-12 mt-2 ${
                  active === "CAREERS" && "!text-primary"
                }`}
                onClick={() => setActive("CAREERS")}
              >
                <a href="/careers">CAREERS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
