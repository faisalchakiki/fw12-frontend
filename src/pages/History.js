import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../collection/Button";
import Footer from "../collection/Footer";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";

import Avatar from "../asset/img/man-icon.png";
// import Ebu from "../asset/logo/ebu.svg";
import NavUser from "../collection/NavUser";
import http from "../helper/http";
import moment from "moment";

const History = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let dateNow = moment().format("YYYYMMDD");
  let time = moment().format("HHmmSS");
  const [history, setHistory] = React.useState();
  const token = useSelector((state) => state.auth.token);
  const [profile, setProfile] = React.useState([]);
  React.useEffect(() => {
    getProfile();
    getDataOrder(token);
  }, [token]);
  const getProfile = async () => {
    const { data } = await http(token).get("/profile");
    setProfile(data.data[0]);
  };
  useSelector((state) => {
    let idMovie = state.transaction.idMovie;
    idMovie = null;
    return idMovie;
  });
  const Logout = () => {
    dispatch(logoutAction());
    navigate("/login");
  };
  const getDataOrder = async (token) => {
    const { data: result } = await http(token).get("/bookings/history");
    setHistory(result.data);
  };
  return (
    <>
      <NavUser></NavUser>
      <main className="flex gap-5 px-[120px] py-[50px] bg-[#f5f6f8] items-start">
        <section className="bg-white rounded-[24px] w-[25%] p-[20px]">
          <p className="">INFO</p>
          <div className="w-[60%] h-auto border-[2px] border-black my-[20px] mx-auto rounded-full overflow-hidden">
            {profile.avatar !== null ? (
              <img alt="" src={profile.avatar} className="w-full h-auto" />
            ) : (
              <img alt="" src={Avatar} className="w-full h-auto" />
            )}
          </div>
          <h4 className="text-[20px] text-[#14142b] text-center">
            {profile.firstName} {profile.lastName}
          </h4>
          <p className="text-[#4e4b66] text-[14px] text-center">
            {profile.statusUser}
          </p>
          <Link onClick={Logout}>
            <Button
              value="Logout"
              class="mt-[40px] h-[35px] py-0 w-[70%] mx-auto block"
            />
          </Link>
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
          {history?.map((item) => {
            const dateTicket = item.dateBooking
              .replace("-", "")
              .replace("-", "");
            const timeTicket = item.timeBooking
              .replace(":", "")
              .replace(":", "");
            let status = true;
            if (dateNow > dateTicket) {
              status = false;
            } else if (time > timeTicket) {
              status = false;
            }
            return (
              <div
                key={item.id}
                className="history-ticket bg-white rounded-[24px] p-[20px] w-[100%] flex gap-5 mb-[20px] flex-col overflow-hidden"
              >
                <div className="header flex justify-between items-center">
                  <div>
                    <p className="text-[14px] text-[#aaa]">
                      {item.dateBooking} - {item.timeBooking}
                    </p>
                    <h3 className="text-[24px]">{item.title}</h3>
                  </div>
                  <div className="w-[20%]">
                    <img alt="cinema" src={item.logo} className="mx-auto" />
                  </div>
                </div>
                <hr className="mx-[-25px]" />
                <div className="flex justify-between items-center">
                  {status ? (
                    <div className="bg-[#00ba88] py-[10px] w-[30%] rounded-[5px] text-white text-center">
                      Ticket Active
                    </div>
                  ) : (
                    <div className="bg-red-300 py-[10px] w-[30%] rounded-[5px] text-white text-center">
                      Ticket Expired
                    </div>
                  )}
                  <Link to="/ticket" state={{ id: item.id, status }}>
                    <p className="text-[#aaaaaa] text-[18px]">See Details</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default History;
