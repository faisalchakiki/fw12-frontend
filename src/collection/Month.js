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
      {months.map((month, index) => {
        const setMonth = new Date();
        if (index === setMonth.getMonth()) {
          return (
            <div className="border-2 mr-2 rounded border-[#5f2eea] p-2 min-w-[100px] text-center cursor-pointer bg-[#5f2eea] text-white">
              {month}
            </div>
          );
        }
        return (
          <div className="border-2 mr-2 rounded border-[#5f2eea] text-[#5f2eea] p-2 min-w-[100px] text-center cursor-pointer hover:bg-[#5f2eea] hover:text-white">
            {month}
          </div>
        );
      })}
    </div>
  );
};

export default Month;
