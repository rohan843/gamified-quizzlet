import classNames from "classnames";

function ProfileButton({ active, onClick }) {
  
  return (
    <button
      className={classNames("w-[280px] text-[50px] border profile-button mt-5", {
        "text-[#FFBF00] bg-white": !active,
        "text-white bg-[#FFBF00]": active,
      })}
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      Profile
    </button>
  );
}

export default ProfileButton;
