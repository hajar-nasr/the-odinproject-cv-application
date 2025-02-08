import { useReducer, ReactNode } from "react";
import { CVStateContext } from "./context";
import reducer from "./reducer";
import initialState from "./initial-state";

const CVStateProvider = ({ children }: { children: ReactNode }) => {
  const [cv, dispatch] = useReducer(reducer, initialState);

  return (
    <CVStateContext.Provider value={{ cv, dispatch }}>
      {children}
    </CVStateContext.Provider>
  );
};

export default CVStateProvider;
