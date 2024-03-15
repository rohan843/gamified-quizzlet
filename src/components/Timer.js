import React from 'react'

export default function Timer({minutes,seconds}) {
  return (
    <div className='w-[110px] h-[43px] bg-[#D9D9D9] text-[30px] text-center rounded-[10px]'>
      {minutes} <span>:</span> {seconds}
    </div>
  )
}
