/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import { fetchSkills, addSkill, selectAllSkills } from "../skills/skillsSlice";
import skillsReducer from "../skills/skillsSlice";
import { waitFor } from "@testing-library/react"; // Import the waitFor utility

// Mocking fetch for testing purposes
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ skills: ["Skill 1", "Skill 2"] }),
  })
);

describe("Skills Slice Tests", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        skills: skillsReducer,
      },
    });
  });

  afterEach(() => {
    global.fetch.mockClear(); // Reset the mock after each test
  });

  it("should fetch skills successfully", async () => {
    // Mocking a successful fetch request
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ skills: ["Skill 1", "Skill 2"] }),
      })
    );

    await store.dispatch(fetchSkills());
    const state = store.getState();
    expect(selectAllSkills(state)).toEqual(["Skill 1", "Skill 2"]);
    expect(state.skills.loading).toEqual("succeeded");
    expect(state.skills.error).toBeNull();
  });

  it("should handle a failed fetch skills request", async () => {
    // Mocking a failed fetch request
    fetch.mockImplementationOnce(() =>
      Promise.reject("Failed to fetch skills")
    );

    try {
      await store.dispatch(fetchSkills());
    } catch (error) {
      console.log("Error in test:", error);
    }

    await waitFor(() => {
      const state = store.getState();
      console.log("State in test:", state);
      expect(selectAllSkills(state)).toEqual([]);
      expect(state.skills.loading).toEqual("failed");
      expect(state.skills.error).toEqual("Failed to fetch skills");
    });
  });

  it("should add a new skill successfully", async () => {
    // Mocking a successful add skill request
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve("New Skill"),
      })
    );

    const newSkill = "New Skill";
    await store.dispatch(addSkill(newSkill));
    const state = store.getState();
    expect(selectAllSkills(state)).toContain("New Skill");
  });

  it("should handle a failed add skill request", async () => {
    // Mocking a failed add skill request
    fetch.mockImplementationOnce(
      () => Promise.reject("Failed to add a skill") // Simulate a failed request with an error message
    );

    const newSkill = "New Skill";
    await store.dispatch(addSkill(newSkill));

    await waitFor(() => {
      const state = store.getState();
      expect(selectAllSkills(state)).not.toContain("New Skill");
      expect(state.skills.loading).toEqual("failed");
      expect(state.skills.error).toEqual("Failed to add a skill");
    });
  });
});
