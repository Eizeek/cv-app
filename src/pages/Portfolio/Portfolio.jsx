import Box from "../../components/Box/Box";
import Experience from "../../components/Experience/Experience";
import Timeline from "../../components/Timeline/Timeline";
import Port from "../../components/Port/Port";

import "../../assests/styles/Portfolio.scss";
import Address from "../../components/Address/Address";
import Feedback from "../../components/Feedback/Feedback";

import "../../assests/styles/Panel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faUser,
  faUserGraduate,
  faPencil,
  faGem,
  faBriefcase,
  faAddressBook,
  faComment,
  faArrowLeft,
  faCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "../../components/Avatar/Avatar";
import Skills from "../../components/Skills/Skills";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const educationSectionRef = useRef(null);
  const port = useRef(null);

  useEffect(() => {
    if (port.current) {
      port.current.style.width = isOpen ? "85%" : "100%";
    }
  }, [isOpen, port]);

  const scrollToEducation = () => {
    if (educationSectionRef.current) {
      educationSectionRef.current.scrollTo({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToEducation();
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <aside>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <button className="toggle-button" onClick={toggleSidebar}>
            {isOpen ? (
              <FontAwesomeIcon className="toggle-icon" icon={faX} />
            ) : (
              <FontAwesomeIcon className="toggle-icon" icon={faBars} />
            )}
          </button>

          <Avatar style={{ width: "8rem", height: "8rem" }} />

          <ul>
            <li>
              <FontAwesomeIcon className="icon" icon={faUser} />{" "}
              <a href="/about">About Me</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faUserGraduate} />
              <a href="#">Education</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faPencil} />{" "}
              <a href="/experience">Experience</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faGem} />{" "}
              <a href="/skills">Skills</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faBriefcase} />{" "}
              <a href="portfolio">Portfolio</a>
            </li>
            <li onClick={scrollToEducation}>
              <FontAwesomeIcon className="icon" icon={faAddressBook} />
              <a>Contacts</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faComment} />{" "}
              <a href="feedbacks">Feedbacks</a>
            </li>
          </ul>

          <button className="goback" onClick={handleButtonClick}>
            <FontAwesomeIcon icon={faArrowLeft} /> Go back
          </button>
        </div>
      </aside>

      <main className="port" ref={port}>
        <Box
          title="About Me"
          content="As a dedicated Front-End Developer, I specialize in transforming ideas into captivating digital experiences using the power of HTML, CSS, JavaScript, and React. With an eye for design and a heart for innovation, I thrive on bringing seamless interactions to life."
        />
        <Timeline ref={educationSectionRef} title="Education" />
        <Experience title="Experience" />
        <Port title="Portfolio" />
        <Skills title="Skills" />
        <Address title="Contacts" />
        <Feedback title="Feedback" />

        <button onClick={scrollToTop} className="up-btn">
          <FontAwesomeIcon icon={faCircleUp} />
        </button>
      </main>
    </>
  );
}
