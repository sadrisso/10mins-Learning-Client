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
import AllBookedSessions from "../dashboardCom/AllBookedSessions";
import CreateNote from "../dashboardCom/CreateNote";
import AllStudyMaterialByTutor from "../dashboardCom/AllStudyMaterialByTutor";
import PersonalNote from "../dashboardCom/PersonalNote";
import UpdateNote from "../dashboardCom/UpdateNote";
import Users from "../dashboardCom/Users";
import BookedSessionDetails from '../dashboardCom/BookedSessionDetails';




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
                path: "users",
                element: <Users />
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
                path: "viewBookedSessions",
                element: <PrivateRoute><AllBookedSessions /></PrivateRoute>
            },
            {
                path: "createNote",
                element: <PrivateRoute><CreateNote /></PrivateRoute>
            },
            {
                path: "personalNotes",
                element: <PersonalNote />
            },
            {
                path: "updateNote/:id",
                element: <UpdateNote />,
                loader: ({ params }) => fetch(`http://localhost:5000/myNotes/${params.id}`)
            },
            {
                path: "allStudyMaterialByTutor",
                element: <PrivateRoute><AllStudyMaterialByTutor /></PrivateRoute>
            },
            {
                path: "sessionDetails/:id",
                element: <SessionDetails />,
            },
            {
                path: "BookedSessionDetails/:id",
                element: <BookedSessionDetails />,
            }
        ]
    }
]);