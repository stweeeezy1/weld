import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Loading from "./components/loading/loading.jsx";
import "./index.css";
import App from "./App.jsx";
import "./i18n.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <App />
    </Suspense>
  </StrictMode>
);
