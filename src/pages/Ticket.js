import React from "react";
import Footer from "../collection/Footer";

import Barcode from "../asset//img/qr-code.png";
import NavUser from "../collection/NavUser";
import { useLocation } from "react-router-dom";
import Cinephile from "../asset/logo/logo-cinephile.svg";
// import { useSelector } from "react-redux";
import http from "../helper/http";

const Ticket = () => {
  let { state } = useLocation();
  const [transaction, setTrans] = React.useState([]);
  const [seats, setSeats] = React.useState([]);
  React.useEffect(() => {
    getDataOrder();
  }, []);
  const getDataOrder = async () => {
    const { data } = await http().get(`/bookings/ticket/${state.id}`);
    setTrans(data.results.transaction);
    setSeats(data.results.seat);
  };
  return (
    <>
      <NavUser />
      <main className="flex gap-5 px-[120px] py-[70px] bg-[#5C5C5C] items-center justify-center">
        <div className="bg-slate-200 w-[80%] text-center p-[50px] rounded-[8px]">
          <h3 className="text-[25px] tracking-[0.75px] mb-[20px]">
            Proof of Payment
          </h3>
          <div className="w-[750px] flex text-left overflow-hidden mx-auto">
            <section className="ticket w-[70%] border-r-[2px] border-dashed border-[#dedede] h-[300px]">
              <div className="header bg-[#fca311] flex items-center justify-between h-[30%] py-[30px] px-[20px] rounded-tl-[20px]">
              <img alt="" src={Cinephile} className="w-[250px] bg-white rounded-[20px]"/>
                <p className="text-[white]">Admit One</p>
              </div>
              <div className="body bg-white rounded-bl-[20px] relative py-[10px] px-[20px] border-[1px] border-[#dedede] h-[70%]">
                <section>
                  <span className="text-[12px] text-[#aaaaaa] tracking-[0.75px]">
                    Movie
                  </span>
                  <p className="text-[#14142b] text-[16px] font-semibold">
                    {transaction.title}
                  </p>
                </section>
                <section className="grid grid-cols-3">
                  <div>
                    <span className="text-[12px] text-[#aaaaaa] tracking-[0.75px]">
                      Date
                    </span>
                    <p className="text-[#14142b] text-[16px] font-semibold">
                      {transaction.dateBooking}
                    </p>
                  </div>
                  <div>
                    <span className="text-[12px] text-[#aaaaaa] tracking-[0.75px]">
                      Time
                    </span>
                    <p className="text-[#14142b] text-[16px] font-semibold">
                      {transaction?.timeBooking}
                    </p>
                  </div>
                  <div>
                    <span className="text-[12px] text-[#aaaaaa] tracking-[0.75px]">
                      Categoty
                    </span>
                    <p className="text-[#14142b] text-[16px] font-semibold">
                      {transaction.genresMovie}
                    </p>
                  </div>
                </section>
                <section className="grid grid-cols-3">
                  <div>
                    <span className="text-[12px] text-[#aaaaaa] tracking-[0.75px]">
                      Count
                    </span>
                    <p className="text-[#14142b] text-[16px] font-semibold">
                      {seats ? seats.seatBooking?.length : 0} pieces
                    </p>
                  </div>
                  <div>
                    <span className="text-[12px] text-[#aaaaaa] tracking-[0.75px]">
                      Seats
                    </span>
                    <p className="text-[#14142b] text-[16px] font-semibold">
                      {seats ? seats.seatBooking?.join(", ") : 0}
                    </p>
                  </div>
                  <div>
                    <span className="text-[12px] text-[#aaaaaa] tracking-[0.75px]">
                      Price
                    </span>
                    <p className="text-[#14142b] text-[16px] font-semibold">
                      Rp.{transaction.total}
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
              {state.status ? (
                <div className="body bg-white rounded-br-[20px] relative py-[10px] px-[20px] border-[1px] border-[#dedede] h-[70%] flex justify-center items-center">
                  <div className="w-[100%] h-[100%]">
                    <img alt="barcode" src={Barcode} />
                  </div>
                </div>
              ) : (
                <div className="body bg-white rounded-br-[20px] relative py-[10px] px-[20px] border-[1px] border-[#dedede] h-[70%] flex justify-center items-center">
                  <div className="w-[100%] h-[100%] bg-[#5C5C5C] flex justify-center items-center">
                    <p className="font-semibold text-[#14142b] text-[17px]">
                      Ticket Expired
                    </p>
                    {/* <p className="font-semibold text-[#14142b] text-[17px]">Ticket Already Used</p> */}
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Ticket;
