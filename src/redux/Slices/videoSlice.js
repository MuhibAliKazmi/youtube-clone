import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//fetch
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const res = await axios.get(
    "https://67ab54f75853dfff53d7023c.mockapi.io/videos"
  );
  return res.data; // this becomes action.payload()
});

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    items: [],
    loading: true,
    error: null,
    searchQuery: "",
    activeQuery: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setActiveQuery: (state, action) => {
      state.activeQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});
export default videoSlice.reducer;
export const { setSearchQuery, setActiveQuery } = videoSlice.actions;
