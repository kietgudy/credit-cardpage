import React, { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">Navbar</div>
        <BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" />
      </div>
      <ul className="ml-auto text-16 font-semibold ">
        {openMenu ? (
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        )}
        {openMenu && (
          <div className="absolute right-10 mt-2 bg-white text-black p-8 text-center text-13">
            <li className="cursor-pointer flex flex-col items-start py-2 px-4 hover:bg-slate-400">
              Features
            </li>
            <li className="cursor-pointer flex flex-col items-start py-2 px-4 hover:bg-slate-400">
              Menu
            </li>
            <li className="cursor-pointer flex flex-col items-start py-2 px-4 hover:bg-slate-400">
              Our Story
            </li>
            <li className="cursor-pointer flex flex-col items-start py-2 px-4 hover:bg-slate-400">
              Contact
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
