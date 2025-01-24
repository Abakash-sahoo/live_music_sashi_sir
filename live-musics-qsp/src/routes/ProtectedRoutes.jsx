import { Navigate } from "react-router-dom";
import { AuthContext } from './../context/AuthContextApi';
import { useContext } from "react";

const ProtectedRoutes = ({ children }) => {

    let { authUser } = useContext(AuthContext || {});
    if ((authUser && !authUser?.accessToken) || window.localStorage.getItem("TOKEN")) {
        return <>{children}</>
    }
    else {
        return <Navigate to="/auth/login" />
    }
}

export default ProtectedRoutes;