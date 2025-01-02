import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        {/* //HEADER SECTION */}
      <header className="flex items-center justify-between"> 
        <Link className="text-primary text-2xl font-semibold" href="">
          Tamz Crust
        </Link>
        <nav className="gap-8 flex items-center text-gray-500 font-semibold ">
          <Link className='hover:text-primary' href={" "}>Home</Link>
          <Link className='hover:text-primary' href={" "}>Menu</Link>
          <Link className='hover:text-primary' href={" "}>About</Link>
          <Link className='hover:text-primary' href={" "}>Contact</Link>
          <Link  href={" "} className="bg-primary text-white px-8 py-2 rounded-full hover:text-black ">Login</Link>
        </nav>
      </header>
    </div>
  )
}

export default Header