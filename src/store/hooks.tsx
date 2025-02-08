import { useContext } from "react";
import { CVStateContext } from "./context";
import { CVStateContextType } from "./types";

export const useCVContext = (): CVStateContextType | null => {
  const context = useContext(CVStateContext);

  if (!context)
    throw new Error("useStateContext must be used within a StateProvider");

  return context;
};
