import { useState } from "react";
import classNames from "classnames";

import Resume from "./components/Resume";
import ActionsSidebar from "./layout/ActionsSidebar";
import Header from "./layout/Header";

import "./styles/global.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="sidebar-icon" onClick={handleClick}>
        Open Sidebar
      </button>

      <div className={classNames("main-container", { transformed: !isOpen })}>
        <ActionsSidebar />
        <div className="content">
          <Header />
          <Resume />
        </div>
      </div>
    </>
  );
};

export default App;
