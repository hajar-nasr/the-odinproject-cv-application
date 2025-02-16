import { useCVContext } from "../store/hooks";
import { EnvelopeIcon, LinkedInIcon } from "./Icons";

const Profile = () => {
  const {
    cv: {
      profile: { name, email, linkedIn },
    },
  } = useCVContext()!;

  return (
    <div className="resume-section profile">
      <p className="name">{name}</p>
      <div className="flex-center gap-2">
        <div className="profile-link">
          <EnvelopeIcon />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="profile-link">
          <LinkedInIcon />
          <a href={linkedIn} target="_blank">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
