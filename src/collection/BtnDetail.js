import React from "react";

const BtnDetails = (props) => {
  return (
    <button
      className={`w-full text-[#5f2eea] h-[35px] border-[2px] border-[#5f2eea] font-bold text-center cursor-pointer rounded-[4px] hover:bg-[#5f2eea] hover:text-white ${props.class}`}
    >
      {props.value}
    </button>
  );
};

export default BtnDetails;
