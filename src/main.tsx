import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import CVStateProvider from "./store/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CVStateProvider>
      <App />
    </CVStateProvider>
  </StrictMode>
);
