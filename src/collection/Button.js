import React from 'react'

const Button = (props) => {
  return (
    <button className={`bg-[#5f2eea] text-white text-center cursor-pointer rounded-[16px] ${props.class}`}>{props.value}</button>
  )
}

export default Button
