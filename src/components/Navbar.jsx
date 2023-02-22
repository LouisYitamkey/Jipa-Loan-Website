import React from "react";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import Logo from "../images/pavelonlogo.png";
import { navLinks } from "../constants/index";
import Button from '@mui/material/Button';
import ResponsiveDialog from "./ResponsiveDialog";




const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <nav className="w-full bg-blackn flex py-6 justify-between items-center ">
      <img className="w-[124px] h-[32px]" alt="Logo" src={Logo} />

      <ul className="list-none text-lg font-normal sm:flex hidden space-x-7 justify-end items-center flex-1  ">
        {navLinks.map((link) => (
          <li className="hover:cursor-pointer decoration-2 hover:underline underline-offset-8 decoration-gray-800"  key={link.id}>{link.title}</li>
        ))}
       
          <ResponsiveDialog/>

      </ul>

      <div className="sm:hidden flex flex-1  justify-end items-center">
        <div onClick={handleToggle}>
          {toggle ? <GrClose size={25} /> : <VscMenu size={25} />}

          <div
            className={`${
              toggle ? "flex" : "hidden"
            }  bg-blue-200 absolute top-20 right-0 mr-6 px-5 py-5  min-w-[160px] rounded-sm sidebar`}
          >
           
            <ul className="list-none  font-normal text-sm text-white flex-col justify-end items-center flex-1  ">
              {navLinks.map((link) => (
                <li key={link.id} className="pl-2 pr-16 py-2 font-bold text-lg">
                 
                  
                  {link.title}
               
                </li>
              
              ))}
 
            </ul>
         
                  
          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
