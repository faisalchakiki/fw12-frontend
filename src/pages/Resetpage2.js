import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../collection/Button";
import Input from "../collection/Input";

const Resetpage2 = () => {
  const navigate = useNavigate();
  const validation = () => navigate("/homepage");

  return (
    <div className="flex h-screen">
      <section className="left w-3/5 bg-[url('../img/bg-image.png')] bg-cover bg-no-repeat hidden md:block">
        <div className="flex justify-center items-center bg-[#5f2eea] opacity-80 w-full h-screen">
          <h1 className="text-[5vw] text-black italic font-bold">CINEPHILE</h1>
        </div>
      </section>
      <section className="right mx-auto md:mx-0 w-[90%] sm:w-[60%] md:w-2/5 md:px-[6%] md:flex flex-col md:pt-[10%] items-center md:items-stretch h-screen">
        <h1 className="text-[40px] text-black italic font-bold md:hidden text-center mt-5 underline mb-5">
          CINEPHILE
        </h1>
        <h1 className="text-[30px] font-semibold mb-[8px]">
          Fill your complete password
        </h1>
        <p className="text-[#aaaaaa] text-[20px] mb-[20px]">
          set your new password
        </p>
        <form onSubmit={validation}>
          <Input label="Password" id="password" type="password" />
          <Input label="Confirm Password" id="confirmPass" type="password" />
          <Button value="Submit"></Button>
        </form>
      </section>
    </div>
  );
};

export default Resetpage2;
