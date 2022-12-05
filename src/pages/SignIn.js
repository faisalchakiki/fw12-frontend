import React from "react";
import { Link } from "react-router-dom";

import Button from "../collection/Button";
import Input from "../collection/Input";
import background from "../asset/img/bg-image.png";

export default function SignIn() {
  return (
    <div className="flex h-screen">
      <section className="left w-3/5 bg-[#5f2eea] opacity-80">
        <image src={background} alt="image background" className="h-screen w-full "/>
        <div className="relative flex justify-center items-center w-full h-screen">
            <h1 className="text-[5vw] text-white italic font-bold">CINEPHILE</h1>
        </div>
      </section>
      <section className="right w-2/5 p-[6%] h-screen">
        <h1 className="text-[40px] font-semibold mb-[8px]">Sign In</h1>
        <p className="text-slate-400 text-[20px] mb-[20px]">
          Sign in with your data that you entered during your registration
        </p>
        <Input label="Email" id="email" type="email"/>
        <Input label="Password" id="password" type="password"/>
        <Link to='/homepage'><Button value='Sign In' class='w-full py-[10px] my-[5px]'></Button></Link>
        <div className="w-full text-center mt-3">
          <p className="text-slate-400 text-[17px] my-3">Forgot your password? <Link to='' className="underline text-[#5f2eea]">Reset now</Link></p>
          <p className="text-slate-400 text-[17px]">Don’t have an account? <Link to='' className="underline text-[#5f2eea]">Sign Up</Link></p>
        </div>
      </section>
    </div>
  );
}
