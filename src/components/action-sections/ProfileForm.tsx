import { FormEvent, ChangeEvent } from "react";
import { useCVContext } from "../../store/hooks";
import {
  ACTIONS_TYPES,
  Profile,
  SidebarFormChangeEventProps,
} from "../../store/types";
import FormContainer from "./FormContainer";
import { PROFILE_FORM_DATA } from "../../utils/constants";

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
        {PROFILE_FORM_DATA.map((item) => {
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
