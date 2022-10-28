import React from 'react'
import Card from './Card'

const HeroSection = () => {
    return (
        <div className='flex flex-col items-center lg:justify-center px-5 lg:h-[calc(100vh-64px)]'>
            <h2 className='text-2xl md:text-3xl my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
            <div className='grid md:grid-cols-3 grid-cols-2 gap-2 lg:gap-4 my-4'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <h2 className='text-2xl md:text-4xl my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
        </div>
    )
}

export default HeroSection