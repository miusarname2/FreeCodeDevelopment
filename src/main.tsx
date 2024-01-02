import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ReqReview from "./components/reqView.tsx";
import './styles.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },{
    path:"/welcome",
    element: <ReqReview/>
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);