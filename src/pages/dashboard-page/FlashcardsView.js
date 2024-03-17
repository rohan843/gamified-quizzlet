import { useSelector } from "react-redux";
import Flashcard from "../../components/Flashcard";

function FlashcardsView() {
  const { flashcards } = useSelector((store) => store.user);
  const flashcardsJSX = flashcards.map((element, index) => {
    return (
      <Flashcard
        name={element.name}
        text={element.text}
        media={element.media}
        key={index}
        index={index}
      />
    );
  });
  return (
    <div className="w-full min-h-max flex flex-col p-10">{flashcardsJSX}</div>
  );
}

export default FlashcardsView;
