import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../collection/Button";
import Input from "../collection/Input";

const SignUp = () => {
  const navigate = useNavigate();
  const register = () => navigate("/homepage");

  return (
    <div className="flex h-screen">
      <section className="left w-3/5 bg-[url('../img/bg-image.png')] bg-cover bg-no-repeat hidden md:block">
        <div className="flex justify-center items-center bg-[#5f2eea] opacity-80 w-full h-screen">
          <h1 className="text-[5vw] text-black italic font-bold">CINEPHILE</h1>
        </div>
      </section>
      <section className="right mx-auto md:mx-0 w-[90%] sm:w-[60%] md:w-2/5 md:px-[6%] md:flex flex-col justify-center items-center md:items-stretch h-screen">
        <h1 className="text-[40px] text-black italic font-bold md:hidden text-center mt-5 underline mb-5">CINEPHILE</h1>
        <h1 className="text-[30px] font-semibold mb-[5px]">Sign Up</h1>
        <p className="text-[#aaaaaa] text-[20px] mb-[10px]">
          Fill your additional details
        </p>
        <form onSubmit={register}>
          <Input label="First Name" id="firstname" type="text" />
          <Input label="Last Name" id="lastname" type="text" />
          <Input label="Phone Number" id="phonenumber" type="text" />
          <Input label="Email" id="email" type="email" />
          <Input label="Password" id="password" type="password" />
          <Button value="Sign Up"></Button>
        </form>
        <div className="w-full text-center mt-3">
          <p className="text-slate-400 text-[17px] mt-1">
            Already have account?{" "}
            <Link to="/login" className="underline text-[#5f2eea] font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
