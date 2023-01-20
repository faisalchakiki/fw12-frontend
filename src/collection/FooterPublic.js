import React from "react";
import { Link } from "react-router-dom";

import Ebu from "../asset/logo/ebu.svg";
import Cineone from "../asset/logo/cineone.svg";
import Hiflix from "../asset/logo/hiflix.svg";
import Facebook from "../asset/logo/facebook.svg";
import Instagram from "../asset/logo/instagram.svg";
import Twiter from "../asset/logo/twiter.svg";
import Youtube from "../asset/logo/youtube.svg";

const FooterPublic = () => {
  return (
    <footer className="px-[50px] lg:px-[120px] pt-3 border-t-2">
      <div className="top lg:flex justify-between">
        <div className="mb-4">
          <h1 className="text-[40px] text-black font-semibold italic mb-[20px]">
            <span className="text-[#fca311]">CINE</span>PHILE
          </h1>
          <p className="text-[#6e7191] text-[17px]">
            Stop waiting in line. Buy tickets
            <br />
            conveniently, watch movies quietly
          </p>
        </div>
        <div className="mb-4">
          <h3 className="tracking-[0.5px] mb-[20px] text-[25px]">Explore</h3>
          <div>
            <Link
              to="/"
              className="text-[#6e7191] text-[17px] font-semibold hover:text-[#fca311]"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="/listMovie"
              className="text-[#6e7191] text-[17px] font-semibold hover:text-[#fca311]"
            >
              List Movie
            </Link>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="tracking-[0.5px] mb-[20px] text-[25px]">
            Our Sponsor
          </h3>
          <div className="max-w-fit h-[30px] mb-[20px] flex items-center">
            <img className="w-full h-auto" src={Ebu} alt="ebu.id" />
          </div>
          <div className="max-w-fit h-[30px] mb-[20px] flex items-center">
            <img className="w-full h-auto" src={Cineone} alt="cineone" />
          </div>
          <div className="max-w-fit h-[30px] mb-[20px] flex items-center">
            <img className="w-full h-auto" src={Hiflix} alt="hiflix" />
          </div>
        </div>
        <div className="mb-4">
          <h3 className="tracking-[0.5px] mb-[20px] text-[25px]">Follow Us</h3>
          <div className="flex justify-start items-center">
            <img className="w-[25px] h-[25px]" src={Facebook} alt="facebook" />
            <p className="ml-2 text-[#6e7191] text-[16px] font-semibold">
              Tickitz Cinema id
            </p>
          </div>
          <div className="flex justify-start items-center">
            <img
              className="w-[25px] h-[25px]"
              src={Instagram}
              alt="instagram"
            />
            <p className="ml-2 text-[#6e7191] text-[16px] font-semibold">
              tickitz.id
            </p>
          </div>
          <div className="flex justify-start items-center">
            <img className="w-[25px] h-[25px]" src={Twiter} alt="twiter" />
            <p className="ml-2 text-[#6e7191] text-[16px] font-semibold">
              tickitz.id
            </p>
          </div>
          <div className="flex justify-start items-center">
            <img className="w-[25px] h-[25px]" src={Youtube} alt="youtube" />
            <p className="ml-2 text-[#6e7191] text-[16px] font-semibold">
              Tickitz Cinema id
            </p>
          </div>
        </div>
      </div>
      <div className="bottom h-[80px] text-[#6e7191] text-[18px] flex justify-center items-center">
        <p>© 2020 Tickitz. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterPublic;
