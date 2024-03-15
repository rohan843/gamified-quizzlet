import FlashCardDiscoveredModal from "./components/FlashCardDiscoveredModal";
import FlashCardModal from "./components/FlashCardModal";
import DashboardPage from "./pages/dashboard-page/DashboardPage";
import QuizEnd from "./pages/quiz-end-page/QuizEnd";

function App() {
  
  return <DashboardPage streak={2} gold={500} lifelines={5} />;
  //   const flashcard = {
  //      img: "image1.png",
  //      title: "Flashcard title",
  //      info: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
  //   }
  //  return <FlashCardModal flashcard={flashcard}/>
  //return <FlashCardDiscoveredModal/>
  // return <QuizEnd/>
}

export default App;
