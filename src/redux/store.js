import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "./slices/education/educationSlice";
import skillsReducer from "./slices/skills/skillsSlice";

const store = configureStore({
  reducer: {
    education: educationReducer,
    skills: skillsReducer,
  },
});

export default store;
