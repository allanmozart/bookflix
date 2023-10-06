import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/app";
import { Main } from "./style";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main>
      <App />
    </Main>
  </React.StrictMode>
);
