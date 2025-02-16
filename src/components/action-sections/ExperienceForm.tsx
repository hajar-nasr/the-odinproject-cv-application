import { FormEvent, useState, ChangeEvent, useId, Dispatch } from "react";
import { useCVContext } from "../../store/hooks";
import {
  ACTIONS_TYPES,
  ExperienceItem,
  SidebarFormChangeEventProps,
  SidebarFormsState,
} from "../../store/types";
import FormContainer from "./FormContainer";
import { EXPERIENCE_FORM_DATA } from "../../utils/constants";

const ExperienceForm = ({
  experience,
  handleChange,
  setFormsState,
}: {
  experience: ExperienceItem;
  setFormsState: Dispatch<React.SetStateAction<SidebarFormsState>>;
  handleChange: ({ event, sidebarFormId }: SidebarFormChangeEventProps) => void;
}) => {
  const { dispatch } = useCVContext()!;
  const [isPresent, setIsPresent] = useState(false);
  const experienceId = useId();

  const isSumbitEnabled = () => {
    return Boolean(
      experience.title && experience.company && experience.startDate
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ACTIONS_TYPES.EDIT_EXPERIENCE,
      payload: { ...experience, id: experienceId },
    });
  };

  const clearEndDate = () => {
    setFormsState((prev) => {
      return {
        ...prev,
        experience: {
          ...prev.experience,
          endDate: "",
        },
      };
    });
  };

  return (
    <FormContainer
      title="Experience"
      onSubmit={handleSubmit}
      isSumbitEnabled={isSumbitEnabled()}
    >
      <div>
        {EXPERIENCE_FORM_DATA.map((item) => {
          if (isPresent && item.name === "endDate") return null;

          return (
            <label className="form-label" key={item.name}>
              <span>{item.label}</span>
              <input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                value={experience[item.name as keyof ExperienceItem]}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  handleChange({
                    event,
                    sidebarFormId: "experience",
                  });
                }}
                className="form-input"
              />
            </label>
          );
        })}
        <label className="form-checkbox">
          <input
            type="checkbox"
            checked={isPresent}
            onChange={(e) => {
              clearEndDate();
              setIsPresent(e.target.checked);
            }}
            style={{ position: "absolute", opacity: 0, height: 0, width: 0 }}
          />
          <span className="custom-checkbox"></span>
          <span>I'm currently working in this role</span>
        </label>
      </div>
    </FormContainer>
  );
};

export default ExperienceForm;
