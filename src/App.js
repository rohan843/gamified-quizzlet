import SignUpPage from "./pages/signup-page/SignUpPage";
import LoginPage from "./pages/login-page/LoginPage";
import QuizPage from "./pages/quiz-page/QuizPage";


function App() {
  return <QuizPage minutes={1} seconds={10} correctOption='B'/>
}

export default App;
