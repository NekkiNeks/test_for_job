import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import modalSlice from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    modal: modalSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
