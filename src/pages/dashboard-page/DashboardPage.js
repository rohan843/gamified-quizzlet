import { useState } from "react";
import { ReactComponent as Fire } from "../../assets/fire.svg";
import { ReactComponent as Gold } from "../../assets/gold.svg";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import FlashCardModal from "../../components/FlashCardModal";
import ExploreButton from "./ExploreButton";
import ExploreView from "./ExploreView";
import FlashcardsButton from "./FlashcardsButton";
import LeaderboardButton from "./LeaderboardButton";
import ProfileButton from "./ProfileButton";
import FlashcardsView from "./FlashcardsView";
import { Outlet , Link} from "react-router-dom";

function DashboardPage({ streak, gold, lifelines }) {
  const [trigger, setTrigger] = useState(false);
  const [flashCard, setFlashCard] = useState({
    img: "image2.png",
    title: "Flashcard title",
    info: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
  });
  function initialValue(){
    
    if(window.location.pathname==="/dashboard/profile"){
      return 1;
    }else if( window.location.pathname==="/dashboard/leaderboard"){
      return 2;
    }else if( window.location.pathname==="/dashboard/flashcards"){
      return 3;
    }else{
      return 0;
    }
  }
  const [currentButton,setCurrentButton]=useState(initialValue())

  function onClickCurrentButton(val){
    setCurrentButton(val);
  }
  return (
    <div
      className="w-full h-full grid grid-cols-1"
      style={{
        gridTemplateRows: "max-content minmax(0, 1fr)",
      }}
    >
      <FlashCardModal
        flashcard={flashCard}
        trigger={trigger}
        setTrigger={setTrigger}
      />
      {/* Top Nav */}
      <div className="w-full h-max flex flex-row justify-between items-center border-b px-3">
        <h1 className="text-[#2B7B0F] text-[40px] my-[4px] logo-shadow">
          Gamified Quizzlet
        </h1>
        <div className="w-max h-full flex flex-row items-center">
          <Fire className="mr-1.5" />
          <span className="streak-number mr-4">{streak}</span>
          <Gold className="mr-1.5" />
          <span className="gold-number mr-4">{gold}</span>
          <Heart className="mr-1.5" />
          <span className="lifelines-number">{lifelines}</span>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-max h-full p-5 border-r flex flex-col">
        {console.log(window.location.pathname)}
          <Link to={"/dashboard/explore"}>
          
          <ExploreButton active ={currentButton===0} onClick={()=>onClickCurrentButton(0)}/>
          </Link>
          
           <Link to={"/dashboard/profile"}>
          <ProfileButton active ={currentButton===1} onClick={()=>onClickCurrentButton(1)}/>
          </Link>
          <Link to={"/dashboard/leaderboard"} >
          <LeaderboardButton active ={currentButton===2} onClick={()=>onClickCurrentButton(2)}/>
          </Link>
          <Link to={"/dashboard/flashcards"}>
          <FlashcardsButton active ={currentButton===3} onClick={()=>onClickCurrentButton(3)}/>
          </Link>
        </div>
        <div className="grow h-full overflow-y-auto">
          <Outlet/>
        </div>
      </div>
      {/* <button className="bg-black text-white" onClick={()=>{setTrigger(true)}}>clicksdfa</button> */}
    </div>
  );
}

export default DashboardPage;
