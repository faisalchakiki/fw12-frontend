import React from "react";
import EyePass from "../asset/logo/eye.svg"

const InputPass = (props) => {
  const showPass = () => {
    let pass = document.getElementById(props.id);
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  };
  return (
    <>
      <div className="input-part text-[16px] text-[#4e4b66]">
        <label for="password">Password</label>
        <div className="relative">
          <input
            type="password"
            id="password"
            name="password"
            placeholder={`Write your Password`}
            className={`w-full bg-[#fcfdfe] border rounded-2xl divide-solid border-slate-300 py-[10px] pl-[24px] mt-[6px] mb-[8px]`}
            required
          />
          <img
            className="absolute right-[10px] top-[35%] cursor-pointer"
            alt=""
            src={EyePass}
            onClick={showPass}
          />
        </div>
      </div>
    </>
  );
};

export default InputPass;
