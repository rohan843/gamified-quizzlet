import React, { useState, useEffect } from "react";
import { ReactComponent as Heart } from "../../assets/HeartIcon.svg";
import Robot from "../../assets/image1.png";
import Navbar from "./Navbar";
import HeartModal from "../../components/HeartModal";
import {Link,useParams} from "react-router-dom";

export default function QuizPage({minutes,seconds,correctOption}) {

     const [selectedOption, setSelectedOption] = useState(null);
     const [checkButtonActive, setCheckButtonActive] = useState(false);
     const [showCheckDiv, setShowCheckDiv] = useState(true)
     const [showAnsDiv,setShowAnsDiv] = useState(false)
     const [progressBar,setProgressBar] = useState(0);
     const [heartCnt,setHeartCnt] = useState(5)
     const [expressionText,setExpressionText] = useState("")

     const {quiz_id} = useParams()


  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setCheckButtonActive(true)
  };
  const handleCheckClick=()=>{
    if(selectedOption!==correctOption){
       setHeartCnt((heartCnt)=>Math.max(heartCnt-1,0))
       console.log(heartCnt);
       setExpressionText("Oops!! Wrong Answer")
       
    }else {
      setExpressionText("Well Done!! Correct Answer")
    }
    setProgressBar((progressBar)=> Math.min(progressBar+10,100))
    setCheckButtonActive(false)
    setShowAnsDiv(true)
    setShowCheckDiv(false)
    
    
  }

  const handleContinueButton=()=>{
    setShowCheckDiv(true)
    setShowAnsDiv(false)
    setSelectedOption(null)
    
  }
  return (
    <>
    
    <div className="flex flex-col h-full w-full">
    <div>
      {heartCnt===0 && <HeartModal/>}
    </div>
      <Navbar title={`Science Quiz ${quiz_id}`} minutes={minutes} seconds={seconds} />

      <div className="w-full h-full overflow-y-auto overflow-x-hidden grow p-4">
        <div className="w-full flex flex-row justify-between px-4 mt-[5px]">
          <div className="w-[850px] h-[27px] bg-[#D9D9D9] rounded-xl mt-[5px] ml-[5px]">
            <div className="h-full bg-[#26E422] rounded-xl " style={{ width: `${progressBar}%` }} />
          </div>
          <div className="ml-[5px] justify-center items-center mt-[5px] flex flex-row">
            <Heart/>
            <span className="text-[#EE0404] text-[20px] items-center justify-center ml-[5px]">
              {heartCnt}
            </span>
          </div>
          <Link to={"/quiz/:quiz_id/end"}>
          <button className="get-started-button">QUIT</button>
          </Link>
        </div>
        <div className="w-full flex flex-col mt-[50px] ml-[60px]">
          <span className="text-[40px]">What is the capital of India?</span>

          <img src={Robot} alt="" height={150} width={150} />

          <div className="grid grid-cols-2 gap-4 max-w-fit mt-[10px]">
            <div className={`w-[348px] h-[73px] bg-[#EDF6F9] p-4 rounded-xl cursor-pointer ${selectedOption === 'A' ? 'bg-[#F2AFE7]' : ''}`}
         onClick={() => handleOptionClick('A')}>
              <div className="flex flex-row items-center h-full">
                <div className="w-[40px] h-[40px] bg-[#D9D9D9] border border-black text-[30px] text-center">
                  {" "}
                  A.
                </div>
                <span className=" text-[40px]  ml-[10px]">Mumbai</span>
              </div>
            </div>
            <div className={`w-[348px] h-[73px] bg-[#EDF6F9] p-4 rounded-xl cursor-pointer ${selectedOption === 'B' ? 'bg-[#F2AFE7]' : ''}`}
         onClick={() => handleOptionClick('B')}>
            
              <div className="flex flex-row items-center h-full">
                <div className="w-[40px] h-[40px] bg-[#D9D9D9] border border-black text-[30px] text-center">
                  {" "}
                  B.
                </div>
                <span className=" text-[40px]  ml-[10px]">Banglore</span>
              </div>
            </div>
            <div className={`w-[348px] h-[73px] bg-[#EDF6F9] p-4 rounded-xl cursor-pointer ${selectedOption === 'C' ? 'bg-[#F2AFE7]' : ''}`}
         onClick={() => handleOptionClick('C')}>
              <div className="flex flex-row items-center h-full">
                <div className="w-[40px] h-[40px] bg-[#D9D9D9] border border-black text-[30px] text-center">
                  {" "}
                  C.
                </div>
                <span className=" text-[40px]  ml-[10px]">Tamil Nadu</span>
              </div>
            </div>
            <div className={`w-[348px] h-[73px] bg-[#EDF6F9] p-4 rounded-xl cursor-pointer ${selectedOption === 'D' ? 'bg-[#F2AFE7]' : ''}`}
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
     <div className="w-full bg-white flex flex-row justify-between border-t h-max p-4">
      {showCheckDiv && (
      <div className="w-full flex flex-row justify-between px-10 bg-white">
        <button className={`w-[348px] h-[70px] bg-[#D9D9D9] rounded-xl mt-[5px] text-[40px] text-[#B1B1B1] skip-shadow ${showAnsDiv===true?'opacity-0':''}`}>
          <span>SKIP</span>
        </button>

        <button className={`w-[348px] h-[70px] bg-[#D9D9D9] rounded-xl mt-[5px] text-[40px] text-[#B1B1B1] skip-shadow ${checkButtonActive ? 'bg-[#F5B54C] text-black' : ''}`} disabled={!checkButtonActive}
         onClick={() => handleCheckClick()}
        >
          <span className=".skip-shadow">CHECK</span>
        </button>
      </div>
       )}

{showAnsDiv && (
      <div className={`w-full h-full flex flex-row justify-between px-10 ${selectedOption===correctOption?'bg-[#26E422]' : 'bg-[#EE0404]'}`}>
         
          <span className="text-[40px] text-center">{expressionText}</span>
        
        <button className="w-[348px] h-[70px] bg-[#F5B54C] rounded-xl mt-[5px] text-[40px] text-black skip-shadow"
          onClick={()=> handleContinueButton()}
        >
          <span className=".skip-shadow ">CONTINUE</span>
        </button>
      </div>
       )}
       
    </div>
    </div>
    
    </>
  );
  
}
