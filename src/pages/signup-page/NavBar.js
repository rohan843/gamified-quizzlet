import LoginButton from "../../components/LoginButton";

function NavBar() {
  return (
    <div className="w-full border-b flex flex-center justify-between items-center px-3">
      <h1 className="text-[#2B7B0F] text-[40px] ml-[10px]">
        Gamified Quizzlet
      </h1>
      <LoginButton/>
    </div>
  );
}

export default NavBar;
