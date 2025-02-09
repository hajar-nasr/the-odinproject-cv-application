import EducationForm from "../components/action-sections/EducationForm";
import ProfileForm from "../components/action-sections/ProfileForm";
import SummaryForm from "../components/action-sections/SummaryForm";

import "../styles/sidebar.css";

const ActionsSidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ProfileForm />
          <SummaryForm />
          <EducationForm />
        </nav>
      </div>
    </div>
  );
};

export default ActionsSidebar;
