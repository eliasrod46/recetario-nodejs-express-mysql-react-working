import "./NavBar.css";
import { NavLink } from "./NavLink";
import { useState } from "react";

export function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="px-4 py-2 text-grey-800 flex  justify-between bg-white bg-opacity-50 rounded-t-2xl">
      <h1>LOGO</h1>
      <div
        className={
          toggleMenu
            ? "md:flex  md:pt-0 pt-10 w-full md:w-auto"
            : "hidden md:flex"
        }
      >
        <ul>
          <li className="dropdown md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3 relative">
            <NavLink to="/dashboard">Inicio</NavLink>
          </li>
          <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
            <NavLink to="/tipos">Tipos</NavLink>
          </li>
          <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
            <NavLink to="/ingredientes">ingredientes</NavLink>
          </li>
          <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
            <NavLink to="/recetas">recetas</NavLink>
          </li>
        </ul>
      </div>

      {/* mobile icon menu */}
      <div className="cursor-pointer md:hidden">
        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          htmlFor="menu-btn"
        >
          <span
            onClick={handleToggle}
            className="navicon bg-white-darkest flex items-center relative"
          ></span>
        </label>
      </div>
    </div>
  );
}
