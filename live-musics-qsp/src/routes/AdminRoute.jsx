import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContextApi'
import { __DB } from '../backend/firebase'
import { getDoc, doc } from 'firebase/firestore'
import toast from 'react-hot-toast'
import Spinner from '../helpers/Spinner'
import { Navigate } from 'react-router-dom'


const AdminRoute = ({ children }) => {
    let [role, setRole] = useState(null)
    const { authUser } = useContext(AuthContext);
    // console.log(authUser)
    let { uid } = authUser === null ? "" : authUser;
    // console.log(uid)
    if (uid == undefined) {
        console.log("12233")
        return <Spinner />
    } else {
        console.log("else");
        
        if (authUser.accessToken || window.localStorage.getItem("TOKEN")) {
            //fetch data from database and update with react state
            let fetchAdmin = async () => {
                let ref = doc(__DB, "user_profile", uid)
                let adminRole = await getDoc(ref);
                console.log(adminRole.data())
                let { role } = adminRole.data()
                setRole(role)
            }
            fetchAdmin()
            //check admin or user role
            if (role !== undefined || role !== null && role === "admin") {
                return <>{children}</>
            } else {
                {
                    <Spinner />
                    toast.error("you are not authorized")
                    return < Navigate to={"/user/profile/my-account"} />
                }
            }
        } else {
            <Navigate to={"/auth/login"} />
        }
    }

    // if ((uid !== undefined && authUser.accessToken) || (window.localStorage.getItem("TOKEN"))) {
    //     const fetchAdminUser = async () => {
    //         // const q=query(collection(__DB,"user_profile)"),where("role","==","admin"))
    //         // console.log(q.data)

    //         let adminRef = doc(__DB, "user_profile", uid);
    //         let adminRole = await getDoc(adminRef);
    //         setRole(adminRole.data());
    //     };
    //     fetchAdminUser();
    //     //check for normal usr and admin user
    //     if (role !== undefined || role !== null && role == "admin") {
    //         return <>{children}</>
    //     } else {
    //         console.log("else block")
    //         if (role == undefined || role == null || role == "") {
    //             return <Navigate to=" /user / profile / my - account" />
    //             toast.error("you are not authorized");
    //         }

    //     }
    // }
    // else {
    //     return <Navigate to='/auth/login' />
    // }

}

export default AdminRoute
