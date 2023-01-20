import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../collection/Button";
import Input from "../collection/Input";

const Resetpage1 = () => {
  const navigate = useNavigate();
  const validation = () => navigate("/resetPage2");

  return (
    <div className="flex h-screen">
      <section className="left w-3/5 bg-[url('../img/bg-auth.jpg')] bg-center bg-no-repeat hidden md:block border-r-[3px]">
        <div className="flex justify-center items-end w-full h-screen pb-[25%] lg:pb-[5%]">
          <h1 className="text-[5vw] text-black italic font-bold">CINEPHILE</h1>
        </div>
      </section>
      <section className="right mx-auto md:mx-0 w-[90%] sm:w-[60%] md:w-2/5 md:px-[6%] md:flex flex-col md:pt-[10%] items-center md:items-stretch h-screen">
        <h1 className="text-[30px] text-black italic font-bold text-right underline-offset-[5px] underline md:hidden mt-5 mb-5">
          CINEPHILE
        </h1>
        <h1 className="text-[30px] font-semibold mb-[8px]">
          Fill your complete email
        </h1>
        <p className="text-[#aaaaaa] text-[20px] mb-[20px]">
          we'll send a link to your email shortly
        </p>
        <form onSubmit={validation}>
          <Input label="Email" id="email" type="email" />
          <Button value="Send"></Button>
        </form>
      </section>
    </div>
  );
};

export default Resetpage1;
