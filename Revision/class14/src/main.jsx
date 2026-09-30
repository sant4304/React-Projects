import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContex from "./context/UserContex.jsx";
import PostDataContex from "./context/PostDataContex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <UserContex>
      <App />
    </UserContex> */}
    <PostDataContex>
      <App/>
    </PostDataContex>
  </StrictMode>,
);
