import { useState } from "react";

function ProfileView() {
  const easyQuizzes = 30;
  const mediumQuizzes = 40;
  const hardQuizzes = 80;
  const totalQuizzes = 400;
  const questions = 300;

  const badgeImages = [
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
  ].map((image) => (
    <img src={image} alt="badge" className="h-[90px] w-[90px] object-cover" />
  ));

  const profilePic = "https://picsum.photos/200/300";
  const name = "ABC DEFGH";
  const email = "abcd@example.com";
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");

  const handlePasswordChange = () => {
    alert("Password Changed Successfully!");
  };

  return (
    <div className="flex flex-row h-full w-full">
      <div className="w-[60%] h-full border-r overflow-auto">
        <div className="flex flex-col w-full p-5">
          <div className="flex flex-row w-full mt-7 mb-12">
            <div className="grow flex flex-row justify-center items-center">
              <div
                className="flex flex-col rounded-full w-[130px] h-[130px] items-center justify-center"
                style={{
                  border: "5px solid rgba(56, 203, 4, 0.6)",
                }}
              >
                <span className="text-[#D05F20] text-lg">
                  {easyQuizzes + mediumQuizzes + hardQuizzes} Quizzes
                </span>
                <hr className="w-[80%] border-black" />
                <span className="text-[#875400]">of {totalQuizzes}</span>
              </div>
              <div className="flex flex-col ml-4">
                <span className="text-[#2B7B0F]">{easyQuizzes} Easy</span>
                <span className="text-[#F5B54C]">{mediumQuizzes} Medium</span>
                <span className="text-[#D11515]">{hardQuizzes} Hard</span>
              </div>
            </div>
            <div className="grow flex items-center justify-center">
              <span className="text-[#BA08BD]">
                <span className="text-[70px]">{questions}</span> Questions
                Solved
              </span>
            </div>
          </div>
          <div className="w-full bg-[#EDF6F9] shadow-xl rounded-[24px] p-7">
            <h1 className="text-[30px] text-[#900101] mb-4">Badges Earned</h1>
            <div className="grid grid-cols-3 justify-items-center gap-4">
              {badgeImages}
            </div>
          </div>
        </div>
      </div>
      <div className="grow h-full flex flex-col items-center p-5 overflow-auto">
        <img
          src={profilePic}
          alt=""
          className="h-[200px] w-[200px] object-cover rounded-lg"
        />
        <h1 className="text-[30px] mt-3 mb-1">{name}</h1>
        <p className="text-[18px] text-[#b1b1b1] mb-10">{email}</p>
        <div className="w-[70%] h-max">
          <h2 className="w-full text-[18px] mb-3">Change Password:</h2>
          <input
            type="password"
            placeholder="Old Password"
            className="w-full h-[40px] rounded-[12px] border-2 border-black mb-3 p-4"
            value={oldPwd}
            onChange={(e) => {
              setOldPwd(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full h-[40px] rounded-[12px] border-2 border-black mb-3 p-4"
            value={newPwd}
            onChange={(e) => {
              setNewPwd(e.target.value);
            }}
          />
        </div>
        <button
          style={{
            WebkitBoxShadow: "4px 4px 0px 0px rgba(208, 95, 32, 0.25)",
            boxShadow: "4px 4px 0px 0px rgba(208, 95, 32, 0.25)",
          }}
          className="rounded-[12px] bg-[#D05F20] min-w-[140px] min-h-[40px] text-[18px] text-white"
          onClick={() => {
            handlePasswordChange();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ProfileView;
