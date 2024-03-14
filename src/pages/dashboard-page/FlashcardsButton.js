import classNames from "classnames";

function FlashcardsButton({ active, onClick }) {
  return (
    <button
      className={classNames("w-[280px] text-[50px] border flashcards-button mt-5", {
        "text-[#1234E9] bg-white": !active,
        "text-white bg-[#1234E9]": active,
      })}
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      Flashcards
    </button>
  );
}

export default FlashcardsButton;
