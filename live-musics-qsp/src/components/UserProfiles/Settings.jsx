import { deleteUser } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextApi";
import toast from "react-hot-toast";

const Settings = () => {
  let { authUser } = useContext(AuthContext);
  //! Delete User Account
  let deleteUserAccount = async () => {
    try {
      let confirmUser = confirm("Are you sure want to delete account?");
      if (confirmUser) {
        await deleteUser(authUser);
        toast.success("Successfully user account has been deleted");
        setTimeout(() => {
          window.location.assign("/auth/login");
        }, 1000);
      }
    } catch (error) {
      toast.error(error.code);
    }
  };
  return (
    <div onClick={deleteUserAccount} className="cursor-pointer">
      Delete User
    </div>
  );
};

export default Settings;
