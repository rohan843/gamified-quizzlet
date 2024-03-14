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
            </div>
          </div>
        </div>
      </div>
      <div className="grow h-full"></div>
    </div>
  );
}

export default ProfileView;
