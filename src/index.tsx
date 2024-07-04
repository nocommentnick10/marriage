import React from "react";
import ReactDOM from "react-dom/client";
// import "reset.css";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Panel } from "./components/panel/panel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "panel",
    element: <Panel />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
