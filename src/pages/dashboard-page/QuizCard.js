import classNames from "classnames";
import { ReactComponent as Timer } from "../../assets/timer.svg";
import NewQuizModal from "./NewQuizModal";
import { useState } from "react";
import { createPortal } from "react-dom";

function QuizCard({ img, name, quesCount, level, timed, duration }) {
  const [openIntent, setOpenIntent] = useState(false);
  return (
    <div
      className="w-full min-h-[80px] flex flex-row items-center quiz-card px-3 py-1 my-3 justify-between relative overflow-hidden"
      onClick={() => {
        setOpenIntent(true);
      }}
    >
      <div className="w-max h-full flex flex-row items-center">
        <img
          src={img}
          className="w-[70px] h-[70px] object-cover rounded-full mr-5"
          alt={name}
        />
        <span className="text-[30px]">{name}</span>
      </div>
      <span className="text-[20px] text-[#757171]">{quesCount} Ques</span>
      <span
        className={classNames("text-[20px]", {
          "text-[#2B7B0F]": level === "easy",
          "text-[#ffbf00]": level === "medium",
          "text-[#EE0404]": level === "hard",
        })}
      >
        {level}
      </span>
      <Timer
        className={classNames({
          "opacity-0": !timed,
        })}
      />
      {openIntent &&
        createPortal(
          <NewQuizModal
            onClose={() => setOpenIntent(false)}
            name={name}
            quesCount={quesCount}
            level={level}
            timed
            duration={duration}
          />,
          document.getElementById("new-quiz-modal")
        )}
    </div>
  );
}

export default QuizCard;
