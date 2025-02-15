import { useState } from "react";

import EducationForm from "../components/action-sections/EducationForm";
import ProfileForm from "../components/action-sections/ProfileForm";
import SummaryForm from "../components/action-sections/SummaryForm";
import ExperienceForm from "../components/action-sections/ExperienceForm";

import { formsEmptyState } from "../store/initial-state";
import { SidebarFormsState, SidebarFormChangeEventProps } from "../store/types";

import "../styles/sidebar.css";

const ActionsSidebar = () => {
  const [formsState, setFormsState] = useState(formsEmptyState);

  const resetAll = () => {
    setFormsState(formsEmptyState);
  };

  const handleChange = ({
    event,
    sidebarFormId,
  }: SidebarFormChangeEventProps) => {
    const { name, value } = event.target;

    setFormsState((prevFormState: SidebarFormsState) => {
      const data = prevFormState[sidebarFormId];
      return {
        ...prevFormState,
        [sidebarFormId]:
          typeof data === "object" && !Array.isArray(data)
            ? {
                ...data,
                [name]: value,
              }
            : value,
      };
    });
  };

  return (
    <div>
      <button onClick={resetAll}>Reset</button>

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ProfileForm
            profile={formsState.profile}
            handleChange={handleChange}
          />

          <SummaryForm
            summary={formsState.summary}
            handleChange={handleChange}
          />

          <ExperienceForm
            experience={formsState.experience}
            handleChange={handleChange}
          />

          <EducationForm
            education={formsState.education}
            handleChange={handleChange}
          />
        </nav>
      </div>
    </div>
  );
};

export default ActionsSidebar;
