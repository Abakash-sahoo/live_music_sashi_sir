import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { MdAddPhotoAlternate } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { ImProfile } from "react-icons/im";

const ProfileSidebar = () => {
    return (
        <aside className='basis-[16%] bg-slate-800 h-[100vh] p-3 flex flex-col justify-between'>
            <menu>
                <ul className=''>
                    <li>
                        <NavLink to="my-account" className='flex gap-1 items-center' >
                            <span className='text-slate-400 2xl' >
                                <MdAccountCircle />
                            </span>
                            <span>
                                My account
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="add-profile" className='flex gap-1 items-center'>
                            <span className='text-slate-400 2xl' >
                                <ImProfile />
                            </span>
                            <span>
                                Add Profie
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="change-password" className='flex gap-1 items-center'>
                            <span className='text-slate-400 2xl' >
                                <TbLockPassword />
                            </span>
                            <span>
                                Change Password
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="upload-profile-photo" className='flex gap-1 items-center'>
                            <span className='text-slate-400 2xl' >
                                <MdAddPhotoAlternate />
                            </span>
                            <span>
                                Upload Profile photo
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="setting" className='flex gap-1 items-center'>
                            <span className='text-slate-400 2xl' >
                                <CiSettings />
                            </span>
                            <span>
                                Settings
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </menu>
            <footer className='bg-red-600 p-2'>
                <NavLink >
                    Danger Zone
                </NavLink>
            </footer>

        </aside>
    )
}

export default ProfileSidebar