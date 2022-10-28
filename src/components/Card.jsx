import React from 'react'
const pc = require('../Assets/pc.png')

const Card = () => {
  return (
    <div className=' w-[150px] flex justify-center items-center lg:w-[300px] lg:h-[150px] rounded p-2 bg-[#080808] sm:h-auto flex-col lg:flex-row hover:cursor-pointer hover:border-2 border-[#1183ca]'>
        <div className="left w-[150px]">
            <img className='w-[150px]' src={pc} alt="img" />
        </div>
        <div className="right flex flex-col items-center w-[150px] px-2">
            <h1 className='text-lg'>Cyber Squad</h1>
            <p className='text-center text-xs text-gray-500'>Lorem ipsum dolor sit amet elit sit amet elit sit amet sit amet elit.</p>
            <button className='text-sm bg-[#242424] rounded px-2 py-1 mt-2'>Intrested</button>
        </div>
    </div>
  )
}

export default Card