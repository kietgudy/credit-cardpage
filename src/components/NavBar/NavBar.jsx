import React, { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import useDarkMode from "../../hooks/useDarkMode";

const NavBar = (props) => {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode(); // Sử dụng destructuring để lấy giá trị trả về từ hook

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex items-center">
      <div className="flex items-center gap-2">
        <div className="text-20 font-bold mr-2">NerdCard</div>
        {isDarkMode ? (
          <BsSunFill
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={toggleDarkMode}
          />
        ) : (
          <FaMoon
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={toggleDarkMode}
          />
        )}
      </div>
      <ul className="md:flex sm:flex ml-auto text-16 font-semibold ">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <>
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
          </>
        )}
        {openMenu && (
          <div className="absolute right-10 mt-2 bg-white text-black p-8 text-center text-16">
            <li className="btn-hover">Features</li>
            <li className="btn-hover">Menu</li>
            <li className="btn-hover">Our Story</li>
            <li className="btn-hover">Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
