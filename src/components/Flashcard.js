function Flashcard({ name, media, text }) {
    return (
      <div className="w-full h-[110px] bg-[#EDF6F9] rounded-[12px] flashcard flex flex-row justify-between py-1 px-1 my-3 border border-[#875400] border-[4px]">
        <div className="h-full w-[90%] flex flex-col justify-between">
          <span className="text-[50px]">Operating Systems</span>
          <span className="w-full truncate text-[#A9A9A9]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse eaque
            quod aliquam dolorum numquam sequi nam maxime rerum. Odio explicabo
            officia placeat vel nobis, voluptas fuga dignissimos facere accusamus
            nostrum!
          </span>
        </div>
        <div className="w-[10%] h-full max-w-max text-[#A9A9A9] truncate">+Image</div>
      </div>
    );
  }
  
  export default Flashcard;