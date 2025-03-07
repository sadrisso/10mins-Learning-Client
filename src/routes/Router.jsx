import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../main/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import StudySession from "../dashboardCom/StudySession";
import AllStudySessions from "../dashboardCom/AllStudySessions";
import PrivateRoute from "./PrivateRoute";
import SessionDetails from "../dashboardCom/SessionDetails";
import AllBookedSessions from "../dashboardCom/AllBookedSessions";
import CreateNote from "../dashboardCom/CreateNote";
import AllStudyMaterialByTutor from "../dashboardCom/AllStudyMaterialByTutor";
import PersonalNote from "../dashboardCom/PersonalNote";
import UpdateNote from "../dashboardCom/UpdateNote";
import Users from "../dashboardCom/Users";
import BookedSessionDetails from '../dashboardCom/BookedSessionDetails';
import StudyMaterial from "../dashboardCom/StudyMaterial";
import UploadMaterial from "../dashboardCom/UploadMaterial";
import EditStudyMaterial from "../dashboardCom/EditStudyMaterial";
import StudySessions from "../dashboardCom/StudySessions";
import StudyMaterialByEmail from "../dashboardCom/StudyMaterialByEmail";
import StudyMaterialById from "../dashboardCom/StudyMaterialById";
import AboutUs from "../pages/AboutUs";
import DashboardLanding from "../components/DashboardLanding";
import Sessions from "../pages/Sessions";
import Contact from "../pages/Contact";
import Profile from "../dashboardCom/Profile";
import ErrorPage from "../pages/ErrorPage";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
                path: "/aboutUs",
                element: <AboutUs />
            },
            {
                path: "/sessions",
                element: <Sessions />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <DashboardLanding />
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
                loader: ({ params }) => fetch(`https://10min-learning-server.vercel.app/myNotes/${params.id}`)
            },
            {
                path: "allStudyMaterialByTutor",
                element: <AllStudyMaterialByTutor />
            },
            {
                path: "studyMaterial/:email",
                element: <StudyMaterialByEmail />
            },
            {
                path: "bookedSession/:id",
                element: <StudyMaterialById />
            },
            {
                path: "sessionForUploadMaterial",
                element: <StudySessions />
            },
            {
                path: "uploadMaterial/:id",
                element: <UploadMaterial />
            },
            {
                path: "studyMaterial/:id",
                element: <StudyMaterial />,
            },
            {
                path: "editStudyMaterial/:id",
                element: <EditStudyMaterial />
            },
            {
                path: "sessionDetails/:id",
                element: <SessionDetails />,
            },
            {
                path: "bookedSessionDetails/:id",
                element: <BookedSessionDetails />,
            },
            {
                path: "profile",
                element: <Profile />
            }
        ]
    }
]);