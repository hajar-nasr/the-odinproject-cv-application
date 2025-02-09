import { FormEvent, useState, ChangeEvent, useId } from "react";
import { useCVContext } from "../../store/hooks";
import { ACTIONS_TYPES, EducationItem } from "../../store/types";
import FormContainer from "./FormContainer";

const FORM_DATA = [
  {
    label: "School Name",
    name: "school",
    placeholder: "Enter your school name",
    type: "text",
  },
  {
    label: "Degree",
    name: "degree",
    placeholder: "Enter your degree",
    type: "text",
  },
  {
    label: "Enter your field of study",
    name: "fieldOfStudy",
    placeholder: "Enter your school name",
    type: "text",
  },
  {
    label: "Enter your graduation year",
    name: "graduationYear",
    placeholder: "Enter your graduation year",
    type: "text",
  },
];

const EducationForm = () => {
  const { dispatch } = useCVContext()!;
  const [education, setEducation] = useState<EducationItem>({
    id: useId(),
    school: "",
    degree: "",
    fieldOfStudy: "",
    graduationYear: "",
  });

  const isSumbitEnabled = () => {
    return Boolean(
      education.school &&
        education.degree &&
        education.fieldOfStudy &&
        education.graduationYear
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ACTIONS_TYPES.EDIT_EDUCATION,
      payload: education,
    });
  };

  return (
    <FormContainer
      title="Education"
      onSubmit={handleSubmit}
      isSumbitEnabled={isSumbitEnabled()}
    >
      <div>
        {FORM_DATA.map((item) => {
          return (
            <label className="form-label" key={item.name}>
              <span>{item.label}</span>
              <input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                value={education[item.name as keyof EducationItem]}
                onChange={handleChange}
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
