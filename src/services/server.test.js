import { Server } from 'miragejs';
import { makeServer } from './server';
import {timelineData, skillsData} from './../utils/constants/index' // Import your makeServer function

let server;

beforeEach(() => {
  server = new Server();
  makeServer(server); // Pass the server instance to your makeServer function
});

afterEach(() => {
  server.shutdown();
});

describe('Your Mirage.js API Mocks', () => {
  it('should mock the /educations route', async () => {
    // Perform your test here using server.create(), server.db, and assertions
    const response = await fetch('/api/educations');
    const data = await response.json();

    // Write assertions to test the response data
    expect(data).toEqual({ educations: [...timelineData] });
  });

  it('should mock the /skills route', async () => {
    // Perform your test here using server.create(), server.db, and assertions
    const response = await fetch('/api/skills');
    const data = await response.json();

    // Write assertions to test the response data
    expect(data).toEqual({ skills: [...skillsData] });
  });

  it('should mock the POST /skills route', async () => {
    const newSkill = {
        id: 'unique-id', // Replace 'unique-id' with an actual unique id
        skillName: 'New Skill1',
        skillRange: 100,
      };
      const skillsDataCopy = [...skillsData]
    // Perform your test here using server.create(), server.db, and assertions
    const response = await fetch('/api/skills', {
      method: 'POST',
      body: JSON.stringify(newSkill),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    const updatedSkillsData1 = [...skillsDataCopy, newSkill]

    // Write assertions to test the response data
    expect(data).toEqual([...updatedSkillsData1]);
  });
});
