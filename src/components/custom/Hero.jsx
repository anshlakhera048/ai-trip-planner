import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
        <h1
            className='font-extrabold text-[50px] text-center mt-16'
        ><span className='text-[#f56551]'>Discover Everything you're planning your Trip for</span> with AI Itenary Planner
        </h1>
        <p className='text-center text-xl text-gray-500'>
        You used modular code (breaking down the application into small, reusable components) and clean architecture, allowing for easier addition of new features in the future without breaking the existing functionality.
        </p>
        
        <Link to={'/create-trip'}>
         <Button>Get started, it's Free</Button>
        </Link>
       
    </div>
  )
}

export default Hero 