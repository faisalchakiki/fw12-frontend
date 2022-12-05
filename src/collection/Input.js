import React from 'react'

const Input = (props) => {
  return (
    <div className='input-part text-[16px] text-[#4e4b66]'>
      <label for={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} placeholder={`Write your ${props.label}`}
      className='w-full bg-[#fcfdfe] border rounded-2xl divide-solid border-slate-300 py-[10px] pl-[24px] mt-[6px] mb-[8px]' required/>
    </div>
  )
}

export default Input
