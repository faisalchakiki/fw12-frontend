import React from 'react'

const Button = (props) => {
  return (
    <button className={`w-full py-[10px] my-[5px] bg-[#5f2eea] text-white text-center cursor-pointer rounded-[16px] hover:bg-[blue] ${props.class}`}>{props.value}</button>
  )
}

export default Button
