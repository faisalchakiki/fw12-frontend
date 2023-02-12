import React from "react";
import Footer from "../collection/Footer";
import Input from "../collection/Input";
import Paypal from "../asset/logo/paypal.svg";
import Dana from "../asset/logo/dana.svg";
import BRI from "../asset/logo/BRI.svg";
import BCA from "../asset/logo/BCA.svg";
import Warning from "../asset/logo/warning.svg";
import Button from "../collection/Button";
import { Link, useNavigate } from "react-router-dom";
import NavUser from "../collection/NavUser";
import http from "../helper/http";
import { transactionAction } from "../redux/actions/transactions";
import { useDispatch, useSelector } from "react-redux";

const Payment = () => {
  const navigation = useNavigate();
  const [profile, setProfile] = React.useState([]);
  const [payment, setPayment] = React.useState([]);
  const [selected, setSelected] = React.useState(0);
  const infoBooking = useSelector((state) => state.transaction);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  console.log(selected);
  React.useEffect(() => {
    getProfile();
    getPaymentMethod();
  }, [setSelected]);

  const getProfile = async () => {
    const { data: result } = await http(token).get("/profile");
    setProfile(result.data[0]);
  };
  const getPaymentMethod = async () => {
    try {
      const { data: results } = await http().get("/scheduleMovies/payment");
      setPayment(results.data);
    } catch (err) {
      console.log(err);
    }
  };
  let total = 0;
  if (infoBooking.seatSelected) {
    if (infoBooking.seatSelected.length) {
      total = Number(infoBooking.price) * infoBooking.seatSelected.length;
    }
  }

  const transactionProses = () => {
    if (selected !== 0) {
      const callback = (err) => {
        if (err) {
          console.log(err);
        } else {
          navigation("/history");
        }
      };
      const form = {
        fullName: profile.firstName + " " + profile.lastName,
        phoneNumber: profile.phoneNumber,
        email: profile.email,
        timeBooking: infoBooking.timeBooking,
        dateBooking: infoBooking.dateBooking,
        idUsers: profile.id,
        idMovie: infoBooking.idMovie,
        idCinema: infoBooking.idCinema,
        idPayMethod: selected,
        seatNum: infoBooking.seatSelected,
        total: total,
        callback,
      };
      dispatch(transactionAction(form));
    } else {
      alert("selected payment method");
    }
  };
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
                  {infoBooking?.dateBooking} & {infoBooking?.timeBooking}
                </span>
              </div>
              <hr />
              <div className="flex justify-between items-center py-[15px]">
                <p className="text-[16px] text-[#6b6b6b]">Movie title</p>
                <span className="text-[16px] text-[#14142b] font-semibold">
                  {infoBooking.nameMovie}
                </span>
              </div>
              <hr />
              <div className="flex justify-between items-center py-[15px]">
                <p className="text-[16px] text-[#6b6b6b]">Cinema name</p>
                <span className="text-[16px] text-[#14142b] font-semibold">
                  {infoBooking.nameCinema}
                </span>
              </div>
              <hr />
              <div className="flex justify-between items-center py-[15px]">
                <p className="text-[16px] text-[#6b6b6b]">Number of tickets</p>
                <span className="text-[16px] text-[#14142b] font-semibold">
                  {infoBooking.seatSelected.length} pieces
                </span>
              </div>
              <hr />
              <div className="flex justify-between items-center py-[15px]">
                <p className="text-[16px] text-[#6b6b6b]">Price one ticket</p>
                <span className="text-[16px] text-[#14142b] font-semibold">
                  Rp.{infoBooking?.price}
                </span>
              </div>
            </div>
            <div className="bg-white rounded-[5px] mb-[20px] flex justify-between items-center py-[20px] px-4">
              <p className="text-[30px]">Total Payment</p>
              <span className="text-[20px] text-[#14142b] font-semibold">
                Rp.{total}
              </span>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-[24px] text-[#14142b] mb-[20px]">
              Choose a Payment Method
            </h3>
            <div className="bg-white rounded-[5px] mb-[20px] py-[20px] px-4">
              <div className="method grid grid-cols-4 w-full gap-[30px]">
                {payment?.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelected(item.id)}
                    className={`border-[2px] border-[#dedede] flex justify-center items-center cursor-pointer p-[5px] rounded-[8px] ${
                      selected === item.id ? "bg-[#fca311]" : ""
                    }`}
                  >
                    {/* <img alt="" src={BRI} /> */}
                    <p className="font-semibold">{item.name}</p>
                  </div>
                ))}
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
              {selected !== 0 ? (
                <Button
                  submit={()=>transactionProses()}
                  value="Pay your order"
                  class="rounded-[5px] w-[40%]"
                ></Button>
              ) : (
                <button class="rounded-[5px] w-[40%] py-[10px] my-[5px] py-2 bg-[#eaeaea] border-[#000] border-1">
                  Pay your order
                </button>
              )}
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
                  value={`${profile.firstName} ${profile.lastName}`}
                  className="rounded-[5px]"
                />
                <Input
                  label="Email"
                  type="email"
                  id="email"
                  value={profile.email}
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
                      value={profile.phoneNumber}
                      className={`w-full bg-[#fcfdfe] border rounded-[5px] divide-solid border-slate-300 py-[10px] pl-[60px] mt-[6px] mb-[8px]`}
                      required
                    />
                  </div>
                </div>
                <div className="bg-orange-200 rounded-[4px] w-full flex py-[8px] px-[24px] items-center mt-[10px]">
                  <img alt="" src={Warning} className="pr-5" />
                  <p>Change the data in the profile.</p>
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
