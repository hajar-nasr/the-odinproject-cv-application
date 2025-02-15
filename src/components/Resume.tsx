import Profile from "./Profile";
import Summary from "./Summary";
import Education from "./Education";
import Experience from "./Experience";

import "../styles/resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <Profile />
      <Summary />
      <Experience />
      <Education />
    </div>
  );
};

export default Resume;
