import React from "react";
import Footer from "../collection/Footer";
import Input from "../collection/Input";
import Paypal from "../asset/logo/paypal.svg";
import Dana from "../asset/logo/dana.svg";
import BRI from "../asset/logo/BRI.svg";
import BCA from "../asset/logo/BCA.svg";
import Warning from "../asset/logo/warning.svg";
import Button from "../collection/Button";
import { Link } from "react-router-dom";
import NavUser from "../collection/NavUser";

const Payment = () => {
  return (
    <>
      <NavUser></NavUser>
      <main className="px-[120px] bg-[#f5f6f8] py-[30px] flex gap-5">
        <section className="w-2/3">
          <div>
            <h3 className="font-bold text-[24px] text-[#14142b] mb-[20px]">
              Payment Info
            </h3>
            <div className="bg-white rounded-[5px] mb-[20px] py-[20px] px-4">
              <div className="flex justify-between items-center py-[15px]">
                <p className="text-[16px] text-[#6b6b6b]">Date & time</p>
                <span className="text-[16px] text-[#14142b] font-semibold">
                  Tuesday, 07 July 2020 at 02:00
                </span>
              </div>
              <hr />
              <div className="flex justify-between items-center py-[15px]">
                <p className="text-[16px] text-[#6b6b6b]">Movie title</p>
                <span className="text-[16px] text-[#14142b] font-semibold">
                  Spider-Man: Homecoming
                </span>
              </div>
              <hr />
              <div className="flex justify-between items-center py-[15px]">
                <p className="text-[16px] text-[#6b6b6b]">Cinema name</p>
                <span className="text-[16px] text-[#14142b] font-semibold">
                  CineOne21 Cinema
                </span>
              </div>
              <hr />
              <div className="flex justify-between items-center py-[15px]">
                <p className="text-[16px] text-[#6b6b6b]">Number of tickets</p>
                <span className="text-[16px] text-[#14142b] font-semibold">
                  3 pieces
                </span>
              </div>
              <hr />
              <div className="flex justify-between items-center py-[15px]">
                <p className="text-[16px] text-[#6b6b6b]">Total payment</p>
                <span className="text-[16px] text-[#14142b] font-semibold">
                  $30,00
                </span>
              </div>
            </div>
            <div className="bg-white rounded-[5px] mb-[20px] flex justify-between items-center py-[20px] px-4">
              <p className="text-[30px]">Total Payment</p>
              <span className="text-[20px] text-[#14142b] font-semibold">
                $30,00
              </span>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-[24px] text-[#14142b] mb-[20px]">
              Choose a Payment Method
            </h3>
            <div className="bg-white rounded-[5px] mb-[20px] py-[20px] px-4">
              <div className="method grid grid-cols-4 w-full gap-[30px]">
                <div className="border-[2px] border-[#dedede] flex justify-center items-center cursor-pointer p-[5px] rounded-[8px]">
                  <img alt="" src={BRI} />
                </div>
                <div className="border-[2px] border-[#dedede] flex justify-center items-center cursor-pointer p-[5px] rounded-[8px]">
                  <img alt="" src={Paypal} />
                </div>
                <div className="border-[2px] border-[#dedede] flex justify-center items-center cursor-pointer p-[5px] rounded-[8px]">
                  <img alt="" src={BCA} />
                </div>
                <div className="border-[2px] border-[#dedede] flex justify-center items-center cursor-pointer p-[5px] rounded-[8px]">
                  <img alt="" src={Dana} />
                </div>
                <div className="border-[2px] border-[#dedede] flex justify-center items-center cursor-pointer p-[5px] rounded-[8px]">
                  <img alt="" src={BRI} />
                </div>
                <div className="border-[2px] border-[#dedede] flex justify-center items-center cursor-pointer p-[5px] rounded-[8px]">
                  <img alt="" src={BRI} />
                </div>
                <div className="border-[2px] border-[#dedede] flex justify-center items-center cursor-pointer p-[5px] rounded-[8px]">
                  <img alt="" src={BRI} />
                </div>
                <div className="border-[2px] border-[#dedede] flex justify-center items-center cursor-pointer p-[5px] rounded-[8px]">
                  <img alt="" src={BRI} />
                </div>
              </div>
              <p className="w-full text-center font-bold py-[15px]">OR</p>
              <p className="text-[#6e7191] text-[17px] w-full text-center">
                Pay via cash.{" "}
                <span className="text-[#4417c2]">See how it work</span>
              </p>
            </div>
            <div className="flex justify-between items-center">
              <Link to="/booking" className="w-[40%]">
                <button
                  className={`w-full text-[#fca311] h-[35px] border-[2px] border-[#fca311] font-bold text-center cursor-pointer rounded-[4px] hover:bg-[#fca311] hover:text-white`}
                >
                  Previous Step
                </button>
              </Link>
              <Link to="/history" className="w-[40%]">
                <Button
                  value="Pay your order"
                  class="rounded-[5px] h-[35px] py-0"
                ></Button>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="font-bold text-[24px] text-[#14142b] mb-[20px]">
              Personal Info
            </h3>
            <div className="bg-white rounded-[5px] mb-[20px] py-[20px] px-4">
              <form>
                <Input
                  label="Full Name"
                  type="text"
                  id="fullname"
                  className="rounded-[5px]"
                />
                <Input
                  label="Email"
                  type="email"
                  id="email"
                  className="rounded-[5px]"
                />
                <div className="input-part text-[16px] text-[#4e4b66]">
                  <label for="phonenumber">Phone Number</label>
                  <div className="relative">
                    <div className="absolute pr-[10px] border-r-2 border-[#eaeaea] top-[25%] left-2">
                      <p className="text-[17px] text-black">+62</p>
                    </div>
                    <input
                      type="text"
                      id="phonenumber"
                      placeholder={`Write your Phone Number`}
                      className={`w-full bg-[#fcfdfe] border rounded-[5px] divide-solid border-slate-300 py-[10px] pl-[60px] mt-[6px] mb-[8px]`}
                      required
                    />
                  </div>
                </div>
                <div className="bg-orange-200 rounded-[4px] w-full flex py-[8px] pl-[24px] items-center mt-[10px]">
                  <img alt="" src={Warning} className="pr-5" />
                  <p>Fill your data correctly.</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Payment;
