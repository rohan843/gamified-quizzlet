import TopNav from "./TopNav";
import robotImage from "../../assets/image 1.png";

function WelcomePage() {
  return (
    <div className="w-full h-full flex flex-col">
      <TopNav />
      <div className="flex flex-row grow">
        <div className="h-full w-[30%]">
          <img src={robotImage} alt="test" />
        </div>
        <div className="flex flex-col h-full grow">
          <h1 className="text-[#191919] text-[64px]">Learning Starts Here!</h1>
          <p className="text-[#787878] text-[20px]">
            The fun and interactive way to enhance your{" "}
            <span className="text-[#454343] decoration-wavy underline decoration-[#2B7B0F]">
              General Knowledge
            </span>
            .
          </p>
          <button>Get Started</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
