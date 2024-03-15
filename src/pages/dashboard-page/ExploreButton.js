import classNames from "classnames";

function ExploreButton({ active, onClick }) {
  return (
    <button
      className={classNames("w-[280px] text-[50px] border explore-button", {
        "text-[#EE0404] bg-white": !active,
        "text-white bg-[#EE0404]": active,
      })}
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      Explore
    </button>
  );
}

export default ExploreButton;
