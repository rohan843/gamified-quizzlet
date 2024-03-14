function ProfileView() {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="w-[60%] h-full border-r overflow-auto">
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full my-12">
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
          <div></div>
        </div>
      </div>
      <div className="grow h-full"></div>
    </div>
  );
}

export default ProfileView;
