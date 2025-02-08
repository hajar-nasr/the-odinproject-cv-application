import Profile from "./Profile";
import Summary from "./Summary";
import Education from "./Education";

import "../styles/resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <Profile />
      <Summary />
      <Education />
    </div>
  );
};

export default Resume;
