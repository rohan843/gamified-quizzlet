import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/welcome-page/WelcomePage";
import LoginPage from "./pages/login-page/LoginPage";
import SignUpPage from "./pages/signup-page/SignUpPage";
import DashboardPage from "./pages/dashboard-page/DashboardPage";
import ExploreView from "./pages/dashboard-page/ExploreView";
import LeaderboardView from "./pages/dashboard-page/LeaderboardView";
import ProfileView from "./pages/dashboard-page/ProfileView";
import FlashcardsView from "./pages/dashboard-page/FlashcardsView";
import QuizPage from "./pages/quiz-page/QuizPage";
import QuizEnd from "./pages/quiz-end-page/QuizEnd";
import Robot from "./components/Robot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/robot",
    element: <Robot />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        path: "explore",
        element: <ExploreView />,
      },
      {
        path: "leaderboard",
        element: <LeaderboardView />,
      },
      {
        path: "profile",
        element: <ProfileView />,
      },
      {
        path: "flashcards",
        element: <FlashcardsView />,
      },
      {
        path: "*",
        element: <ExploreView />,
      },
    ],
  },
  {
    path: "/quiz/:quiz_id",
    element: <QuizPage />,
  },
  {
    path: "/quiz/:quiz_id/end",
    element: <QuizEnd/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
