import React, { useContext } from 'react'

import { AuthContext } from '../../context/AuthContextApi'
import { deleteUser } from 'firebase/auth';
import toast from 'react-hot-toast';

const Setting = () => {
  let { authUser } = useContext(AuthContext)

  let deleteAnAccount = async () => {
    // await deleteUser(authUser)
    // toast.success("successfully user account delete")
    // window.location.assign("/auth/login")
    try {
      let confirmUser = confirm("Are you sure to delete account? ")
      if (confirmUser) {
        await deleteUser(authUser)
        toast.success("successfully user account delete")
        window.location.assign("/auth/login")

      }

    } catch (error) {
      toast.error(error.code + "error")
      console.log(error);

    }
  }
  return (
    <div>
      <button onClick={deleteAnAccount}>Delete Account</button>
    </div>
  )
}

export default Setting
