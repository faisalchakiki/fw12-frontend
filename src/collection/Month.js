import React from "react";

const Month = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className=" pl-[50px] lg:pl-[120px] mt-[20px] flex overflow-x-auto scrollbar">
      {months.map((value, index) => {
        const setMonth = new Date();
        if (index === setMonth.getMonth()) {
          return (
            <div key={index} className="border-2 mr-2 rounded border-[#fca311] p-2 text-[12px] md:text-[15px] min-w-[80px] md:min-w-[100px] text-center cursor-pointer bg-[#fca311] text-white">
              {value}
            </div>
          );
        }
        return (
          <div key={index} className="border-2 mr-2 rounded border-[#fca311] min-w-[80px] text-[#fca311] p-2 text-[12px] md:text-[15px] md:min-w-[100px] text-center cursor-pointer hover:bg-[#fca311] hover:text-white">
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default Month;
