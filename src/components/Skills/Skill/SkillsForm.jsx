import React, { useState } from "react";
import "../Skills.scss";
import { validationSchema } from "../../../validation/validationSchema";

const SkillForm = ({ onAddSkill }) => {
  const [newSkill, setNewSkill] = useState("");
  const [newPercentage, setNewPercentage] = useState("");
  const [errors, setErrors] = useState({ skillName: "", skillPercentage: "" });

  const addSkill = () => {
    validationSchema
      .validate(
        { skillName: newSkill, skillPercentage: newPercentage },
        { abortEarly: false }
      )
      .then(() => {
        onAddSkill({ title: newSkill, percentage: newPercentage });
        setNewSkill("");
        setNewPercentage("");
        setErrors({ skillName: "", skillPercentage: "" });
      })
      .catch((validationErrors) => {
        const newErrors = {};
        validationErrors.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  return (
    <div className="skills-app">
      <div className="skills-app-container">
        <input
          className="skill-inp"
          type="text"
          placeholder="Skill Title"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <div className="error-message">{errors.skillName}</div>
        <input
          className="skill-inp"
          type="text"
          placeholder="Percentage"
          value={newPercentage}
          onChange={(e) => setNewPercentage(e.target.value)}
        />
        <div className="error-message">{errors.skillPercentage}</div>
        <button className="skill-btn" onClick={addSkill}>
          Add Skill
        </button>
      </div>
    </div>
  );
};

export default SkillForm;
