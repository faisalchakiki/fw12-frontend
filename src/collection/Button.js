import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.submit} type='submit' className={`btn btn-md w-full py-[10px] my-[5px] bg-[#fca311] text-white text-center cursor-pointer rounded-[16px] hover:bg-orange-600 ${props.class}`}>{props.value}</button>
  )
}

export default Button
