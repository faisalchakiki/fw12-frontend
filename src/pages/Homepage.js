import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import BtnDetails from "../collection/BtnDetail.js";
import Navbar from "../collection/Navbar";
import Button from "../collection/Button.js";
import ImageHeader from "../asset/img/header.png";
import Footer from "../collection/Footer.js";
import Month from "../collection/Month.js";

const Homepage = () => {
  const [movieNow, setNowShowing] = React.useState({});
  React.useEffect(() => {
    getNowShowing().then((res) => {
      setNowShowing(res);
    });
  }, []);
  const getNowShowing = async () => {
    const { data: result } = await axios.get(
      "http://localhost:8888/movies/nowShowing"
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
    const { data: result } = await axios.get(
      "http://localhost:8888/movies/upComing"
    );
    return result;
  };
  // console.log(upComing);

  return (
    <>
      <Navbar></Navbar>
      <header className="flex items-center px-[120px] pt-[50px] h-[90vh]">
        <div className="text-center w-1/2">
          <p className="text-center text-[24px] text-[#a0a3bd]">
            Nearest Cinema, Newest Movie,
          </p>
          <p className="text-[5vw] font-bold tracking-[0.03em] text-[#5f2eea]">
            Find out now!
          </p>
        </div>
        <div className="text-center w-1/2">
          <img src={ImageHeader} alt="exampleIMG" />
        </div>
      </header>
      <section className="bg-[#f5f6f8] h-[500px] pt-3 flex flex-col">
        <header className="flex justify-between px-[120px] items-center">
          <h3 className="text-[#5f2eea] text-[32px] pb-[5px] font-semibold">
            Now Showing
          </h3>
          <Link to="/listMovie">
            <p className="font-bold text-[16px] tracking-[0.15px] text-[#5f2eea]">
              View All
            </p>
          </Link>
        </header>
        <main className="flex flex-1 justify-start items-center pl-[120px] overflow-x-auto gap-3 scrollbar">
          {movieNow?.data?.map((item) => (
            <div
              className="box-movie min-w-[130px] rounded-[5px] p-[30px] bg-[rgba(255, 255, 255, 0.2)] border-[4px] flex justify-center items- flex-col border-[#fff] border-solid box-content cursor-pointer
              group mt-5 hover:bg-white"
            >
              <div>
                <img
                  className="w-full h-auto"
                  alt="Unknowe IMG"
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster}`}
                />
              </div>
              <div className="detail relative text-center hidden group-hover:block">
                <div className="title text-[22px] font-semibold mt-[10px]">
                  {item.title}
                </div>
                <div className="genre text-[16px] text-[#a0a3bd] font-semibold mb-[25px]">
                  {item.genre}
                </div>
                <BtnDetails value="Details"></BtnDetails>
              </div>
            </div>
          ))}
        </main>
      </section>
      <section className="pt-3 flex flex-col h-auto pb-[50px]">
        <header className="flex justify-between px-[120px] items-center">
          <h3 className="text-[#000] text-[32px] pb-[5px] font-semibold">
            Upcoming Movies
          </h3>
          <Link to="/listMovie">
            <p className="font-bold text-[16px] tracking-[0.15px] text-[#5f2eea]">
              View All
            </p>
          </Link>
        </header>
        <Month />
        <main className="flex flex-1 justify-start pl-[120px] overflow-x-auto gap-3 scrollbar mt-[50px]">
          {upComing?.data?.map((data) => (
            <div className="max-w-[180px] bg-white border-[0.5px] border-[#dedede] rounded-[8px] p-[30px] text-center mr-[30px]">
              <div className="">
                <img
                  className="w-full h-auto"
                  alt="not Img"
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster}`}
                  loading="lazy"
                />
              </div>
              <div className="title text-[22px] font-semibold mt-[10px]">
                {data.title}
              </div>
              <div className="genre text-[16px] text-[#a0a3bd] font-semibold mb-[25px]">
                {data.genre}
              </div>
              <BtnDetails value="Details"></BtnDetails>
            </div>
          ))}
        </main>
      </section>
      <section className="card-member flex justify-center align-center py-[5%] px-[120px]">
        <div className="w-[80%] border text-center shadow-2xl p-[2vw]">
          <p className="text-[2.5vw] text[#4e4b66]">Be the vanguard of the</p>
          <p className="text-[#5f2eea] text-[5vw] font-semibold mt-[-5px]">
            Moviegoers
          </p>
          <div className="mb-2">
            <input
              type="email"
              className="w-[30%] bg-[#fcfdfe] border-2 rounded divide-solid border-slate-300 py-[10px] pl-[24px] mt-[6px] mb-[8px] mr-[15px]"
              placeholder="Type your email"
              required
            />
            <Button value="join now" class="w-[10%] rounded " />
          </div>
          <p className="text-[#6e7191] text-[17px]">
            By joining you as a Tickitz member,
            <br />
            we will always send you the latest updates via email .
          </p>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Homepage;
