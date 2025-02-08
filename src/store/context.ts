import { createContext } from "react";
import { CVStateContextType } from "./types";

export const CVStateContext = createContext<CVStateContextType | null>(null);
