import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";


import themeOptionsReducer from "./themeOptionsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ThemeOptions: themeOptionsReducer,
  },
});
