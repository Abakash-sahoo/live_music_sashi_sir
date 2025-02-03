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
import AddProfile from "../components/userProfile/AddProfile";
import AdminRoute from "./AdminRoute";
import AdminDashboard from "../components/Admin/AdminDashboard";
import AdminContainer from "../components/Admin/AdminContainer";
import CreateAlbum from "../components/Admin/album/CreateAlbum";
import LandingContainer from "../components/AlbumLandingpage/LandingContainer";
import AlbumDetails from "../components/AlbumLandingpage/AlbumDetails";
import LandingContent from "../components/AlbumLandingpage/LandingContent";
// import PhoneAuth from "../components/auth/PhoneAuth";

let router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path:"/",
                element: <LandingContainer />,
                children:[
                    {
                        index:true,
                        element:<LandingContent/>
                    },
                    {
                        path: "/album-details/:id",
                        element: <AlbumDetails />,
                    },
                ]
            },
            
            {
                path: "auth/login",
                element: <PublicRoutes>
                    <Login />
                </PublicRoutes>
            },
            // {
            //     path: "auth/phone-auth",
            //     element: <PublicRoutes>
            //         <PhoneAuth />
            //     </PublicRoutes>
            // },
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
                path: "/admin",
                element: (<ProtectedRoutes>
                    <AdminRoute>
                        <AdminContainer />
                    </AdminRoute>
                </ProtectedRoutes>
                ),
                children: [
                    {
                        index: true,
                        element: <AdminDashboard />
                    },
                    {
                        path: "add-album",
                        element: <CreateAlbum />
                    }
                ]
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
                        path: "change-passwornd",
                        element: <ProtectedRoutes>
                            <ChangePassword />
                        </ProtectedRoutes>
                    },
                    {
                        path: "add-profile",
                        element: <ProtectedRoutes>
                            <AddProfile />
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