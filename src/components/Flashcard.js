function Flashcard({ name, media, text, onClick }) {
  return (
    <div
      className="w-full h-[110px] bg-[#EDF6F9] rounded-[12px] flashcard flex flex-row justify-between py-1 px-1 my-3 border-[#875400] border-[4px]"
      onClick={onClick}
    >
      <div className="h-full w-[90%] flex flex-col justify-between">
        <span className="text-[50px]">{name}</span>
        <span className="w-full truncate text-[#A9A9A9]">{text}</span>
      </div>
      <div className="w-[10%] h-full max-w-max text-[#A9A9A9] truncate">
        +{media}
      </div>
    </div>
  );
}

export default Flashcard;
