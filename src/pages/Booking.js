import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../collection/Footer";
import NavUser from "../collection/NavUser";
import Button from "../collection/Button";
import Ebu from "../asset/logo/ebu.svg";
import http from "../helper/http";
import { useDispatch, useSelector } from "react-redux";
import { chooseSeats } from "../redux/reducers/transaction";

const Booking = () => {
  const navigate = useNavigate();
  const infoBooking = useSelector((state) => state.transaction);
  const dispatch = useDispatch();
  const [details, setDetails] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [price, setPrice] = React.useState(
    Number(infoBooking.price) * selected.length
  );

  const seatSelected = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((_values) => _values !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  React.useEffect(() => {
    getDetails();
  }, [setSelected, selected, price, setPrice]);

  const getDetails = async () => {
    const { data: result } = await http().get("/movies/" + infoBooking.idMovie);
    return setDetails(result.data[0]);
  };

  const goPayment = () => {
    console.log("tes");
    dispatch(chooseSeats(selected));
    navigate("/payment");
  };

  return (
    <>
      <NavUser />
      <main className="px-[120px] bg-[#5C5C5C] py-[30px] flex gap-5">
        <section className="w-2/3">
          <div>
            <h3 className="font-bold text-[24px] text-[#14142b] mb-[20px]">
              Movie Selected
            </h3>
            <div className="bg-slate-200 rounded-[5px] mb-[20px] py-[15px] px-4 flex justify-between items-center">
              <h1 className="text-[2vw] font-semibold font-['Opens-Sans']">{details?.title}</h1>
              <Link to="/listMovie" className="w-[30%]">
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
            <div className="bg-slate-200 py-[30px] px-4 flex justify-center rounded-[5px]">
              <main className="w-[70%] text-center">
                <p>Screen</p>
                <hr className="h-[5px] bg-[#4e4b66] rounded-[15px] mb-[20px]" />
                <div className="text-center mx-auto flex flex-col justify-center items-center">
                  {["A", "B", "C", "D", "E", "F", "G", " "].map((value) => {
                    return (
                      <div className="grid grid-cols-2 w-[100%]">
                        <div className="grid grid-cols-8 w-[90%]">
                          {[...Array(8)].map((_v, i) => {
                            if (i > 0) {
                              if (value !== " ") {
                                return (
                                  <p
                                    key={i}
                                    onClick={() => {
                                      seatSelected(value + i);
                                    }}
                                    className={`grid gap-1 border rounded-[8px] text-center w-[25px] h-[25px] m-[1px] cursor-pointer ${
                                      selected.includes(value + i)
                                        ? "bg-[#fca311]"
                                        : "bg-[#d6d8e7]"
                                    }`}
                                  >
                                    {/* {value}{i} */}
                                  </p>
                                );
                              } else {
                                return (
                                  <div className="text-center w-[25px]">
                                    {i}
                                  </div>
                                );
                              }
                            } else {
                              return (
                                <div className="text-center mr-[10%]">
                                  {value}
                                </div>
                              );
                            }
                          })}
                        </div>
                        <div className="grid grid-cols-8 w-[90%] ml-auto">
                          {[...Array(7)].map((_v, i) => {
                            if (value !== " ") {
                              return (
                                <p
                                  key={i + 8}
                                  onClick={() => {
                                    seatSelected(value + (i + 8));
                                  }}
                                  className={`grid gap-1 border rounded-[8px] text-center w-[25px] h-[25px] m-[1px] cursor-pointer ${
                                    selected.includes(value + (i + 8))
                                      ? "bg-[#fca311]"
                                      : "bg-[#d6d8e7]"
                                  }`}
                                >
                                  {/* {value}{i+8} */}
                                </p>
                              );
                            } else {
                              return (
                                <div className="text-center w-[25px]">
                                  {i + 8}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    );
                  })}
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
              <Link to="/listMovie" className="w-[40%]">
                <button
                  className={`w-full text-[#fca311] h-[35px] border-[2px] border-[#fca311] font-bold text-center cursor-pointer rounded-[4px] hover:bg-[#fca311] hover:text-white`}
                >
                  Change movie
                </button>
              </Link>
              {selected.length > 0 ? (
                <Button
                  submit={() => goPayment()}
                  value="Checkout now"
                  class="rounded-[5px] h-[35px] py-0 w-[40%]"
                ></Button>
              ) : (
                <button
                  value="Checkout now"
                  class="rounded-[5px] h-[35px] bg-[#eaeaea] py-0 w-[40%]"
                >
                  pick seats
                </button>
              )}
            </div>
          </div>
        </section>
        <section className="w-1/3">
          <div>
            <h3 className="font-bold text-[24px] text-[#14142b] mb-[20px]">
              Order Info
            </h3>
            <div className="bg-slate-200 rounded-[5px] mb-[20px] py-[15px] px-[20px] text-center overflow-hidden">
              <div className="h-[30px] mb-1 mx-auto inline-block text-center">
                <img alt="" src={infoBooking.logoCinema} className='mx-auto w-full h-[100%]'/>
              </div>
              <p className="w-full text-[#14142b] font-semibold tracking-[0.75px] text-[1.5vw] mb-[35px]">
                {infoBooking?.nameCinema}
              </p>
              <div className="mb-[30px]">
                <div className="flex justify-between my-[10px]">
                  <p className="text-[#6b6b6b] text-[14px]">Movie selected</p>
                  <span className="text-[#14142b] font-bold text-[14px]">
                    {details?.title}
                  </span>
                </div>
                <div className="flex justify-between my-[10px]">
                  <p className="text-[#6b6b6b] text-[14px]">
                    {infoBooking?.dateBooking}
                  </p>
                  <span className="text-[#14142b] font-bold text-[14px]">
                    {infoBooking?.timeBooking}
                  </span>
                </div>
                <div className="flex justify-between my-[10px]">
                  <p className="text-[#6b6b6b] text-[14px]">One ticket price</p>
                  <span className="text-[#14142b] font-bold text-[14px]">
                    {infoBooking?.price}
                  </span>
                </div>
                <div className="flex justify-between my-[10px]">
                  <p className="text-[#6b6b6b] text-[14px]">Seat choosed</p>
                  <span className="text-[#14142b] font-bold text-[14px]">
                    (selected seats)
                  </span>
                </div>
              </div>
              <hr className="mx-[-25px] py-2" />
              <div className="flex items-center justify-between">
                <p className="text-[18px] font-semibold">Total Payment</p>
                <span className="text-[24px] text-[#fca311] font-bold">
                  {infoBooking.price
                    ? `Rp.${Number(infoBooking.price) * selected.length}`
                    : `Rp.0`}
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
