import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function QuizPage() {

     const [selectedOption, setSelectedOption] = useState(null);
     const [checkButtonActive, setCheckButtonActive] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setCheckButtonActive(true)
  };
  return (
    <div className="flex flex-col">
      <Navbar title="Science Quiz 1" minutes={0} seconds={0} />

      <div className="w-full scroll">
        <div className="w-full flex flex-row justify-between px-4 mt-[5px]">
          <div className="w-[850px] h-[27px] bg-[#D9D9D9] rounded-xl mt-[5px] ml-[5px]">
            <div className="h-full bg-[#26E422] rounded-xl w-[10%]" />
          </div>
          <div className="ml-[5px] justify-center items-center mt-[5px] flex flex-row">
            <img src="src/assets/HeartIcon.png"></img>
            <span className="text-[#EE0404] text-[20px] items-center justify-center ml-[5px]">
              5
            </span>
          </div>
          <button className="get-started-button">QUIT</button>
        </div>
        <div className="w-full flex flex-col mt-[50px] ml-[60px]">
          <span className="text-[40px]">What is the capital of India?</span>

          <div className="grid grid-cols-2 gap-4 max-w-fit mt-[10px]">
            <div className={`w-[348px] h-[73px] bg-[#EDF6F9] p-4 rounded-xl cursor-pointer ${selectedOption === 'A' ? 'bg-[#07BBF7]' : ''}`}
         onClick={() => handleOptionClick('A')}>
              <div className="flex flex-row items-center h-full">
                <div className="w-[40px] h-[40px] bg-[#D9D9D9] border border-black text-[30px] text-center">
                  {" "}
                  A.
                </div>
                <span className=" text-[40px]  ml-[10px]">Mumbai</span>
              </div>
            </div>
            <div className={`w-[348px] h-[73px] bg-[#EDF6F9] p-4 rounded-xl cursor-pointer ${selectedOption === 'B' ? 'bg-[#07BBF7]' : ''}`}
         onClick={() => handleOptionClick('B')}>
            
              <div className="flex flex-row items-center h-full">
                <div className="w-[40px] h-[40px] bg-[#D9D9D9] border border-black text-[30px] text-center">
                  {" "}
                  B.
                </div>
                <span className=" text-[40px]  ml-[10px]">Banglore</span>
              </div>
            </div>
            <div className={`w-[348px] h-[73px] bg-[#EDF6F9] p-4 rounded-xl cursor-pointer ${selectedOption === 'C' ? 'bg-[#07BBF7]' : ''}`}
         onClick={() => handleOptionClick('C')}>
              <div className="flex flex-row items-center h-full">
                <div className="w-[40px] h-[40px] bg-[#D9D9D9] border border-black text-[30px] text-center">
                  {" "}
                  C.
                </div>
                <span className=" text-[40px]  ml-[10px]">Tamil Nadu</span>
              </div>
            </div>
            <div className={`w-[348px] h-[73px] bg-[#EDF6F9] p-4 rounded-xl cursor-pointer ${selectedOption === 'D' ? 'bg-[#07BBF7]' : ''}`}
         onClick={() => handleOptionClick('D')}>
              <div className="flex flex-row items-center h-full">
                <div className="w-[40px] h-[40px] bg-[#D9D9D9] border border-black text-[30px] text-center">
                  {" "}
                  D.
                </div>
                <span className=" text-[40px]  ml-[10px]">Delhi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bottom-5 left-0 border-t fixed flex flex-row justify-between px-10">
        <button className="w-[348px] h-[70px] bg-[#D9D9D9] rounded-xl mt-[5px] text-[40px] text-[#B1B1B1] skip-shadow">
          <span>SKIP</span>
        </button>

        <button className={`w-[348px] h-[70px] bg-[#D9D9D9] rounded-xl mt-[5px] text-[40px] text-[#B1B1B1] skip-shadow ${checkButtonActive ? 'bg-[#F5B54C] text-black' : ''}`} disabled={!checkButtonActive}>
          <span className=".skip-shadow">CHECK</span>
        </button>
      </div>
    </div>
  );
}
