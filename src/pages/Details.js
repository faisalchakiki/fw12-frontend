import React from "react";
import Footer from "../collection/Footer";
// import images from "../asset/img/movie.png";
import Location from "../asset/logo/location.svg";
import Ebu from "../asset/logo/ebu.svg";
import Button from "../collection/Button";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import NavUser from "../collection/NavUser";
import moment from "moment";
import http from "../helper/http"
import Navbar from "../collection/Navbar";
import FooterPublic from "../collection/FooterPublic";

const Details = () => {
  const valueToken = useSelector(state => state.auth.token)
  const [details, setDetails] = React.useState({});
  const [date, setDate] = React.useState(moment().format("YYYY-MM-DD"));
  // const [cityList, setCityList] = React.useState([]);
  // const [city, setCity] = React.useState("");
  const { id } = useParams();
  React.useEffect(() => {
    getDetails(id);
  }, [id]);
  const getDetails = async (id) => {
    const { data: result } = await http().get(
      "http://localhost:8888/movies/" + id
    );
    // console.log(result.data[0])
    return setDetails(result.data[0]);
  };

  // React.useEffect(() => {
  //   getCityList();
  // }, []);
  // const getCityList = async () => {
  //   const { data: result } = await http().get('/cinemas')
  //   console.log(result.data.city)
  //   return setDetails(result.data.city);
  // };

  return (
    <>
      {valueToken?<NavUser></NavUser>:<Navbar/>}
      <main className="flex flex-col md:flex-row pl-[50px] lg:pl-[120px] pr-[20px] overflow-hidden py-[50px] align-center">
        <section className="left w-full md:w-2/5 flex align-center justify-center">
          <div className="w-[50%] md:w-[250px] h-min rounded-[16px] border p-[20px] box-content mr-[50px]">
            <img
              alt="Movie"
              className="w-full h-auto rounded-[8px]"
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${details.poster}`}
            />
          </div>
        </section>
        <section className="right md:w-3/5 mt-[30px] md:mt-0">
          <h1 className="title text-[32px] text-[#14142b] mb-[10px]">
            {details.title}
          </h1>
          <p className="genre text-[18px] text-[#4e4b66] mb-[40px] tracking-[0.75px]">
            {details.genre}
          </p>
          <div>
            <div className="part grid grid-cols-none sm:grid-cols-2 mb-[25px]">
              <div className="mb-2 sm:mb-0">
                <p className="text-[#8692a6] text-[14px]">Release date</p>
                <span className="truncate text-[#121212] text-[18px]">
                  {details.dateRelease}
                </span>
              </div>
              <div className="mb-2 sm:mb-0">
                <p className="text-[#8692a6] text-[14px]">Directed By</p>
                <span className="truncate text-[#121212] text-[18px]">
                  {details.director}
                </span>
              </div>
            </div>
            <div className="part grid grid-cols-none sm:grid-cols-2 mb-[25px]">
              <div className="mb-2 sm:mb-0">
                <p className="text-[#8692a6] text-[14px]">Duration</p>
                <span className="truncate text-[#121212] text-[18px]">
                  {details.duration} minute
                </span>
              </div>
              <div className="mb-2 sm:mb-0">
                <p className="text-[#8692a6] text-[14px]">Casts</p>
                <span className="text-clip overflow-hidden ">
                  {details.casts}
                </span>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <p className="text-[23px] my-[10px]">Synopsis</p>
            <span className="text-clip overflow-hidden w-[20px] text-[#4e4b66] leading-8">
              {details.synopsis}
            </span>
          </div>
        </section>
      </main>
      {valueToken?<section className="px-[120px] bg-[#f5f6f8] py-[30px] text-center">
        <h3 className="text-[#14142b] text-[32px]">Showtimes and Ticket</h3>
        <div className="flex justify-center gap-5 mt-[20px]">
          <div className="bg-[#eff0f6] py-[14px] px-2 rounded-[5px] text-[#000] cursor-pointer">
            <input
              type="date"
              name="date"
              id="date"
              defaultValue={date}
              onChange={(e) => setDate(e.target.value)}
              className="outline-none bg-[#eff0f6] cursor-pointer"
            />
          </div>
          <div className="bg-[#eff0f6] py-[14px] relative pl-[40px] pr-3 cursor-pointer">
            <img
              src={Location}
              alt="logo-location"
              className="absolute left-[10px]"
            />
            <select
              name="sort"
              className="bg-[#eff0f6] outline-none cursor-pointer"
            >
              <option value="" disabled selected hidden>
                Location
              </option>
              <option value="jakarta">Jakarta</option>
              <option value="jawabarat">Jawa Barat</option>
              <option value="jawatengah">Jawa Tengah</option>
              <option value="jawatimur">Jawa Timur</option>
              <option value="sumatra">Sumatra</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 justify-center gap-[30px] my-[25px] px-[5%]">
          <div className="card p-[25px] border rounded-[8px] bg-white text-start overflow-hidden">
            <div className="header-card flex items-center gap-3">
              <div className="w-1/3 flex">
                <div className="w-[100%]">
                  <img alt="w-[100%] h-auto" src={Ebu} />
                </div>
              </div>
              <div>
                <h4 className="text-[23px] mb-1">ebv.id</h4>
                <p className="leading-5 text-[15px] text-[#6e7191]">
                  Whatever street No.12, South Purwokerto
                </p>
              </div>
            </div>
            <hr className="mx-[-30px] my-[20px]" />
            <div className="time">
              <p className="leading-[30px] mr-[10px] text-[15px] text-[#4e4b66] inline-block">
                00.00pm
              </p>
              <p className="leading-[30px] mr-[10px] text-[15px] text-[#4e4b66] inline-block">
                00.00pm
              </p>
              <p className="leading-[30px] mr-[10px] text-[15px] text-[#4e4b66] inline-block">
                00.00pm
              </p>
              <p className="leading-[30px] mr-[10px] text-[15px] text-[#4e4b66] inline-block">
                00.00pm
              </p>
              <p className="leading-[30px] mr-[10px] text-[15px] text-[#4e4b66] inline-block">
                00.00pm
              </p>
              <p className="leading-[30px] mr-[10px] text-[15px] text-[#4e4b66] inline-block">
                00.00pm
              </p>
            </div>
            <div className="price flex justify-between items-center my-[20px]">
              <p className="text-[18px] text-[#6b6b6b]">Price</p>
              <span className="text-[#000] text-[18px] font-semibold">
                $10.00/seat
              </span>
            </div>
            <Link to="/booking">
              <Button value="Book now"></Button>
            </Link>
          </div>
        </div>
        <div className="text-center w-full">
          <Link
            to=""
            className="font-bold text-[14px] md:text-[20px] tracking-[0.15px] text-[#fca311]"
          >
            view more
          </Link>
        </div>
      </section>:null}
      {valueToken?<Footer></Footer>:<FooterPublic/>}
    </>
  );
};

export default Details;
