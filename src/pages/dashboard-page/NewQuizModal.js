import classNames from "classnames";

function NewQuizModal({ onClose, name, quesCount, level, timed, duration }) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.10)] z-50 flex items-center justify-center"
      onClick={() => {
        onClose();
      }}
    >
      <div
        className="w-[50%] h-max bg-white rounded-[24px] p-10 flex flex-col justify-center items-center"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className="text-[40px] mb-4">{name}</h1>
        <div className="flex flex-row text-[20px] items-center justify-center">
          <p className="my-3 mr-3 text-gray-500">{quesCount} Questions</p>
          <div className="w-2 h-2 rounded-full mr-3 border bg-black"></div>
          <span
            className={classNames("text-[20px] my-3", {
              "text-[#2B7B0F]": level === "easy",
              "text-[#ffbf00]": level === "medium",
              "text-[#EE0404]": level === "hard",
            })}
          >
            {level}
          </span>
        </div>
        {timed && <span>{duration} mins</span>}
        <div className="flex flex-row mt-4">
          <button className="p-3 mr-3 h-[50px] rounded-[12px] bg-green-700 text-white">
            Start Quiz
          </button>
          <button
            className="p-3 ml-3 h-[50px] rounded-[12px] border border-green-700"
            onClick={onClose}
          >
            Not Right Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewQuizModal;
