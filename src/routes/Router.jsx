import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../main/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import StudySession from "../dashboardCom/StudySession";
import AllStudySessions from "../dashboardCom/AllStudySessions";
import Banner1 from "../components/Banner1";
import PrivateRoute from "./PrivateRoute";
import SessionDetails from "../dashboardCom/SessionDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <Banner1 />
            },
            {
                path: "studySession",
                element: <StudySession />
            },
            {
                path: "viewStudySessions",
                element: <PrivateRoute><AllStudySessions /></PrivateRoute>
            },
            {
                path: "sessionDetails/:id",
                element: <SessionDetails />,
                // loader: ({params}) => fetch(`http://localhost:5000/studySession/${params.id}`)
            }
        ]
    }
]);