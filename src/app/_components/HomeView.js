"use client"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

export default function HomeView() {
    const [furniture, setFurniture] = useState('');
    return (
        <div className='bg-[url("/img/home.jpg")] bg-no-repeat bg-cover h-[100vh] w-[100vw] bg-red-400 overflow-hidden pt-36 flex gap-10 flex-col items-center justify-start text-white'>
            <div className="font-semibold text-5xl text-center max-w-[750px] leading-[4.5rem]">
                Make Your Interior More Minimalistic & Modern
            </div>
            <div className="text-sm max-w-[400px] text-center opacity-65">Turn your room with planto into a lot more minimalistic and modern with ease and speed</div>
            <div className="px-2 py-[2px] bg-orange-100/20 ring-1 ring-gray-100 rounded-3xl flex items-center justify-center">
                <input type="text" placeholder='search furniture' value={furniture} onChange={e => setFurniture(e.target.value)} className='bg-transparent py-[10px] px-3 placeholder:text-gray-300' />
                <FontAwesomeIcon icon={faSearch} size='sm' className='bg-yellow-500 p-[10px] rounded-full text-lg cursor-pointer hover:bg-orange-300' />
            </div>
        </div>
    )
}
