function ProfileView() {
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
                <span className="text-[#D05F20] text-lg">150 Quizzes</span>
                <hr className="w-[80%] border-black" />
                <span className="text-[#875400]">of 300</span>
              </div>
              <div className="flex flex-col ml-4">
                <span className="text-[#2B7B0F]">30 Easy</span>
                <span className="text-[#F5B54C]">40 Medium</span>
                <span className="text-[#D11515]">80 Hard</span>
              </div>
            </div>
            <div className="grow flex items-center justify-center">
              <span className="text-[#BA08BD]">
                <span className="text-[70px]">300</span> Questions Solved
              </span>
            </div>
          </div>
          <div className="w-full bg-[#EDF6F9] shadow-xl rounded-[24px] p-7">
            <h1 className="text-[30px] text-[#900101] mb-4">Badges Earned</h1>
            <div className="grid grid-cols-3 justify-items-center gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png"
                alt=""
                className="h-[90px] w-[90px] object-cover"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png"
                alt=""
                className="h-[90px] w-[90px] object-cover"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png"
                alt=""
                className="h-[90px] w-[90px] object-cover"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png"
                alt=""
                className="h-[90px] w-[90px] object-cover"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png"
                alt=""
                className="h-[90px] w-[90px] object-cover"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png"
                alt=""
                className="h-[90px] w-[90px] object-cover"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png"
                alt=""
                className="h-[90px] w-[90px] object-cover"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png"
                alt=""
                className="h-[90px] w-[90px] object-cover"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png"
                alt=""
                className="h-[90px] w-[90px] object-cover"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png"
                alt=""
                className="h-[90px] w-[90px] object-cover"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png"
                alt=""
                className="h-[90px] w-[90px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grow h-full flex flex-col items-center p-5 overflow-auto">
        <img
          src="https://picsum.photos/200/300"
          alt=""
          className="h-[200px] w-[200px] object-cover rounded-lg"
        />
        <h1 className="text-[30px] mt-3 mb-1">ABC DEFGH</h1>
        <p className="text-[18px] text-[#b1b1b1] mb-10">abcd@example.com</p>
        <div className="w-[70%] h-max">
          <h2 className="w-full text-[18px] mb-3">Change Password:</h2>
          <input
            type="password"
            placeholder="Old Password"
            className="w-full h-[40px] rounded-[12px] border-2 border-black mb-3 p-4"
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full h-[40px] rounded-[12px] border-2 border-black mb-3 p-4"
          />
        </div>
        <button
          style={{
            WebkitBoxShadow: "4px 4px 0px 0px rgba(208, 95, 32, 0.25)",
            boxShadow: "4px 4px 0px 0px rgba(208, 95, 32, 0.25)",
          }}
          className="rounded-[12px] bg-[#D05F20] min-w-[140px] min-h-[40px] text-[18px] text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ProfileView;
