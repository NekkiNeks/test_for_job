import { createAsyncThunk } from "@reduxjs/toolkit";

//types
import { iPost } from "../../types/types";

//thunks
export const fetchPosts = createAsyncThunk<
  iPost[],
  { url: string },
  { rejectValue: string }
>("posts/fetchPosts", async ({ url }, { rejectWithValue }) => {
  const responce = await fetch(url);
  if (!responce.ok) {
    rejectWithValue("Server Error");
  }
  const data = await responce.json();
  return data;
});
