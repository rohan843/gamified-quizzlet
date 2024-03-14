import { useState } from "react";
import QuizCard from "./QuizCard";

function ExploreView() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="h-max w-full px-5 py-2 flex flex-col">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        className="w-full search-box"
        placeholder="search here"
      />
      <div className="w-full grid grid-rows-2 grid-cols-3 gap-4 my-4 justify-items-center">
        <button className="trending-tag-button">Geography</button>
        <button className="trending-tag-button">Awards</button>
        <button className="trending-tag-button">Cars</button>
        <button className="trending-tag-button">Science</button>
        <button className="trending-tag-button">History</button>
        <button className="trending-tag-button">Politics</button>
      </div>
      <QuizCard
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmSGjet8_p422wEQsNKkjLLuzVNEG07I-5Q&usqp=CAU"
        name="Trending Quiz 1"
        quesCount={20}
        level="medium"
        timed
      />
      <QuizCard
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmSGjet8_p422wEQsNKkjLLuzVNEG07I-5Q&usqp=CAU"
        name="Trending Quiz 2"
        quesCount={10}
        level="easy"
        timed
      />
      <QuizCard
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmSGjet8_p422wEQsNKkjLLuzVNEG07I-5Q&usqp=CAU"
        name="Trending Quiz 3"
        quesCount={20}
        level="hard"
      />
      <QuizCard
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmSGjet8_p422wEQsNKkjLLuzVNEG07I-5Q&usqp=CAU"
        name="Trending Quiz 1"
        quesCount={20}
        level="medium"
        timed
      />
      <QuizCard
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmSGjet8_p422wEQsNKkjLLuzVNEG07I-5Q&usqp=CAU"
        name="Trending Quiz 2"
        quesCount={10}
        level="easy"
        timed
      />
      <QuizCard
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmSGjet8_p422wEQsNKkjLLuzVNEG07I-5Q&usqp=CAU"
        name="Trending Quiz 3"
        quesCount={20}
        level="hard"
      />
    </div>
  );
}

export default ExploreView;
