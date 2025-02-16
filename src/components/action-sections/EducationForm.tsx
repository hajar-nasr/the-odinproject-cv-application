import { FormEvent, ChangeEvent, useId } from "react";
import { useCVContext } from "../../store/hooks";
import {
  ACTIONS_TYPES,
  EducationItem,
  SidebarFormChangeEventProps,
} from "../../store/types";
import FormContainer from "./FormContainer";
import { EDUCATION_FORM_DATA } from "../../utils/constants";

const EducationForm = ({
  education,
  handleChange,
}: {
  education: EducationItem;
  handleChange: ({ event, sidebarFormId }: SidebarFormChangeEventProps) => void;
}) => {
  const { dispatch } = useCVContext()!;
  const educationId = useId();

  const isSumbitEnabled = () => {
    return Boolean(
      education.school && education.degree && education.fieldOfStudy
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ACTIONS_TYPES.EDIT_EDUCATION,
      payload: {
        ...education,
        id: educationId,
      },
    });
  };

  return (
    <FormContainer
      title="Education"
      onSubmit={handleSubmit}
      isSumbitEnabled={isSumbitEnabled()}
    >
      <div>
        {EDUCATION_FORM_DATA.map((item) => {
          return (
            <label className="form-label" key={item.name}>
              <span>{item.label}</span>
              <input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                value={education[item.name as keyof EducationItem]}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  handleChange({
                    event,
                    sidebarFormId: "education",
                  });
                }}
                className="form-input"
              />
            </label>
          );
        })}
      </div>
    </FormContainer>
  );
};

export default EducationForm;
