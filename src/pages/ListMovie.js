import axios from "axios";
import React, { useEffect } from "react";

import BtnDetails from "../collection/BtnDetail";
import Footer from "../collection/Footer";
import Month from "../collection/Month";
import Navbar from "../collection/Navbar";

const ListMovie = () => {
  const [movie, setMovie] = React.useState({});
  useEffect(() => {
    getAllMovies().then((res) => {
      setMovie(res);
    });
  }, []);
  const getAllMovies = async () => {
    const { data: result } = await axios.get(
      "http://localhost:8888/movies?limit=8"
    );
    return result;
  };
  //   console.log(movie);
  const num = [1, 2, 3, 4, 5];
  return (
    <div>
      <Navbar />
      <main className="bg-[#f5f6f8] h-auto pt-[40px] flex flex-col">
        <div className="px-[50px] lg:px-[120px] flex-col md:flex-row flex justify-between items-center">
          <h3 className="text-[#000] text-[32px] font-semibold">List Movie</h3>
          <div>
            <select
              name="sort"
              className="py-2 px-3 rounded-[20px] outline-0 mr-[20px] my-3 sm:my-0"
            >
              <option class="option" value="" disabled selected hidden>
                Sort
              </option>
              <option class="option" value="school">
                A - Z
              </option>
              <option class="option" value="romance">
                Z - A
              </option>
              <option class="option" value="action">
                Created At
              </option>
            </select>
            <input
              className="py-2 px-3 rounded-[20px] outline-0 "
              type="text"
              name="search-movie"
              placeholder="Search Movie Name ..."
            />
          </div>
        </div>
        <Month />
        <div className="py-[30px] px-[5%] sm:px-[2%] lg:px-[4%] rounded-[5px] mt-5 mx-[50px] lg:mx-[120px] bg-white justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {movie?.data?.map((data) => (
            <div className="bg-slate-100 p-5 rounded-[5px] w-[100%]">
              <div className="w-full">
                <img
                  className="w-full h-auto"
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster}`}
                  alt="movieIMG"
                />
              </div>
              <div className="title text-[22px] font-semibold mt-[10px]">
                {data.title}
              </div>
              <div className="genre text-[16px] text-[#000] mb-[25px]">
                {data.genre}
              </div>
              <BtnDetails value="Details"></BtnDetails>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-3">
          {num.map((res) => {
            if (res === 1) {
              return (
                <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-[#5f2eea] text-white border border-[#dedede] font-semibold cursor-pointer mx-1">
                  {res}
                </div>
              );
            } else {
              return (
                <div className="w-[30px] h-[30px] bg-white flex items-center justify-center rounded hover:bg-[#5f2eea] hover:text-white border border-[#dedede] font-semibold cursor-pointer mx-1">
                  {res}
                </div>
              );
            }
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ListMovie;
