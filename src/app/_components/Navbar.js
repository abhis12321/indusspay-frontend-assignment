import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Navbar() {
  return (
    <div className='h-16 w-full overflow-hidden flex items-center justify-between px-5 md:px-10 text-white fixed top-0 left-0'>
      <div className="font-extrabold text-2xl cursor-pointer hover:text-green-400 drop-shadow-[0_0_2px_black]">
        Planto
      </div>
      <div className="flex items-center justify-evenly gap-10 text-md">
        <div className="cursor-pointer hover:text-green-400 drop-shadow-[0_0_2px_black]">furniture</div>
        <div className="cursor-pointer hover:text-green-400 drop-shadow-[0_0_2px_black]">shop</div>
        <div className="cursor-pointer hover:text-green-400 drop-shadow-[0_0_2px_black]">about us</div>
        <div className="cursor-pointer hover:text-green-400 drop-shadow-[0_0_2px_black]">contact</div>
      </div>
      <div className="cursor-pointer hover:text-orange-400 drop-shadow-[0_0_2px_black]">
        <FontAwesomeIcon icon={faBagShopping} size='1x' className='h-7' />
      </div>
    </div>
  )
}
