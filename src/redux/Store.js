import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./Slices/videoSlice";
import authReducer from "./Slices/authSlice";
const store = configureStore({
  reducer: {
    videos: videoReducer,
    auth: authReducer,
  },
});

export default store;
