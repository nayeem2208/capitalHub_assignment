import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='w-full h-16 md:flex justify-between items-center'>
     <div className='w-1/3 bg-red-500'>{''}</div>
     <nav className='navbar md:w-1/3 mt-6 mb-2 md:mt-0 md:mb-0 flex justify-center'>
        <ul className='flex font-semibold'>
            <li ><Link to='/home'>Home</Link></li>
            <li><Link to='/aboutUs'>About Us</Link></li>
            <li><Link to='/contactUs'>Contact Us</Link></li>
        </ul>
     </nav>
     <nav className='mx-5 md:w-1/3  flex justify-center font-semibold '>
        <button className='rounded md:rounded-full text-xs md:text-base border border-mainColor md:py-1 md:px-6 mx-2'>Donate</button>
        <button className='bg-mainColor text-xs md:text-base rounded md:rounded-full p-1 md:py-2 md:px-6 text-white'>Sign In</button>
     </nav>
    </header>
  )
}

export default Header
