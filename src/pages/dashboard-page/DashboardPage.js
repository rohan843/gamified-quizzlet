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

function DashboardPage({ streak, gold, lifelines }) {
  const [trigger, setTrigger] = useState(false);
  const [flashCard, setFlashCard] = useState({
    img: "image2.png",
    title: "Flashcard title",
    info: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
  });
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
          <ExploreButton active />
          <ProfileButton />
          <LeaderboardButton />
          <FlashcardsButton />
        </div>
        <div className="grow h-full overflow-y-auto">
          <FlashcardsView />
        </div>
      </div>
      {/* <button className="bg-black text-white" onClick={()=>{setTrigger(true)}}>clicksdfa</button> */}
    </div>
  );
}

export default DashboardPage;
