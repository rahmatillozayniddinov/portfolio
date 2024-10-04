import { NavData, NavLogo } from "../util/Nav";
import React, { useState } from "react";
import {Link} from "react-scroll"
import { menu, close } from "../assets";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
function Navbar() {
  const [toogleNav, setToogleNav] = useState(false);
  const [active, setActive] = useState("Home");
  const toogleHandler = () => setToogleNav((prev) => !prev);
  const activeHandler = (id) => setActive(id);
  return (
    <div className="w-full h-[80px] transparent flex items-center sm:justify-around  justify-between gap-[145px]">
      <div className=" sm:px-[10px] pr-5 sm:w-[400px] w-[200px]">
        <h2 className="text-white cursor-pointer hover:text-orange-100">
          {NavLogo.map((NavLogo) => (
            <div key={NavLogo.id}>
              <img src={NavLogo.mylogoImg} alt="" />
            </div>
          ))}
        </h2>
      </div>
      <ul className="sm:flex hidden pr-10 items-center">
        <li className="flex gap-5">
          {NavData.map((nav, idx) => (
            <li
              key={nav.id}
              className={`
                     font-montserrat  font-normal  cursor-pointer text-[18px]  text-black  
                    ${idx === NavData.length - 1 ? "mr-5" : "mr-8"} 
                    ${active === nav.id ? "text-white" : "text-white-100"}
                    hover:text-white transition-all duration-500 `}
              onClick={() => activeHandler(nav.id)}
            >
              <Link to={nav.to} spy={true} smooth={true} offset={50} duration={500}>{nav.title}</Link>
            </li>
          ))}
        </li>
        <div className="md:flex hidden px-0 ml-10 gap-5 text-[22px]">
          <BsFacebook className="text-white cursor-pointer" />
          <BsGithub className="text-white cursor-pointer" />
          <BsInstagram className="text-white cursor-pointer" />
        </div>
      </ul>
      <div className={"sm:hidden flex flex-1 justify-end  items-center"}>
        <img
          src={toogleNav ? close : menu}
          alt="nav"
          className={"w-[30px] h-[30px] object-contain mr-3"}
          onClick={toogleHandler}/>
        <div className={`
                    ${
                      !toogleNav ? "hidden " : "flex"
                    } p-6  absolute top-20 r-0 l-0  w-full sidebar bg-black-gradient`}>
          <ul className="list-none flex justify-center items-center w-full">
            {NavData.map((nav, idx) => (
              <li
                key={nav.id}
                className={`
                                font-montserrat  font-normal  cursor-pointer  text-[12px]  text-white  ${
                                  idx === NavData.length - 1
                                    ? "mr-1"
                                    : "ss:mr-10 mr-10"
                                }
                                  ${
                                    active === nav.id
                                      ? "text-black"
                                      : "text-white-100"
                                  }
                                 hover:text-lightWhite transition-all duration-500`}
                onClick={() => activeHandler(nav.id)}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
