import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//thunks
import { fetchPosts } from "./thunks";

//types
import { iPost } from "../../types/types";
interface iInitialState {
  posts: iPost[];
  error: boolean;
  errorMessage: string | null;
  loading: boolean;
}

const initialState: iInitialState = {
  posts: [],
  error: false,
  errorMessage: "null",
  loading: false,
};

//slice
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    defaultAction: () => {},
    deletePost: (state, action: PayloadAction<{ id: number }>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
    updatePost: (
      state,
      action: PayloadAction<{ id: number; title: string; body: string }>
    ) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return {
            id: action.payload.id,
            title: action.payload.title,
            body: action.payload.body,
          };
        } else return post;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessage = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = true;
      if (action.payload) state.errorMessage = action.payload;
    });
  },
});

export const { defaultAction, deletePost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;
