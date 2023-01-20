import React from "react";
import Footer from "../collection/Footer";
import Input from "../collection/Input";
import Avatar from "../asset/img/avatar.png";
import Button from "../collection/Button";
import { Link, useNavigate } from "react-router-dom";
import NavUser from "../collection/NavUser";
import { useDispatch } from "react-redux";
import { logout as logoutAction} from "../redux/reducers/auth";


const Profil = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const Logout = ()=>{
    dispatch(logoutAction())
    return navigate("/login")
  }
  return (
    <>
      <NavUser></NavUser>
      <main className="flex gap-5 px-[120px] py-[50px] bg-[#f5f6f8] items-start">
        <section className="bg-white rounded-[24px] w-[25%] p-[20px]">
          <p className="">INFO</p>
          <div className="w-[60%] h-auto border-[2px] border-black my-[20px] mx-auto rounded-full">
            <img alt="" src={Avatar} className="w-full h-auto" />
          </div>
          <h4 className="text-[20px] text-[#14142b] text-center">
            Jonas El Matadora
          </h4>
          <p className="text-[#4e4b66] text-[14px] text-center">Moviegoers</p>
          <Link onClick={Logout}><Button 
            value="Logout"
            class="mt-[40px] h-[35px] py-0 w-[70%] mx-auto block"
          /></Link>
        </section>
        <section className="flex-1">
          <div className="navbar-profile bg-white rounded-[24px] p-[20px] w-[100%] flex gap-5 mb-[20px]">
            <div className="border-b-[2px] pb-1 border-[#fca311]">
              <Link to="/profile">
                <p>Account Settings</p>
              </Link>
            </div>
            <div>
              <Link to="/history">
                <p>Order History</p>
              </Link>
            </div>
          </div>
          <div className="details-profile bg-white rounded-[24px] p-[20px] w-[100%] flex gap-5 mb-[20px] flex-col">
            <p>Details Information</p>
            <hr />
            <div className="grid grid-cols-2 gap-[30px]">
              <Input label="First Name" value="Jonas"></Input>
              <Input label="Last Name" value="El Matador"></Input>
            </div>
            <div className="grid grid-cols-2 gap-[30px]">
              <Input label="Email" value="jonasrodrigu123@gmail.com"></Input>
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
                    value="83248643242"
                    className={`w-full bg-[#fcfdfe] border rounded-2xl divide-solid border-slate-300 py-[10px] pl-[60px] mt-[6px] mb-[8px]`}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <Button value="Update changes" class="w-[35%] h-[35px] py-0 mb-[20px]"></Button>
          <div className="details-profile bg-white rounded-[24px] p-[20px] w-[100%] flex gap-5 mb-[20px] flex-col">
            <p>Account and Privacy</p>
            <hr />
            <div className="grid grid-cols-2 gap-[30px]">
              <Input label="New Passwod"></Input>
              <Input label="Confirm Password"></Input>
            </div>
          </div>
          <Button value="Update changes" class="w-[35%] h-[35px] py-0"></Button>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Profil;
