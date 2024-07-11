import React from 'react';
import logo from '../../assets/logo/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { Input, Typography } from "@material-tailwind/react";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineManageAccounts } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { RiMenuFill } from "react-icons/ri";
const Navbar = () => {
  const navLinks = <>
  <NavLink
  to="/"
  className={({ isActive, isPending, isTransitioning }) =>
    [
      isPending ? "pending" : "",
      isActive ? "border-b-4 border-green-400 text-[13px] font-bold " : "",
      isTransitioning ? "transitioning" : "",
    ].join(" ")
  }
>
 HOME
</NavLink>
  <NavLink
  to="/register"
  className={({ isActive, isPending, isTransitioning }) =>
    [
      isPending ? "pending" : "",
      isActive ? "border-b-4 border-green-400 text-[13px] font-bold" : "",
      isTransitioning ? "transitioning" : "",
    ].join(" ")
  }
>
 SIGNUP 
</NavLink>
  <NavLink
  to="/login"
  className={({ isActive, isPending, isTransitioning }) =>
    [
      isPending ? "pending" : "",
      isActive ? "border-b-4 border-green-400 text-[13px] font-bold" : "",
      isTransitioning ? "transitioning" : "",
    ].join(" ")
  }
>
 SIGNIN
</NavLink>
  </>
  return (
    <div>
      <div className=" bg-base-100">
  <a className="btn btn-ghost text-xl">daisyUI</a>
</div>
      {/* Second Navbar */}
      <div className="navbar  -top-10 bg-white text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost text-4xl lg:hidden">
      <RiMenuFill />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
     {navLinks}
      </ul>
    </div>
    
    <Link className='w-16' to={"/"}> <img src={logo} alt="" /></Link>
    <div className="ml-16 hidden lg:flex">
    <ul className="menu menu-horizontal px- gap-3">
      {navLinks}
    </ul>
  </div>
  </div>
  <div className="w-full -mr-28 md:block hidden">
      <Input label="Search" className='rounded-full' icon={<IoIosSearch />} />
     
    </div>
  
  <div className="navbar-end">
  <div className='flex gap-3'>
    <Link className='text-[19px] font-bold '><HiOutlineShoppingBag /></Link>
    <Link className='text-[19px]  font-bold '><MdOutlineManageAccounts /></Link>
    <Link className='text-[19px]  font-bold '><GiSelfLove /></Link>
    </div>
   <div>
    <img src={logo} className='w-16  rounded-full' alt="" />
   </div>
  </div>
</div>
    </div>
  );
};

export default Navbar;