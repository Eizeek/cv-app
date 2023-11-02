import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEducationData = createAsyncThunk(
  "education/fetchEducationData",
  async () => {
    const response = await fetch("/api/educations");
    const data = await response.json();
    return data.educations;
  }
);
const initialState = {
  data: [],
  loading: "idle",
  error: null,
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducationData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchEducationData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchEducationData.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default educationSlice.reducer;
