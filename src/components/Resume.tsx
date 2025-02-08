import Profile from "./Profile";
import Summary from "./Summary";

import "../styles/resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <Profile />
      <Summary />
    </div>
  );
};

export default Resume;
