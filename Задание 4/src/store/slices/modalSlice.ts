import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type iInitialState = {
  show: boolean;
  id: number | null;
  title: string;
  body: string;
};

const initialState: iInitialState = {
  show: false,
  id: null,
  title: "",
  body: "",
};

export const modalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    updateShow: (state, action: PayloadAction<{ show: boolean }>) => {
      state.show = action.payload.show;
    },
    updateState: (
      state,
      action: PayloadAction<{ state: { title: string; body: string } }>
    ) => {
      state.body = action.payload.state.body;
      state.title = action.payload.state.title;
    },
    updateTitle: (state, action: PayloadAction<{ title: string }>) => {
      state.title = action.payload.title;
    },
    updateBody: (state, action: PayloadAction<{ body: string }>) => {
      state.body = action.payload.body;
    },
    updateId: (state, action: PayloadAction<{ id: number }>) => {
      state.id = action.payload.id;
    },
    defaultState: (state) => {
      state.id = initialState.id;
      state.title = initialState.title;
      state.body = initialState.body;
      state.show = initialState.show;
    },
  },
});

export const {
  updateShow,
  updateState,
  updateTitle,
  updateBody,
  updateId,
  defaultState,
} = modalSlice.actions;

export default modalSlice.reducer;
