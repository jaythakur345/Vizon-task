import React, { useState } from 'react';

const logo = require('../Assets/logo1.png')

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = ()=>{
        setOpen(!open);
    }
    return (
        <div className=' w-full h-[64px] bg-[#000] flex justify-between items-center px-3 py-2 sticky top-0 z-50'>
            <div className="left h-full">
                <img className='w-[60px]' src={logo} alt="Logo" />
            </div>
            <div className="right text-white">
                <ul className='hidden md:flex'>
                    <li className='mr-8'><a href='/' className='font-medium text-xl hover:text-[#1183ca]'>Products</a></li>
                    <li className='mr-8'><a href='/' className='font-medium text-xl hover:text-[#1183ca]'>Club</a></li>
                    <li className='mr-8'><a href='/' className='font-medium text-xl hover:text-[#1183ca]'>Get in Touch</a></li>
                </ul>
            </div>
            <div className="hamburger md:hidden" onClick={handleOpen}>
                {!open ? <i className="fa-solid fa-bars text-2xl text-[#1183ca]"></i> : <h2 className='text-2xl text-[#1183ca]'>X</h2>}
            </div>
            {
                open?<div className='absolute right-0 top-[66px] w-[100%] h-[calc(100vh-64px)] p-3 bg-gray-500'>
                <ul className='flex flex-col justify-around items-center w-full h-full'>
                    <li className='mr-8'><a href='/' className='font-medium text-xl hover:text-[#1183ca]'>Products</a></li>
                    <li className='mr-8'><a href='/' className='font-medium text-xl hover:text-[#1183ca]'>Club</a></li>
                    <li className='mr-8'><a href='/' className='font-medium text-xl hover:text-[#1183ca]'>Get in Touch</a></li>
                </ul>
            </div>
            :""
            }
            
        </div>
    )
}

export default Navbar