import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='px-[130px] pt-[10px] flex items-center w-full'>
      <h1 className='text-[30px] text-black font-semibold italic'>CINEPHILE</h1>
      <div className='flex flex-1 ml-8 text-[18px] font-semibold text-[#414141]'>
      <Link to='/homepage' className='mx-3'>Home</Link>
      <Link to='' className='mx-3'>List Movie</Link>
      </div>
      <Link to='/login'><Button value='Sign In' class="h-[30px] w-[100px] rounded-[5px]"></Button></Link>
    </nav>
  )
}

export default Navbar
