import { useSelector } from "react-redux";

function LeaderboardView() {
  const { leaderboard } = useSelector((store) => store.user);
  const rows = leaderboard.map((row, ind) => {
    if (ind === 0) return null;
    return (
      <>
        <span>#{row[0]}</span>
        <span>{row[1]}</span>
        <span>{row[2]}</span>
        <span>{row[3]}</span>
      </>
    );
  });
  return (
    <div className="w-full h-max min-h-full p-5">
      <div className="grid leaderboard-table justify-items-center bg-[#EDF6F9]">
        <span className="text-lg">Rank</span>
        <span className="text-lg">Name</span>
        <span className="text-lg">Quizzes Solved</span>
        <span className="text-lg">Questions Solved</span>
        <span className="bg-[#cdd6d9] w-full flex justify-center items-center">
          #{leaderboard[0][0]}
        </span>
        <span className="bg-[#cdd6d9] w-full flex justify-center items-center">
          {leaderboard[0][1]}
        </span>
        <span className="bg-[#cdd6d9] w-full flex justify-center items-center">
          {leaderboard[0][2]}
        </span>
        <span className="bg-[#cdd6d9] w-full flex justify-center items-center">
          {leaderboard[0][3]}
        </span>
        {rows}
      </div>
    </div>
  );
}
export default LeaderboardView;
