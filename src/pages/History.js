import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../collection/Button'
import Footer from '../collection/Footer'
import { useDispatch } from 'react-redux';
import { logout as logoutAction } from '../redux/reducers/auth';

import Avatar from "../asset/img/avatar.png";
import Ebu from "../asset/logo/ebu.svg";
import NavUser from '../collection/NavUser'


const History = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const Logout = ()=>{
    dispatch(logoutAction())
    navigate("/login")
  }
  return (
    <>
    <NavUser></NavUser>
    <main className="flex gap-5 px-[120px] py-[50px] bg-[#f5f6f8] items-start">
      <section className="bg-white rounded-[24px] w-[25%] p-[20px]">
        <p className="">INFO</p>
        <div className="w-[60%] h-auto border-[2px] border-black my-[20px] mx-auto rounded-full">
          <img alt="" src={Avatar} className="w-full h-auto" />
        </div>
        <h4 className="text-[20px] text-[#14142b] text-center">
          Jonas El Matadora
        </h4>
        <p className="text-[#4e4b66] text-[14px] text-center">Moviegoers</p>
        <Link onClick={Logout}><Button 
            value="Logout"
            class="mt-[40px] h-[35px] py-0 w-[70%] mx-auto block"
          /></Link>
      </section>
      <section className="flex-1">
        <div className="navbar-profile bg-white rounded-[24px] p-[20px] w-[100%] flex gap-5 mb-[20px]">
          <div>
            <Link to="/profile">
              <p>Account Settings</p>
            </Link>
          </div>
          <div className="border-b-[2px] pb-1 border-[#fca311]">
            <Link to="/history">
              <p>Order History</p>
            </Link>
          </div>
        </div>
        <div className="history-ticket bg-white rounded-[24px] p-[20px] w-[100%] flex gap-5 mb-[20px] flex-col overflow-hidden">
         <div className='header flex justify-between items-center'>
            <div>
              <p className='text-[14px] text-[#aaa]'>Tuesday, 07 July 2020 - 04:30pm</p>
              <h3 className='text-[24px]'>Spider-Man: Homecoming</h3>
            </div>
            <div className='w-[20%]'>
              <img alt='cinema' src={Ebu} className="mx-auto"/>
            </div>
         </div>
         <hr className='mx-[-25px]'/>
         <div className='flex justify-between items-center'>
          <div className='bg-[#00ba88] py-[10px] w-[30%] rounded-[5px] text-white text-center'>Ticket Active</div>
          <Link to="/active"><p className='text-[#aaaaaa] text-[18px]'>See Details</p></Link>
         </div>
        </div>
        <div className="history-ticket bg-white rounded-[24px] p-[20px] w-[100%] flex gap-5 mb-[20px] flex-col overflow-hidden">
         <div className='header flex justify-between items-center'>
            <div>
              <p className='text-[14px] text-[#aaa]'>Tuesday, 07 July 2020 - 04:30pm</p>
              <h3 className='text-[24px]'>Spider-Man: Homecoming</h3>
            </div>
            <div className='w-[20%]'>
              <img alt='cinema' src={Ebu} className="mx-auto"/>
            </div>
         </div>
         <hr className='mx-[-25px]'/>
         <div className='flex justify-between items-center'>
          <div className='bg-[#6e7191] py-[10px] w-[30%] rounded-[5px] text-white text-center'>Ticket Used</div>
          <Link to="/used"><p className='text-[#aaaaaa] text-[18px]'>See Details</p></Link>
         </div>
        </div>
        <div className="history-ticket bg-white rounded-[24px] p-[20px] w-[100%] flex gap-5 mb-[20px] flex-col overflow-hidden">
         <div className='header flex justify-between items-center'>
            <div>
              <p className='text-[14px] text-[#aaa]'>Tuesday, 07 July 2020 - 04:30pm</p>
              <h3 className='text-[24px]'>Spider-Man: Homecoming</h3>
            </div>
            <div className='w-[20%]'>
              <img alt='cinema' src={Ebu} className="mx-auto"/>
            </div>
         </div>
         <hr className='mx-[-25px]'/>
         <div className='flex justify-between items-center'>
          <div className='bg-red-300 py-[10px] w-[30%] rounded-[5px] text-white text-center'>Ticket Expired</div>
          <Link to="/expired"><p className='text-[#aaaaaa] text-[18px]'>See Details</p></Link>
         </div>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </>
  )
}

export default History
