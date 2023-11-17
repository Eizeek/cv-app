import { createServer } from "miragejs";
import { timelineData, skillsData } from "../utils/constants/index";

export const makeServer = () => {
  return createServer({
    routes() {
      this.namespace = "api";

      this.get(
        "/educations",
        () => {
          return {
            educations: [...timelineData],
          };
        },
        { timing: 3000 }
      );

      this.get(
        "/skills",
        () => {
          return {
            skills: [...skillsData],
          };
        },
        { timing: 1000 }
      );

      this.post("/skills", (request) => {
        const newSkill = JSON.parse(request.requestBody);
        skillsData.push(newSkill);
        return skillsData;
      });
    },
  });
};
