import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto">
                <div className="navbar bg-base-100 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>
                        </div>
                        <Link className="normal-case text-2xl font-bold " to="/">SM FOOD Shop</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/addProduct">Add Product</Link></li>
                            <li><Link to="/myProduct">My Product</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to="/login" className="btn">Login</Link>
                    </div>
                </div>
            </div>
            
    </>
  );
};

export default Navbar;
