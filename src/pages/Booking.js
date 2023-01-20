import React from "react";
import { Link } from "react-router-dom";
import Footer from "../collection/Footer";
import NavUser from "../collection/NavUser";
import Button from "../collection/Button";
import Ebu from "../asset/logo/ebu.svg";

const Booking = () => {
  return (
    <>
      <NavUser />
      <main className="px-[120px] bg-[#f5f6f8] py-[30px] flex gap-5">
        <section className="w-2/3">
          <div>
            <h3 className="font-bold text-[24px] text-[#14142b] mb-[20px]">
              Movie Selected
            </h3>
            <div className="bg-white rounded-[5px] mb-[20px] py-[15px] px-4 flex justify-between items-center">
              <h1 className="text-[2vw] font-semibold">
                Spider-man: Homecoming
              </h1>
              <Link to="/listMovieMain" className="w-[30%]">
                <button className="w-full bg-[#eff0f7] text-[#fca311] h-[35px] font-bold text-center cursor-pointer rounded-[4px] hover:bg-[#fca311] hover:text-white">
                  Change movie
                </button>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-[24px] text-[#14142b] mb-[20px]">
              Choose Your Seat
            </h3>
            <div className="bg-white py-[30px] px-4 flex justify-center">
              <main className="w-[70%] text-center">
                <p>Screen</p>
                <hr className="h-[5px] bg-[#eaeaea] rounded-[15px] mb-[20px]" />
                <div className="grid grid-cols-2 gap-5">
                  <div className="grid grid-cols-8 gap-1">
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      A
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      B
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      C
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      D
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] cursor-pointer flex items-center justify-center bg-[#4e4b66] sold"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] cursor-pointer flex items-center justify-center bg-[#4e4b66] sold"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] cursor-pointer flex items-center justify-center bg-[#4e4b66] sold"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      E
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      F
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center selected"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center selected"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      G
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      1
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      2
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      3
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      4
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      5
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      6
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      7
                    </span>
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] cursor-pointer flex items-center justify-center bg-[#fca311] selected"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] cursor-pointer flex items-center justify-center bg-[#fca311] selected"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] cursor-pointer flex items-center justify-center bg-[#4e4b66] sold"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] cursor-pointer flex items-center justify-center bg-[#4e4b66] sold"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] cursor-pointer flex items-center justify-center"></span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      8
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      9
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      10
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      11
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      12
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      13
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] text-[#4e4b66] font-semibold flex items-center justify-center bg-transparent nav-seat">
                      14
                    </span>
                  </div>
                </div>
                <div className="lg:text-start">
                  <h3 className="text-[25px] mt-3">Seating Key</h3>
                  <div className="flex justify-start mt-3 gap-4">
                    <div className="flex items-center">
                      <span className="w-[25px] h-[25px] rounded-[5px] bg-[#d6d8e7] flex items-center justify-center"></span>
                      <p className="text-[#4e4b66] font-semibold ml-2">
                        Available
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="w-[25px] h-[25px] rounded-[5px] bg-[#4e4b66] flex items-center justify-center"></span>
                      <p className="text-[#4e4b66] font-semibold ml-2">Sold</p>
                    </div>
                    <div className="flex items-center">
                      <span className="w-[25px] h-[25px] rounded-[5px] bg-[#fca311] flex items-center justify-center"></span>
                      <p className="text-[#4e4b66] font-semibold ml-2">
                        Selected
                      </p>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <div className="flex justify-between items-center my-5">
              <Link to="/listMovieMain" className="w-[40%]">
                <button
                  className={`w-full text-[#fca311] h-[35px] border-[2px] border-[#fca311] font-bold text-center cursor-pointer rounded-[4px] hover:bg-[#fca311] hover:text-white`}
                >
                  Change movie
                </button>
              </Link>
              <Link to="/payment" className="w-[40%]">
                <Button
                  value="Checkout now"
                  class="rounded-[5px] h-[35px] py-0"
                ></Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-1/3">
          <div>
            <h3 className="font-bold text-[24px] text-[#14142b] mb-[20px]">
              Order Info
            </h3>
            <div className="bg-white rounded-[5px] mb-[20px] py-[15px] px-[20px] text-center overflow-hidden">
              <div className="h-[30px] mb-4 mx-auto inline-block">
                <img alt="" src={Ebu} />
              </div>
              <p className="w-full text-[#14142b] font-semibold tracking-[0.75px] text-[1.5vw] mb-[35px]">
                Ebu.id
              </p>
              <div className="mb-[30px]">
                <div className="flex justify-between my-[10px]">
                  <p className="text-[#6b6b6b] text-[14px]">Movie selected</p>
                  <span className="text-[#14142b] font-bold text-[14px]">
                    Spider-Man: Homecoming
                  </span>
                </div>
                <div className="flex justify-between my-[10px]">
                  <p className="text-[#6b6b6b] text-[14px]">
                    Tuesday, 07 July 2020
                  </p>
                  <span className="text-[#14142b] font-bold text-[14px]">
                    02:00
                  </span>
                </div>
                <div className="flex justify-between my-[10px]">
                  <p className="text-[#6b6b6b] text-[14px]">One ticket price</p>
                  <span className="text-[#14142b] font-bold text-[14px]">
                    $10
                  </span>
                </div>
                <div className="flex justify-between my-[10px]">
                  <p className="text-[#6b6b6b] text-[14px]">Seat choosed</p>
                  <span className="text-[#14142b] font-bold text-[14px]">
                    C4, C5, C6
                  </span>
                </div>
              </div>
              <hr className="mx-[-25px] py-2" />
              <div className="flex items-center justify-between">
                <p className="text-[18px] font-semibold">Total Payment</p>
                <span className="text-[24px] text-[#fca311] font-bold">
                  $30
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Booking;
