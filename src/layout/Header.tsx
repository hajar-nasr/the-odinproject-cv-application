import { useCVContext } from "../store/hooks";
import { ACTIONS_TYPES } from "../store/types";

const Header = () => {
  const { dispatch } = useCVContext()!;

  const resetResume = () => {
    dispatch({
      type: ACTIONS_TYPES.RESET_RESUME,
    });
  };

  return (
    <header className="header" style={{ color: "darkslategray" }}>
      <p>ResumeCraft</p>
      <button className="reset-btn" onClick={resetResume}>
        Reset Resume
      </button>
    </header>
  );
};

export default Header;
