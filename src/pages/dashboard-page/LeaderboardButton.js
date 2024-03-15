import classNames from "classnames";

function LeaderboardButton({ active, onClick }) {
  return (
    <button
      className={classNames("w-[280px] text-[50px] border leaderboard-button mt-5", {
        "text-[#D05F20] bg-white": !active,
        "text-white bg-[#D05F20]": active,
      })}
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      Leaderboard
    </button>
  );
}

export default LeaderboardButton;
