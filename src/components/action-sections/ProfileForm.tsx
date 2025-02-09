import { useCVContext } from "../../store/hooks";
import { ACTIONS_TYPES, Profile } from "../../store/types";
import { ChangeEvent, FormEvent, useState } from "react";
import FormContainer from "./FormContainer";

const FORM_DATA = [
  {
    name: "name",
    placeholder: "Enter your full name",
    type: "text",
    label: "Full name",
  },
  {
    name: "email",
    placeholder: "example@youremail.com",
    type: "email",
    label: "Email",
  },
  {
    name: "linkedIn",
    placeholder: "https://linkedin.com/in/account",
    type: "text",
    label: "LinkedIn Link",
  },
];

const ProfileForm = () => {
  const { dispatch } = useCVContext()!;
  const [profile, setProfile] = useState<Profile>({
    name: "",
    email: "",
    linkedIn: "",
  });

  const isSumbitEnabled = () => {
    return Boolean(profile.email && profile.name && profile.linkedIn);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ACTIONS_TYPES.EDIT_PROFILE,
      payload: profile,
    });
  };

  return (
    <FormContainer
      title="Edit Profile"
      onSubmit={handleSubmit}
      isSumbitEnabled={isSumbitEnabled()}
    >
      <div>
        {FORM_DATA.map((item) => {
          return (
            <label key={item.name} className="form-label">
              <span>{item.label}</span>
              <input
                {...item}
                onChange={handleChange}
                value={profile[item.name as keyof Profile]}
                className="form-input"
              />
            </label>
          );
        })}
      </div>
    </FormContainer>
  );
};

export default ProfileForm;
