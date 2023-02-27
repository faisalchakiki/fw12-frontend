import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

import BtnDetails from "../collection/BtnDetail.js";
import Navbar from "../collection/Navbar";
import Button from "../collection/Button.js";
import ImageHeader from "../asset/img/header.png";
import FooterPublic from "../collection/FooterPublic.js";
import Month from "../collection/Month.js";
import NavUser from "../collection/NavUser.js";
import {useSelector} from "react-redux"
import Footer from "../collection/Footer.js";
import http from "../helper/http.js";

const Homepage = () => {
  const valueToken = useSelector(state => state.auth.token);
  const [movieNow, setNowShowing] = React.useState({});
  React.useEffect(() => {
    getNowShowing().then((res) => {
      setNowShowing(res);
    });
  }, []);
  const getNowShowing = async () => {
    const { data: result } = await http().get(
      "/movies/nowShowing"
    );
    return result;
  };
  // console.log(movieNow);
  // console.log(setNowShowing)

  const [upComing, setUpComing] = React.useState({});
  React.useEffect(() => {
    getUpComing().then((res) => {
      setUpComing(res);
    });
  }, []);

  const getUpComing = async () => {
    const { data: result } = await http().get(
      "/movies/upComing"
    );
    return result;
  };
  // console.log(upComing);

  return (
    <>
     {!valueToken?<Navbar></Navbar>:<NavUser/>}
      <header className="flex flex-col md:flex-row items-center px-[50px] lg:px-[120px] pt-[50px] md:h-[90vh] py-5">
        <div className="text-center w-full md:w-1/2">
          <p className="text-center text-[24px] text-[#a0a3bd]">
            Nearest Cinema, Newest Movie,
          </p>
          <p className="text-[30px] md:text-[5vw] font-bold tracking-[0.03em] text-[#fca311]">
            Find out now!
          </p>
        </div>
        <div className="flex items-center justify-center w-3/4 md:w-1/2">
          <img className="w-[85%] h-auto" src={ImageHeader} alt="exampleIMG" />
        </div>
      </header>
      <section className="bg-[#f5f6f8] h-[350px] md:h-[500px] block pt-3">
        <header className="flex h-[10%] justify-between px-[50px] lg:px-[120px] items-center">
          <h3 className="text-[#fca311] text-[20px] md:text-[32px] pb-[5px] font-semibold">
            Now Showing
          </h3>
          <Link to="/listMovie">
            <p className="font-bold text-[14px] md:text-[16px] tracking-[0.15px] text-[#fca311]">
              View All
            </p>
          </Link>
        </header>
        <main className="flex items-start justify-start pl-[50px] pt-[80px] lg:pl-[120px] scrollbar overflow-x-auto">
          {movieNow?.data?.map((item) => (
            <div
              className="box-movie max-w-[150px] md:max-w-[180px] min-h-min rounded-[8px] p-[15px] md:p-[30px] bg-[rgba(255, 255, 255, 0.2)] border-[3px] flex items-center justify-center flex-col border-[#fff] border-solid cursor-pointer
              group hover:bg-white hover:relative hover:shadow-lg mr-[40px]"
            >
              <div>
                <img
                  className="max-w-[100px] md:max-w-[150px] h-auto"
                  alt="Unknowe IMG"
                  src={`${item.poster}`}
                />
              </div>
              <div className="detail text-center hidden group-hover:block">
                <div className="title text-[15px] md:text-[19px] font-semibold mt-[10px]">
                  {item.title}
                </div>
                <div className="genre text-[14px] md:text-[16px] text-[#a0a3bd] font-semibold mb-[25px]">
                  {item.genre}
                </div>
                <BtnDetails path="/details" idMovie={item.id} value="Details"></BtnDetails>
              </div>
            </div>
          ))}
        </main>
      </section>
      <section className="pt-3 flex flex-col h-auto ">
        <header className="flex justify-between px-[50px] lg:px-[120px] items-center">
          <h3 className="text-[#000] text-[20px] md:text-[32px] pb-[5px] font-semibold">
            Upcoming Movies
          </h3>
          <Link to="/listMovie">
            <p className="font-bold text-[14px] md:text-[16px] tracking-[0.15px] text-[#fca311]">
              View All
            </p>
          </Link>
        </header>
        <Month />
        <main className="relative flex flex-1 justify-start items-start pl-[50px] lg:pl-[120px] overflow-x-auto scrollbar mt-[50px]">
          {upComing?.data?.map((data) => (
            <div className="max-w-[150px] md:max-w-[180px] min-h-min p-[15px] md:p-[30px] bg-white border-[0.5px] border-[#dedede] rounded-[8px] flex items-center justify-center flex-col mr-[40px]">
              <div>
                <img
                  className="max-w-[100px] md:max-w-[150px] h-auto"
                  alt="not Img"
                  src={`${data.poster}`}
                  loading="lazy"
                />
              </div>
              <div className="title text-[15px] md:text-[19px] font-semibold mt-[10px]">
                {data.title}
              </div>
              <div className="genre text-[14px] md:text-[16px] text-[#a0a3bd] font-semibold mb-[25px]">
                {data.genre}
              </div>
              <BtnDetails path="/details" idMovie={data.id} value="Details"></BtnDetails>
            </div>
          ))}
        </main>
      </section>
      <section className="card-member flex justify-center align-center py-[60px] md:py-[150px] px-[50px] lg:px-[120px]">
        <div className="w-full md:w-[80%] border text-center shadow-2xl p-[2vw]">
          <p className="text-[2.5vw] text[#4e4b66]">Be the vanguard of the</p>
          <p className="text-[#fca311] text-[5vw] font-semibold mt-[-5px]">
            Moviegoers
          </p>
          <div className="mb-2 flex flex-col sm:flex-row justify-center items-center">
            <form>
              <input
                type="email"
                className="w-[50%] lg:w-[250px] bg-[#fcfdfe] border-2 rounded divide-solid border-slate-300 py-[2px] text-[12px] md:text-[16px] md:py-[10px] pl-[1%] mt-[6px] mb-1 sm:mb-[8px] sm:mr-[15px]"
                placeholder="Type your email"
                required
              />
              <Button
                value="join now"
                class="w-[35%] sm:w-[100px] rounded py-[5px] md:py-[9px] text-[12px] md:text-[16px]"
              />
            </form>
          </div>
          <p className="text-[#6e7191] text-[12px] md:text-[17px]">
            By joining you as a Tickitz member,
            <br />
            we will always send you the latest updates via email .
          </p>
        </div>
      </section>
      {!valueToken ?<FooterPublic />: <Footer/>}
    </>
  );
};

export default Homepage;
