import { configureStore } from "@reduxjs/toolkit";
import skillsReducer, {
  fetchSkills,
  addSkill,
  selectAllSkills,
} from "../skills/skillsSlice";

// Mock the fetch function
global.fetch = jest.fn();

const skillsData = [
  { id: 1, skillName: "HTML", skillRange: 100 },
  { id: 2, skillName: "CSS", skillRange: 90 },
];

const store = configureStore({
  reducer: {
    skills: skillsReducer,
  },
});

const newSkill = {
  id: "unique-id",
  skillName: "New Skill",
  skillRange: 100,
};

describe("Skills Slice", () => {
  it("should fetch skills successfully", async () => {
    // Mock the successful fetch request
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ skills: [...skillsData] }),
    });

    // Dispatch the fetchSkills action
    await store.dispatch(fetchSkills());

    // Get the state from the store
    const state = store.getState();

    // Check if the skills are in the store's state
    expect(selectAllSkills(state)).toEqual(skillsData);
  });

  it("should handle errors when fetching skills", async () => {
    // Mock a failed fetch request
    fetch.mockResolvedValue({
      ok: false,
      status: 500, // Simulate an error status
    });

    try {
      // Dispatch the fetchSkills action
      await store.dispatch(fetchSkills());
    } catch (error) {
      // Check if the error message is in the store's state
      const state = store.getState();
      expect(state.skills.error).toBe("Failed to fetch skills");
    }
  });

  it("should add a new skill successfully", async () => {
    // Mock a successful POST request
    fetch.mockResolvedValue({
      ok: true,
      json: async () => [...skillsData, newSkill],
    });

    // Dispatch the addSkill action
    await store.dispatch(addSkill(newSkill));

    // Get the state from the store
    const state = store.getState();

    // Check if the new skill is in the store's state
    const skills = selectAllSkills(state);

    expect(skills).toContainEqual(newSkill);
  });

  it("should handle errors when adding a skill", async () => {
    // Mock a failed POST request
    fetch.mockResolvedValue({
      ok: false,
      status: 500, // Simulate an error status
    });

    try {
      // Dispatch the addSkill action
      await store.dispatch(addSkill(newSkill));
    } catch (error) {
      // Check if the error message is in the store's state
      const state = store.getState();
      expect(state.skills.error).toBe("Failed to add a skill");
    }
  });
});
