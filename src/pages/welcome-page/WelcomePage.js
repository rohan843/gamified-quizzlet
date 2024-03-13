import TopNav from "./TopNav";
import robotImage from "../../assets/image 1.png";

function WelcomePage() {
  return (
    <div className="w-full h-full flex flex-col">
      <TopNav />
      <div className="flex flex-row grow py-10 px-2">
        <div className="h-full w-[40%] mx-5 flex flex-row justify-center">
          <div className="w-[220px] h-[260px] object-contain mt-[150px]">
            <img src={robotImage} alt="test" />
          </div>
        </div>
        <div className="flex flex-col h-full grow">
          <h1 className="text-[#191919] text-[64px] mt-[100px]">Learning Starts Here!</h1>
          <p className="text-[#787878] text-[20px]">
            The fun and interactive way to enhance your{" "}
            <span className="text-[#454343] decoration-wavy underline decoration-[#2B7B0F]">
              General Knowledge
            </span>
            .
          </p>
          <button className="w-max h-max get-started-button mb-3 mt-9">Get Started</button>
          <button className="w-max h-max login-button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
