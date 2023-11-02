import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSkills = createAsyncThunk("skills/fetchSkills", async () => {
  try {
    const response = await fetch("/api/skills");
    if (!response.ok) {
      throw new Error("Failed to fetch skills");
    }
    const data = await response.json();
    if (localStorage.getItem("skillsData") === null) {
      let storedData = JSON.stringify(data.skills);
      localStorage.setItem("skillsData", storedData);
      return data.skills;
    } else {
      const skillsData = JSON.parse(localStorage.getItem("skillsData"));
      return skillsData;
    }
  } catch (error) {
    throw error;
  }
});

export const addSkill = createAsyncThunk(
  "skills/addSkill",
  async (newSkill) => {
    try {
      const response = await fetch("/api/skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSkill),
      });

      if (!response.ok) {
        throw new Error("Failed to add a skill");
      }

      const addedSkill = await response.json();
      let storedData = JSON.stringify(addedSkill);
      localStorage.setItem("skillsData", storedData);
      return addedSkill;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  data: [],
  loading: "idle",
  error: null,
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(addSkill.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export const selectAllSkills = (state) => state.skills.data;

export default skillsSlice.reducer;
