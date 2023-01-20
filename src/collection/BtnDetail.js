import React from "react";
import { Link } from "react-router-dom";

const BtnDetails = (props) => {
  // console.log(props)
  return (
    <Link to={`${props.path}/${props.idMovie}`} className="w-full">
      <button
        className={`btn btn-md w-full text-[#fca311] border-[2px] border-[#fca311] font-bold text-center cursor-pointer rounded-[4px] hover:bg-[#fca311] hover:text-white ${props.class}`}
      >
        {props.value}
      </button>
    </Link>
  );
};

export default BtnDetails;
