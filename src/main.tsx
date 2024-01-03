import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ReqReview from "./components/reqView.tsx";
import CreateForm from "./components/creationForm.tsx";
import GitClone from "./components/cloneGithub.tsx";
import CodeE from './components/codeEdit.tsx';
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/welcome",
    element: <ReqReview />,
  },
  {
    path: "/clone",
    element: <GitClone />,
  },
  {
    path: "/app/App",
    element: <CreateForm />,
  },
  {
    path: "/code",
    element: <CodeE />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
