import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="bg-[#0F0F0F] text-white font-semibold">
        <ul className="flex gap-8 justify-end p-4 pr-10">
          <li className="p-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-2 ${isActive ? "border-b-2 border-[#034948]" : "hover:border-b-2 hover:border-[#034948]"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `p-2 ${isActive ? "border-b-2 border-[#034948]" : "hover:border-b-2 hover:border-[#034948]"}`
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `p-2 ${isActive ? "border-b-2 border-[#034948]" : "hover:border-b-2 hover:border-[#034948]"}`
              }
            >
              About
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `p-2 ${isActive ? "border-b-2 border-[#034948]" : "hover:border-b-2 hover:border-[#034948]"}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
