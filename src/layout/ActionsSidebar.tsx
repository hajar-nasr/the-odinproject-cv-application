import EducationForm from "../components/action-sections/EducationForm";
import ProfileForm from "../components/action-sections/ProfileForm";
import SummaryForm from "../components/action-sections/SummaryForm";
import ExperienceForm from "../components/action-sections/ExperienceForm";

import "../styles/sidebar.css";

const ActionsSidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ProfileForm />
          <SummaryForm />
          <ExperienceForm />
          <EducationForm />
        </nav>
      </div>
    </div>
  );
};

export default ActionsSidebar;
