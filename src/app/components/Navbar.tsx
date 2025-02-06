'use client'
import React,{useState} from "react";
import Link from "next/link";
import { NavbarMenu } from "../mockData/data";
import ResponsiveMenu from "./ResponsiveMenu";
//from react icon
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import { li } from "motion/react-client";

interface NavbarMenu {
  id: number;
  title: string;
  link: string;
}
interface ResponsiveProps {
    open: boolean;
 
}

function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-50 shadow-md ">
      <div className="container flex justify-between items-center py-8">
        {/* Logo */}
        <Link href={"/"}>
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell className="" />
            <p>Inwza</p>
            <p className="text-secondary">Gym</p>
          </div>
        </Link>
        {/* Menu */}
        <div className="hidden md:block text-lg">
          <ul className="flex items-center gap-5 font-bold">
            {NavbarMenu.map((item: NavbarMenu) => {
              return (
                <li key={item.id} className="hover:text-primary">
                  <Link href={item.link}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Icons */}
        <div className="flex items-center justify-between gap-4">
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <CiSearch className="" />
          </button>
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <PiShoppingCartThin className="" />
          </button>
          <button className="hover:bg-primary text-primary border-primary border-2 font-semibold hover:text-white rounded-md  px-4 py-2 duration-200 hidden md:block">
            Login
          </button>
        </div>

        {/* Mobile hamburger menu */}
        <div className="md:hidden" onClick={()=>setOpen(!open)}>
            <MdMenu className="text-4xl" />
        </div>
        {/* Mobile Sidebar section */}
        <ResponsiveMenu open={open} />
      </div>
      
    </nav>
  );
}

export default Navbar;
