import React from 'react'
import Robot from "../assets/image1.png";
import Gold from "../assets/Gold.png"


export default function HeartModal() {
  return (
    <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm justify-center item-center flex'>
        <div className='w-[635px] h-[469px] rounded-xl flex flex-col bg-[#EDF6F9] justify-center items-center mt-10'>
          <img src={Robot} alt="" height={100} width={100} />
           <br />
          <span className='mt-[5px]'>Oops!! You ran out of lifelines</span>
          <br />
          
          <span>You can either wait for 10s</span>
          <br />
          <span>Or</span>

          <br />

          <div className='flex flex-col justify-center items-center'>
          <button className='w-[276px] h-[66px] rounded-xl bg-white border-2 border-[#2F7B15] stroke-2 flex flex-row justify-center items-center'>Refill Lifeline for 20 
          <img src={Gold} height={20} width={20}/>
          </button>
            <span className='flex flex-row justify-center items-center text-[#EE0404]'>Not Enough <img src={Gold} height={20} width={20} className='ml-[5px]'/></span>
          </div>

          <button className='w-[276px] h-[66px] rounded-xl bg-white border-2 border-[#D05F20] stroke-[#D05F20] mt-[10px]'>End Quiz Instead</button>



        </div>
      
    </div>
  )
}
