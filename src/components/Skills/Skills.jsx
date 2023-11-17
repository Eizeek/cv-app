import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faRotate } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSkills,
  addSkill,
  selectAllSkills,
} from "../../redux/slices/skills/skillsSlice";
import "./Skills.scss";
import SkillForm from "./Skill/SkillsForm";

const Skills = ({ title }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const dispatch = useDispatch();
  const skills = useSelector(selectAllSkills);
  const isLoading = useSelector((state) => state.skills.loading);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  const addSkillToStore = (newSkill) => {
    dispatch(addSkill(newSkill));
  };

  const editIcon = <FontAwesomeIcon icon={faEdit} />;

  return (
    <section id="skill">
      <h3 className="title">{title}</h3>
      <div className="edit-btn">
        <span></span>
        <button className="skill-btn" onClick={toggleEditForm}>
          {editIcon} Open Edit
        </button>
      </div>

      {showEditForm && <SkillForm onAddSkill={addSkillToStore} />}
      <div className="skills">
        {isLoading === "pending" ? (
          <div className="timeline-loading">
            <FontAwesomeIcon size="xl" icon={faRotate} spin />
          </div>
        ) : (
          skills.map((skill) => (
            <div key={skill.id} className="skill">
              <div className="bar">
                <div className="fill" style={{ width: `${skill.percentage}%` }}>
                  {skill.title}
                </div>
              </div>
            </div>
          ))
        )}
        <ul>
          <li className="skills-scale">
            <span className="skills-scale__name">Beginner</span>
            <span className="skills-scale__name">Proficient</span>
            <span className="skills-scale__name">Expert</span>
            <span className="skills-scale__name">Master</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
