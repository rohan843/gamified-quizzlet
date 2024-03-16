import GetStartedButton from "../../components/GetStartedButton";
import {Link} from "react-router-dom"

function TopNav() {
  return (
    <div className="w-full border-b flex flex-row items-center justify-between px-3">
      <h1 className="text-[#2B7B0F] text-[40px] my-[4px] logo-shadow">
        Gamified Quizzlet
      </h1>
      <Link to="/signup">
      <GetStartedButton />
      </Link>
    </div>
  );
}

export default TopNav;
