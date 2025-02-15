import { FormEvent, ChangeEvent } from "react";
import { useCVContext } from "../../store/hooks";
import {
  ACTIONS_TYPES,
  Profile,
  SidebarFormChangeEventProps,
} from "../../store/types";
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

const ProfileForm = ({
  profile,
  handleChange,
}: {
  profile: Profile;
  handleChange: ({ event, sidebarFormId }: SidebarFormChangeEventProps) => void;
}) => {
  const { dispatch } = useCVContext()!;

  const isSumbitEnabled = () => {
    return Boolean(profile.email && profile.name && profile.linkedIn);
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
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  handleChange({
                    event,
                    sidebarFormId: "profile",
                  });
                }}
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
