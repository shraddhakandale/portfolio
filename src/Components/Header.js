import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav className='bg-[#0F0F0F] text-white font-semibold'>
            <ul className='flex gap-8 justify-end p-4 pr-10'>
                <li className='p-2'><Link to="/">Home</Link></li>
                <li className='p-2'><Link to="/projects">Projects</Link></li>
                <li className='p-2'><Link to="/about">About</Link></li>
                <li className='p-2'><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header