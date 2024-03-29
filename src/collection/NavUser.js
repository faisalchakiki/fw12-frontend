import React from "react";

import Avatar from "../asset//img/man-icon.png";
import SearchTool from "../asset//logo/search-tool.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import { useNavigate } from "react-router-dom";
import Cinephile from "../asset/logo/logo-cinephile.svg";
import http from "../helper/http";

const NavUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(logoutAction());
    return navigate("/login");
  };
  const [profile, setProfile] = React.useState([]);
  const token = useSelector((state) => state.auth.token);
  React.useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    const { data } = await http(token).get("/profile");
    setProfile(data.data[0]);
  };
  return (
    <>
      <nav className="px-[50px] lg:px-[120px] flex items-center w-full py-[7px]">
        <img alt="" src={Cinephile} className="w-[150px]" />
        <div className="flex flex-1 ml-8 text-[19px] font-semibold">
          <Link to="/" className="mx-3">
            Home
          </Link>
          <Link to="/listMovie" className="mx-3">
            List Movie
          </Link>
        </div>
        <div className="relative mr-[40px] group">
          <form>
            <img
              alt=""
              src={SearchTool}
              className="group-hover:absolute left-2 top-[5px]"
            />
            <input
              type="text"
              className="py-[5px] border border-[#dedede] pl-[40px] pr-[3px] text-[14px] rounded-[10px] hidden group-hover:block"
            ></input>
          </form>
        </div>
        <div className="avatar group relative">
          <div className="w-[45px] h-[45px] cursor-pointer rounded-full overflow-hidden flex items-center justify-center">
            {profile.avatar !== null ? (
              <img
                alt=""
                src={profile.avatar}
                className="w-full mask mask-hexagon"
              />
            ) : (
              <img alt="" src={Avatar} className="w-full mask mask-hexagon" />
            )}
          </div>
          <div className="absolute bg-[#eaeaea] left-[-50%] mt-[100%] py-[5px] px-[20px] rounded-[5px] border border-black invisible group-hover:visible">
            <Link to="/profile" className="hover:text-blue-500">
              <p>Profil</p>
            </Link>
            <Link onClick={Logout}>
              <p className="hover:text-blue-500">Logout</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavUser;
