import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='w-full h-16 flex justify-between items-center'>
     <div className='w-1/3 bg-red-500'>{''}</div>
     <nav className='navbar w-1/3  flex justify-center'>
        <ul className='flex font-semibold'>
            <li ><Link to='/home'>Home</Link></li>
            <li><Link to='/aboutUs'>About Us</Link></li>
            <li><Link to='/contactUs'>Contact Us</Link></li>
        </ul>
     </nav>
     <nav className='mx-5 w-1/3  flex justify-center font-semibold '>
        <button className='rounded-full border border-mainColor py-1 px-6 mx-2'>Donate</button>
        <button className='bg-mainColor rounded-full py-2 px-6 text-white'>Sign In</button>
     </nav>
    </header>
  )
}

export default Header
