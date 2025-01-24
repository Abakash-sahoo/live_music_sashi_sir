import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import ResetPassword from "../components/auth/ResetPassword";
import ProfileContainer from "../components/userProfile/ProfileContainer";
import MyAccount from "../components/userProfile/MyAccount";
import ChangePassword from "../components/userProfile/ChangePassword";
import UploadProfilePhoto from "../components/userProfile/UploadProfilePhoto";
import Setting from "../components/userProfile/Setting";

let router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <h1>Home page</h1>
            },
            {
                path: "auth/login",
                element: <PublicRoutes>
                    <Login />
                </PublicRoutes>
            },
            {
                path: "auth/register",
                element: <PublicRoutes>
                    <Register />
                </PublicRoutes>
            },
            {
                path: "auth/resetpassword",
                element: <PublicRoutes>
                    <ResetPassword />
                </PublicRoutes>
            },
            {
                path: "user/profile",
                element: (<ProtectedRoutes>
                    <ProfileContainer />
                </ProtectedRoutes>),
                children: [
                    {
                        index: true,
                        element: <ProtectedRoutes>
                            <MyAccount />
                        </ProtectedRoutes>
                    },
                    {
                        path: "my-account",
                        element: <ProtectedRoutes>
                            <MyAccount />
                        </ProtectedRoutes>
                    },
                    {
                        path: "change-password",
                        element: <ProtectedRoutes>
                            < ChangePassword />
                        </ProtectedRoutes>
                    },
                    {
                        path: "upload-profile-photo",
                        element: <ProtectedRoutes>
                            < UploadProfilePhoto />
                        </ProtectedRoutes>
                    },
                    {
                        path: "setting",
                        element: <ProtectedRoutes>
                            < Setting />
                        </ProtectedRoutes>
                    }

                ]

            },


        ]
    },

])
export default router