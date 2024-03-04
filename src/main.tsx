import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/Login.tsx";
import ForgotPassword from "./routes/ForgotPassword.tsx";
import ResetPassword from "./routes/ResetPassword.tsx";
import VerifyOTP from "./routes/VerifyOTP.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import CarPassTicket from "./routes/CarPassTicket.tsx";
import Report from "./routes/Report.tsx";
import SetupAndConfig from "./routes/SetupAndConfig.tsx";
import Print from "./routes/Print.tsx";
import CarTypes from "./routes/CarTypes.tsx";
import AllUsers from "./routes/AllUsers.tsx";
import AddNewUser from "./routes/AddNewUser.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/carpassticket",
        element: <CarPassTicket />,
      },
      {
        path: "/view-report",
        element: <Report />,
      },
      {
        path: "/setupandconfig",
        element: <SetupAndConfig />,
      },
      {
        path: "/car-types",
        element: <CarTypes />,
      },
      {
        path: "/allusers",
        element: <AllUsers />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/verifyotp",
    element: <VerifyOTP />,
  },
  {
    path: "/print",
    element: <Print />,
  },
  {
    path: "/addnewuser",
    element: <AddNewUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
