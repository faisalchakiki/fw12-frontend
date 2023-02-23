import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import BtnDetails from "../collection/BtnDetail";
import Footer from "../collection/Footer";
import FooterPublic from "../collection/FooterPublic";
import Month from "../collection/Month";
import Navbar from "../collection/Navbar";
import NavUser from "../collection/NavUser";
import http from "../helper/http";

const ListMovie = () => {
  const valueToken = useSelector((state) => state.auth.token);
  const [movie, setMovie] = React.useState([]);
  const [limit] = React.useState(8);
  const [count, setCountPage] = React.useState(1);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [sort, setSort] = React.useState("DESC");
  // console.log(sort);

  React.useEffect(() => {
    getMovie(page, limit, search, sort);
  }, [page, limit, search, sort]);

  const getMovie = async (pages, limits, searchs, sorts) => {
    const { data: result } = await http().get(
      `/movies?limit=${limits}&page=${pages}&search=${searchs}&sort=${sorts}`
    );
    setMovie(result.data);
    setCountPage(result.pageInfo.totalPage);
  };

  const totalPage = [];
  for (let countPage = 1; countPage <= count; countPage++) {
    totalPage.push(countPage);
  }
  return (
    <div>
      {!valueToken ? <Navbar /> : <NavUser />}
      <main className="bg-[#f5f6f8] h-auto pt-[40px] flex flex-col">
        <div className="px-[50px] lg:px-[120px] flex-col md:flex-row flex justify-between items-center">
          <h3 className="text-[#14142b] text-[32px]">List Movie</h3>
          <div className="flex">
            <div className="bg-white px-3 rounded-[20px] outline-0 mr-[20px] my-3 sm:my-0 border">
              <select
                name="sort"
                className="w-full py-2 px-3 rounded-[20px] outline-0 mr-[20px] my-3 sm:my-0"
              >
                <option class="option" value="" disabled selected hidden>
                  Sort
                </option>
                <option>
                  <div onClick={(e) => console.log(e)}>A - Z</div>
                </option>
                <option><p onClick={(e) => console.log(e)}>Z - A</p></option>
              </select>
            </div>
            <input
              className="py-2 px-3 rounded-[20px] outline-0 "
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              name="search-movie"
              placeholder="Search Movie Name ..."
              placeholderTextColor="#000"
            />
          </div>
        </div>
        <Month />
        <div className="py-[30px] px-[2%] sm:px-[2%] lg:px-[4%] rounded-[5px] mt-5 mx-[50px] lg:mx-[120px] bg-white justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {movie?.map((data) => (
            <div className="bg-slate-100 p-5 rounded-[5px] w-[100%] text-center">
              <div className="w-full">
                <img
                  className="w-full h-auto"
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster}`}
                  alt="movieIMG"
                />
              </div>
              <div className="title text-[13px] sm:text-[22px] font-semibold mt-[10px]">
                {data.title}
              </div>
              <div className="genre text-[12px] sm:text-[16px] text-[#000] md:mb-[25px]">
                {data.genre}
              </div>
              <BtnDetails
                path="/details"
                idMovie={data.id}
                value="Details"
                class="text-[12px] sm:text-[16px] h-[30px] sm:h-[35px] mt-[10px]"
              ></BtnDetails>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-3">
          {totalPage.map((res) => {
            if (res === page) {
              return (
                <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-[#fca311] text-white border border-[#dedede] font-semibold cursor-pointer mx-1">
                  {res}
                </div>
              );
            } else {
              return (
                <div
                  onClick={() => setPage(res)}
                  className="w-[30px] h-[30px] bg-white flex items-center justify-center rounded hover:bg-[#fca311] hover:text-white border border-[#dedede] font-semibold cursor-pointer mx-1"
                >
                  {res}
                </div>
              );
            }
          })}
        </div>
      </main>
      {!valueToken ? <FooterPublic /> : <Footer />}
    </div>
  );
};

export default ListMovie;
