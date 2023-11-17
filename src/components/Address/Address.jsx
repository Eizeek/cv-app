// import "./Address.css";
import "./Address.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faGitlab,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const call = (
  <FontAwesomeIcon icon={faPhone} size="xl" style={{ color: "#26c17e" }} />
);
const mail = (
  <FontAwesomeIcon icon={faEnvelope} size="xl" style={{ color: "#26c17e" }} />
);
const gitlab = (
  <FontAwesomeIcon icon={faGitlab} size="xl" style={{ color: "#26c17e" }} />
);
const github = (
  <FontAwesomeIcon icon={faGithub} size="xl" style={{ color: "#26c17e" }} />
);

const linkedin = (
  <FontAwesomeIcon icon={faLinkedin} size="xl" style={{ color: "#26c17e" }} />
);
export default function Address({ title }) {
  return (
    <section id="address">
      <div className="address">
        <h3 className="address__title">{title}</h3>
        <div className="address__call">
          {call}
          <a aria-label="Chat on WhatsApp" href="https://wa.me/+994513907969">
            +994 51 390 79 69
          </a>
        </div>
        <div className="address__mail">
          {mail}
          <a href="mailto:azez.karimov@gmail.com">azez.karimov@gmail.com</a>
        </div>
        <div className="address__gitlab">
          {gitlab} <span>GitLab</span> <br />
          <a href="https://gitlab.com/azezkarimov">
            https://gitlab.com/azezkarimov
          </a>
        </div>
        <div className="address__github">
          {github} <span>Github</span> <br />
          <a href="https://github.com/eizeek">https://github.com/eizeek</a>
        </div>
        <div className="address__linkedin">
          {linkedin} <span>Linkedin</span> <br />
          <a href="https://www.linkedin.com/in/azezkarimov/">
            https://www.linkedin.com/in/azezkarimov/
          </a>
        </div>
      </div>
    </section>
  );
}
