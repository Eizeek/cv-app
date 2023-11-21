import Box from "../../components/Box/Box";
import Experience from "../../components/Experience/Experience";
import Timeline from "../../components/Timeline/Timeline";

import "./Portfolio.scss";
import Address from "../../components/Address/Address";
import Feedback from "../../components/Feedback/Feedback";

import "../../components/Panel/Panel.scss";
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
import { PortfolioInfos } from "../../components/portinfo/Port";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const port = useRef(null);

  const activeLinkRef = useRef(null);

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }

    if (activeLinkRef.current) {
      activeLinkRef.current.classList.remove("active");
    }

    e.target.classList.add("active");

    activeLinkRef.current = e.target;
  };

  useEffect(() => {
    if (port.current) {
      port.current.style.width = isOpen ? "85%" : "100%";
    }
  }, [isOpen, port]);
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

          <Avatar className="avatar" />

          <ul>
            <li onClick={(e) => handleNavLinkClick(e, "about")}>
              <FontAwesomeIcon className="icon" icon={faUser} />{" "}
              <a className="route-list" href="#">
                About Me
              </a>
            </li>
            <li onClick={(e) => handleNavLinkClick(e, "edu")}>
              <FontAwesomeIcon className="icon" icon={faUserGraduate} />
              <a className="route-list" href="#">
                Education
              </a>
            </li>
            <li onClick={(e) => handleNavLinkClick(e, "exp")}>
              <FontAwesomeIcon className="icon" icon={faPencil} />{" "}
              <a className="route-list" href="#">
                Experience
              </a>
            </li>
            <li onClick={(e) => handleNavLinkClick(e, "skill")}>
              <FontAwesomeIcon className="icon" icon={faGem} />{" "}
              <a className="route-list" href="#">
                Skills
              </a>
            </li>
            <li onClick={(e) => handleNavLinkClick(e, "port")}>
              <FontAwesomeIcon className="icon" icon={faBriefcase} />{" "}
              <a className="route-list" href="#">
                Portfolio
              </a>
            </li>
            <li onClick={(e) => handleNavLinkClick(e, "address")}>
              <FontAwesomeIcon className="icon" icon={faAddressBook} />
              <a className="route-list" href="#">
                Contacts
              </a>
            </li>
            <li onClick={(e) => handleNavLinkClick(e, "feedback")}>
              <FontAwesomeIcon className="icon" icon={faComment} />{" "}
              <a className="route-list" href="#">
                Feedbacks
              </a>
            </li>
          </ul>

          <button className={"goback"} onClick={handleButtonClick}>
            <FontAwesomeIcon icon={faArrowLeft} />{" "}
            <span className="text-goback">Go back</span>
          </button>
        </div>
      </aside>

      <main className="port" ref={port}>
        <Box
          title="About Me"
          content="As a dedicated Front-End Developer, I specialize in transforming ideas into captivating digital experiences using the power of HTML, CSS, JavaScript, and React. With an eye for design and a heart for innovation, I thrive on bringing seamless interactions to life."
        />
        <Timeline title="Education" />
        <Experience title="Experience" />
        <Skills title="Skills" />
        <PortfolioInfos title="Portfolio" />
        <Address title="Contacts" />
        <Feedback title="Feedback" />

        <button onClick={scrollToTop} className="up-btn">
          <FontAwesomeIcon icon={faCircleUp} />
        </button>
      </main>
    </>
  );
}
