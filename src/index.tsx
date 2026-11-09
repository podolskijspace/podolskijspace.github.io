import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import s from "./index.module.css";

const App = () => {
  const [state, setState] = useState(0);
  return (
    <div onClick={() => setState((state) => state + 1)} className={s.div}>
      testsd: {state}
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
