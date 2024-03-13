function GetStartedButton({ onClick }) {
  return (
    <button
      className="get-started-button"
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      Get Started
    </button>
  );
}

export default GetStartedButton;
