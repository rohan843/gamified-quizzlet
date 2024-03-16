import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    easyQuizzes: 30,
    mediumQuizzes: 40,
    hardQuizzes: 80,
    totalQuizzes: 400,
    questions: 300,
    badgeImages: [
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Badge-150755_640.png",
    ],
    profilePic: "https://picsum.photos/200/300",
    name: "ABC DEFGH",
    email: "abcd@example.com",
  },
  reducers: {},
});

export const userReducer = userSlice.reducer;
