import ProfileForm from "../components/action-sections/ProfileForm";
import "../styles/sidebar.css";

const ActionsSidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ProfileForm />
        </nav>
      </div>
    </div>
  );
};

export default ActionsSidebar;
