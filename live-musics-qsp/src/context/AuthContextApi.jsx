import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { __AUTH } from "../backend/firebase";
import toast from "react-hot-toast";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    console.log("Auth Provider")
    let [authUser, setAuthUser] = useState(null);
    // let [isLoading,setIsLoading]=useState(null);

    const Logout = async () => {
        await signOut(__AUTH);
        window.localStorage.removeItem('TOKEN')
        toast.success("logout successful")
        setAuthUser(null)
        window.location.assign('/');//window api for hard refresh
    }
    console.log("AuthProvider comp")
    useEffect(() => {
        onAuthStateChanged(__AUTH, userInfo => {
            console.log(userInfo)
            // console.log(userInfo.displayName)
            // console.log(userInfo.email)
            // console.log(userInfo, "user info")
            if (userInfo?.emailVerified === true && userInfo.isAnonymous === false) {
                // console.log(userInfo)
                // setIsLoading(true)
                setAuthUser(userInfo)
                window.localStorage.setItem('TOKEN', userInfo.accessToken)
            } else {

                setAuthUser(null)
                window.localStorage.removeItem('TOKEN')
            }
            // setIsLoading(false)
        })
    }, [__AUTH])
    return (
        <AuthContext.Provider value={{ authUser, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;


