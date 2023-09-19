import React from 'react'
import { useState } from 'react'
import { VscMenu } from 'react-icons/vsc'
import { GrClose } from 'react-icons/gr'
import Logo from '../images/jipalogonew.png'
import { navLinks } from '../constants/index'
import Divider from './Divider'

import ResponsiveDialog from './ResponsiveDialog'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle)
  }

  const handleNavClick = (targetId) => {
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="  flex py-4   ">
      <img className="w-24 md:w-24 " alt="Logo" src={Logo} />

      <ul className="list-none text-lg font-normal sm:flex hidden space-x-7 justify-end items-center flex-1  ">
        {navLinks.map((link) => (
          <li
            className="hover:cursor-pointer decoration-4 hover:underline underline-offset-8 decoration-gray-800"
            key={link.id}
            onClick={() => handleNavClick(link.targetId)}
          >
            {link.title}
          </li>
        ))}

        <ResponsiveDialog />
      </ul>

      <div className="sm:hidden flex flex-1  justify-end items-center">
        <div onClick={handleToggle}>
          {toggle ? <GrClose size={25} /> : <VscMenu size={25} />}

          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            }   absolute top-14 right-0   px-5 py-5  min-w-[160px] rounded-sm sidebar`}
          >
            <Divider />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
