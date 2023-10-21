import React, { useState, useEffect } from "react";
import "./Skills.css";
export default function Skills({ title }) {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [newPercentage, setNewPercentage] = useState("");

  useEffect(() => {
    const savedSkills = JSON.parse(localStorage.getItem("skills"));
    if (savedSkills) {
      setSkills(savedSkills);
    }
  }, []);

  // Save skills to local storage whenever skills change
  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  const addSkill = () => {
    if (newSkill && newPercentage) {
      setSkills([...skills, { title: newSkill, percentage: newPercentage }]);
      setNewSkill("");
      setNewPercentage("");
    }
  };

  const deleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <>
      <h3 className="title">{title}</h3>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="bar">
              <div className="fill" style={{ width: `${skill.percentage}%` }}>
                {skill.title}
              </div>
            </div>
            <button className="skill-btn" onClick={() => deleteSkill(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="skills-app">
        <div>
          <input
            className="skill-inp"
            type="text"
            placeholder="Skill Title"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <input
            className="skill-inp"
            type="text"
            placeholder="Percentage"
            value={newPercentage}
            onChange={(e) => setNewPercentage(e.target.value)}
          />
          <button className="skill-btn" onClick={addSkill}>
            Add Skill
          </button>
        </div>
      </div>
    </>
  );
}
