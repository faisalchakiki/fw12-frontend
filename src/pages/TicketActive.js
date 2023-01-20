import React from "react";
import Footer from "../collection/Footer";

import Barcode from "../asset//img/qr-code.png"
import NavUser from "../collection/NavUser";

const TicketActive = () => {
  return (
    <>
    <NavUser/>
      <main className="flex gap-5 px-[120px] py-[70px] bg-[#f5f6f8] items-center justify-center">
        <div className="bg-white w-[80%] text-center p-[50px] rounded-[8px]">
          <h3 className="text-[25px] tracking-[0.75px] mb-[20px]">
            Proof of Payment
          </h3>
          <div className="w-[750px] flex text-left overflow-hidden">
            <section className="ticket w-[70%] border-r-[2px] border-dashed border-[#dedede] h-[300px]">
              <div className="header bg-[#fca311] flex items-center justify-between h-[30%] py-[30px] px-[20px] rounded-tl-[20px]">
                <h1 className="text-[30px] text-white font-semibold italic">
                  CINEPHILE
                </h1>
                <p className="text-[white]">Admit One</p>
              </div>
              <div className="body rounded-bl-[20px] relative py-[10px] px-[20px] border-[1px] border-[#dedede] h-[70%]">
                <section>
                  <span className="text-[12px] text-[#aaaaaa] tracking-[0.75px]">
                    Movie
                  </span>
                  <p className="text-[#14142b] text-[16px] font-semibold">
                    Spiderman-Man
                  </p>
                </section>
                <section className="grid grid-cols-3">
                  <div>
                    <span className="text-[12px] text-[#aaaaaa] tracking-[0.75px]">
                      Date
                    </span>
                    <p className="text-[#14142b] text-[16px] font-semibold">
                      07 July
                    </p>
                  </div>
                  <div>
                    <span className="text-[12px] text-[#aaaaaa] tracking-[0.75px]">
                      Time
                    </span>
                    <p className="text-[#14142b] text-[16px] font-semibold">
                      02:00
                    </p>
                  </div>
                  <div>
                    <span className="text-[12px] text-[#aaaaaa] tracking-[0.75px]">
                      Categoty
                    </span>
                    <p className="text-[#14142b] text-[16px] font-semibold">
                      Action
                    </p>
                  </div>
                </section>
                <section className="grid grid-cols-3">
                  <div>
                    <span className="text-[12px] text-[#aaaaaa] tracking-[0.75px]">
                      Count
                    </span>
                    <p className="text-[#14142b] text-[16px] font-semibold">
                      3 pieces
                    </p>
                  </div>
                  <div>
                    <span className="text-[12px] text-[#aaaaaa] tracking-[0.75px]">
                      Seats
                    </span>
                    <p className="text-[#14142b] text-[16px] font-semibold">
                      C4 ,C5, C6
                    </p>
                  </div>
                  <div>
                    <span className="text-[12px] text-[#aaaaaa] tracking-[0.75px]">
                      Price
                    </span>
                    <p className="text-[#14142b] text-[16px] font-semibold">
                      $30.00
                    </p>
                  </div>
                </section>
              </div>
            </section>
            <section className="ticket w-[30%] h-[300px]">
              <div className="header bg-[#fca311] flex items-center justify-center h-[30%] py-[30px] px-[20px] rounded-tr-[20px]">
                <h1 className="text-[25px] text-white font-semibold italic">
                  CINEPHILE
                </h1>
              </div>
              <div className="body rounded-br-[20px] relative py-[10px] px-[20px] border-[1px] border-[#dedede] h-[70%] flex justify-center items-center">
                <div className="w-[100%] h-[100%]">
                  <img alt="barcode" src={Barcode}/>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default TicketActive;
