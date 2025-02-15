import { FormEvent, useState, ChangeEvent, useId } from "react";
import { useCVContext } from "../../store/hooks";
import { ACTIONS_TYPES, ExperienceItem } from "../../store/types";
import FormContainer from "./FormContainer";

const FORM_DATA = [
  {
    label: "Job Title",
    name: "title",
    placeholder: "Enter your job title",
    type: "text",
    required: true,
  },
  {
    label: "Company",
    name: "company",
    placeholder: "Enter the company name",
    type: "text",
    required: true,
  },
  {
    label: "Location",
    name: "location",
    placeholder: "City, Country",
    type: "text",
    required: false,
  },
  {
    label: "Start Date",
    name: "startDate",
    placeholder: "DD/MM/YY",
    type: "date",
    required: true,
  },
  {
    label: "End Date",
    name: "endDate",
    placeholder: "DD/MM/YY",
    type: "date",
    required: false,
  },
];

const ExperienceForm = () => {
  const { dispatch } = useCVContext()!;
  const [experience, setExperience] = useState<ExperienceItem>({
    id: useId(),
    title: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [isPresent, setIsPresent] = useState(false);

  const isSumbitEnabled = () => {
    return Boolean(
      experience.title && experience.company && experience.startDate
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ACTIONS_TYPES.EDIT_EXPERIENCE,
      payload: experience,
    });
  };

  return (
    <FormContainer
      title="Experience"
      onSubmit={handleSubmit}
      isSumbitEnabled={isSumbitEnabled()}
    >
      <div>
        {FORM_DATA.map((item) => {
          if (isPresent && item.name === "endDate") return null;

          return (
            <label className="form-label" key={item.name}>
              <span>{item.label}</span>
              <input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                value={experience[item.name as keyof ExperienceItem]}
                onChange={handleChange}
                className="form-input"
              />
            </label>
          );
        })}
        <label
          onClick={() => {
            setIsPresent((prev) => !prev);
          }}
        >
          <input type="checkbox" checked={isPresent} onChange={() => {}} />
          <span>I'm currently working in this role</span>
        </label>
      </div>
    </FormContainer>
  );
};

export default ExperienceForm;
