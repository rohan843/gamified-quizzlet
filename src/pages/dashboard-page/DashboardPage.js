import { ReactComponent as Fire } from "../../assets/fire.svg";
import { ReactComponent as Gold } from "../../assets/gold.svg";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import ExploreButton from "./ExploreButton";
import FlashcardsButton from "./FlashcardsButton";
import LeaderboardButton from "./LeaderboardButton";
import ProfileButton from "./ProfileButton";

function DashboardPage({ streak, gold, lifelines }) {
  return (
    <div className="w-full h-full flex flex-col">
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
      <div className="grow flex flex-row">
        <div className="w-max p-10 border-r flex flex-col">
          <ExploreButton />
          <ProfileButton />
          <LeaderboardButton />
          <FlashcardsButton />
        </div>
        <div className="grow"></div>
      </div>
    </div>
  );
}

export default DashboardPage;
