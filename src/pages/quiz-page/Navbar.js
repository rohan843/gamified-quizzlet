import React,{useState,useEffect} from 'react'
import Timer from '../../components/Timer';

export default function Navbar(props) {
    const[minutes,setMinutes]=useState(props.minutes);
    const[seconds,setSeconds]=useState(props.seconds);

    useEffect(()=>{
        let interval;
        interval =setInterval(()=>{
            if (seconds > 0) {
                setSeconds((seconds) => seconds - 1);
            } else if (minutes > 0) {
                setMinutes((minutes) => minutes - 1);
                setSeconds(59);
                
              } 

        },1000);
        return () => clearInterval(interval);
      },[seconds,minutes]);

  return (
    <div className="w-full border-b flex flex-row px-3 justify-center items-center justify-between">
        <span className="opacity-0">
            Time Left:
        </span>
        <h1 className="text-[40px] text-[#2B7B0F]">
           {props.title}
        </h1>

        <div className="flex flex-row justify-center items-center">
            <h5 className="flex flex-row justify-center items-center">Time Left :  <Timer minutes={minutes} seconds={seconds}/>   mins</h5>
        </div>


      
    </div>
  )
}
