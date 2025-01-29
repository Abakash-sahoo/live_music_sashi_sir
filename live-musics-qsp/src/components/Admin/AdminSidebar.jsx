import React from 'react'
import { NavLink } from 'react-router-dom';
import { BiSolidAlbum } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";

const AdminSidebar = () => {
    return (
        <aside className='basis-[16%] bg-slate-800 h-[100vh] p-3 flex flex-col justify-between'>
            <menu>
                <ul >
                    <li>
                        <NavLink to="/admin/dashboard" className='flex gap-1 items-center' >
                            <span className='text-slate-400 2xl' >
                                <RxDashboard />
                            </span>
                            <span>
                                Dashboard
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/add-album" className='flex gap-1 items-center' >
                            <span className='text-slate-400 2xl' >
                                <BiSolidAlbum />
                            </span>
                            <span>
                                Add Album
                            </span>
                        </NavLink>
                    </li>
                   
                </ul>
            </menu>
            

        </aside>
    )
}

export default AdminSidebar