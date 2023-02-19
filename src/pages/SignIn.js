import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { login as loginAction } from "../redux/reducers/auth";
import { loginAction } from "../redux/actions/auth";

import Button from "../collection/Button";
import Input from "../collection/Input";
import InputPass from "../collection/InputPass";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = document.querySelector(".alert");

  if (window.addEventListener) {
    window.addEventListener("click", () => alert.classList.add("hidden"));
  }
  const login = (event) => {
    event.preventDefault();
    const { value: email } = event.target.email;
    const { value: password } = event.target.password;
    const callback = (err) => {
      console.log(err);
      if (err) {
        const alert = document.querySelector(".alert");
        alert.classList.remove("hidden");
      } else {
        navigate("/");
      }
    };
    dispatch(loginAction({ email, password, callback }));
  };
  return (
    <div className="flex h-screen">
      <section className="left w-3/5 bg-[url('../img/bg-auth.jpg')] bg-center bg-no-repeat hidden md:block border-r-[3px]">
        <div className="flex justify-center items-end w-full h-screen pb-[25%] lg:pb-[5%]">
          <h1 className="text-[5vw] text-black italic font-bold">CINEPHILE</h1>
        </div>
      </section>
      <section className="right mx-auto md:mx-0 w-[90%] sm:w-[60%] md:w-2/5 md:px-[6%] md:flex flex-col justify-center items-center md:items-stretch h-screen relative">
        <span className="alert hidden absolute top-1 left-[25%] w-[250px] text-center rounded-[15px] text-white px-[20px] py-2 bg-red-500">
          Email and Passsword Not Found
        </span>
        <h1 className="text-[30px] text-black italic font-bold text-right underline-offset-[5px] underline md:hidden mt-5 mb-5">
          CINEPHILE
        </h1>
        <h1 className="text-[40px] font-semibold mb-[8px]">Sign In</h1>
        <p className="text-[#aaaaaa] text-[20px] mb-[20px]">
          Sign in with your data that you entered during your registration
        </p>
        <form onSubmit={login}>
          <Input label="Email" id="email" type="email" />
          <InputPass id="password" label='Password'/>
          <Button value="Sign In"></Button>
        </form>
        <div className="w-full text-center mt-3">
          <p className="text-slate-400 text-[17px] my-3">
            Forgot your password?{" "}
            <Link
              to="/resetPage1"
              className="underline text-[#fca311] font-bold"
            >
              Reset now
            </Link>
          </p>
          <p className="text-slate-400 text-[17px]">
            Don’t have an account?{" "}
            <Link to="/register" className="underline text-[#fca311] font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
