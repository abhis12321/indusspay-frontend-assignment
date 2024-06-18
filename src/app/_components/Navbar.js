import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Navbar() {
  return (
    <div className='h-16 overflow-hidden flex items-center justify-between px-5 md:px-8 text-white sticky'>
      <div className="font-extrabold text-xlcursor-pointer">
        Planto
      </div>
      <div className="flex items-center justify-evenly gap-10 font-light">
        <div className="cursor-pointer">furniture</div>
        <div className="cursor-pointer">shop</div>
        <div className="cursor-pointer">about us</div>
        <div className="cursor-pointer">contact</div>
      </div>
      <div className="cursor-pointer">
        <FontAwesomeIcon icon={faBagShopping} size='1x' className='h-7' />
      </div>
    </div>
  )
}
