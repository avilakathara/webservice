import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import CurrentImage from "./components/CurrentImage.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CurrentImage />
  </StrictMode>
);
