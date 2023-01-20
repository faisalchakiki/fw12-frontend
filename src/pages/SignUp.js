import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Button from "../collection/Button";
import Input from "../collection/Input";
import InputPass from "../collection/InputPass";
import { registerAction } from "../redux/actions/auth";

const SignUp = () => {
  const navigate = useNavigate();
  // const register = () => navigate("/main");
  const dispatch = useDispatch();
  const register = (event) => {
    event.preventDefault();
    const { value: email } = event.target.email;
    const { value: password } = event.target.password;
    const { value: firstName } = event.target.firstName;
    const { value: lastName } = event.target.lastName;
    const { value: phoneNumber } = event.target.phoneNumber;
    const callback = (err) => {
      if (err) {
        console.log(err);
      } else {
        alert("successful registration,fill and access the app");
        navigate("/login");
      }
    };
    dispatch(
      registerAction({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        callback,
      })
    );
  };

  return (
    <div className="flex h-screen">
      <section className="left w-3/5 bg-[url('../img/bg-auth.jpg')] bg-center bg-no-repeat hidden md:block border-r-[3px]">
        <div className="flex justify-center items-end w-full h-screen pb-[25%] lg:pb-[5%]">
          <h1 className="text-[5vw] text-black italic font-bold">CINEPHILE</h1>
        </div>
      </section>
      <section className="right mx-auto md:mx-0 w-[90%] sm:w-[60%] md:w-2/5 md:px-[6%] md:flex flex-col justify-center items-center md:items-stretch h-screen">
        <h1 className="text-[30px] text-black italic font-bold text-right underline-offset-[5px] underline md:hidden mt-5 mb-5">
          CINEPHILE
        </h1>
        <h1 className="text-[30px] font-semibold mb-[5px]">Sign Up</h1>
        <p className="text-[#aaaaaa] text-[20px] mb-[10px]">
          Fill your additional details
        </p>
        <form onSubmit={register}>
          <Input label="First Name" id="firstName" type="text" />
          <Input label="Last Name" id="lastName" type="text" />
          <Input label="Phone Number" id="phoneNumber" type="text" />
          <Input label="Email" id="email" type="email" />
          <InputPass id="password" />
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
