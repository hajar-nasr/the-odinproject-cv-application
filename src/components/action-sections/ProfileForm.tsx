import { useCVContext } from "../../store/hooks";
import { ACTIONS_TYPES, Profile } from "../../store/types";
import { ChangeEvent, FormEvent, useState } from "react";

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
    placeholder: "example@youremail.com",
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
    return profile.email && profile.name && profile.linkedIn;
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
    <div>
      <p>Edit Profile</p>

      <form onSubmit={handleSubmit}>
        <div>
          {FORM_DATA.map((item) => {
            return (
              <label key={item.name}>
                <span>{item.label}</span>
                <input
                  {...item}
                  onChange={handleChange}
                  value={profile[item.name as keyof Profile]}
                />
              </label>
            );
          })}
        </div>

        <button type="submit" disabled={!isSumbitEnabled()}>
          Edit
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
