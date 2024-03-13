import GetStartedButton from "./GetStartedButton";

function TopNav() {
  return (
    <div className="w-full border-b flex flex-row items-center justify-between px-3">
      <h1 className="text-[#2B7B0F] text-[40px] my-[4px] logo-shadow">Gamified Quizzlet</h1>
      <GetStartedButton />
    </div>
  );
}

export default TopNav;
