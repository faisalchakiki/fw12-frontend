import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../collection/Button";
import Input from "../collection/Input";

export default function SignIn() {
  const navigate = useNavigate();
  const validation = () => navigate("/homepage");

  return (
    <div className="flex h-screen">
      <section className=" w-3/5 bgleft-[('../iurlmg/bg-image.png')] bg-cover bg-no-repeat hidden md:block">
        <div className="flex justify-center items-center bg-[#5f2eea] opacity-80 w-full h-screen">
          <h1 className="text-[5vw] text-black italic font-bold">CINEPHILE</h1>
        </div>
      </section>
      <section className="right mx-auto md:mx-0 w-[90%] sm:w-[60%] md:w-2/5 md:px-[6%] md:flex flex-col justify-center items-center md:items-stretch h-screen">
        <h1 className="text-[40px] text-black italic font-bold md:hidden text-center mt-5 underline mb-5">
          CINEPHILE
        </h1>
        <h1 className="text-[40px] font-semibold mb-[8px]">Sign In</h1>
        <p className="text-[#aaaaaa] text-[20px] mb-[20px]">
          Sign in with your data that you entered during your registration
        </p>
        <form onSubmit={validation}>
          <Input label="Email" id="email" type="email" />
          <Input label="Password" id="password" type="password" />
          <Button value="Sign In"></Button>
        </form>
        <div className="w-full text-center mt-3">
          <p className="text-slate-400 text-[17px] my-3">
            Forgot your password?{" "}
            <Link
              to="/resetPage1"
              className="underline text-[#5f2eea] font-bold"
            >
              Reset now
            </Link>
          </p>
          <p className="text-slate-400 text-[17px]">
            Don’t have an account?{" "}
            <Link to="/register" className="underline text-[#5f2eea] font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
