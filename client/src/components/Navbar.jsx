import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
        <NavLink>
          <img className="h-9" src={assets.logo} alt="logo" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">All Product</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
            <img
              src={assets.search_icon}
              alt="search icon"
              className="h-4 w-4"
            />
          </div>

          <div className="relative cursor-pointer">
            <img
              src={assets.nav_cart_icon}
              alt="cart"
              className="w-6 opacity-80"
            />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-primary-dull w-[18px] h-[18px] rounded-full">
              3
            </button>
          </div>

          <button className="cursor-pointer px-8 py-2 bg-primary-dull hover:bg-primary transition text-white rounded-full">
            Login
          </button>
        </div>

        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          {/* Menu Icon SVG */}
          <img src={assets.menu_icon} alt="menu" />
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>
            All Product
          </NavLink>
          <NavLink to="/orders" onClick={() => setOpen(false)}>
            My Orders
          </NavLink>
          <button className="cursor-pointer px-6 py-2 mt-2 bg-primary-dull hover:bg-primary transition text-white rounded-full text-sm">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
