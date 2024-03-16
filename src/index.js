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
import Robot from "./components/Robot";
import { store } from "./store";
import { Provider } from "react-redux";

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
    element: <div>Quiz End Page</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
