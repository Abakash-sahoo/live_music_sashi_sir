import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContextApi'

const Menu = () => {
    const { authUser, Logout } = useContext(AuthContext)
    // console.log(authUser);
// console.log("Menu comp")
    let AuthenticatedUser = () => {
        return <>
            <li>
                <NavLink to={"/user/profile"} className='text-white active:bg-[#4a3e60cc] hover:bg-purple-800  px-3 font-semibold pointer-event-auto ml-8 h-12 w-auto rounded-md flex items-center justify-center'>
                    <span className='mx-1'>
                        {authUser?.displayName}
                    </span>
                    <span className='mx-1'>
                        <img src={authUser?.
                            photoURL} alt={authUser?.displayName}
                            className='h-[40px] w-[40px] rounded-full ' />
                    </span>
                </NavLink>
            </li>
            <li>
                <button onClick={() => Logout()} className='text-white active:bg-[#4a3e60cc] hover:bg-purple-800  px-3 font-semibold pointer-event-auto ml-8 h-12 w-20 rounded-md flex items-center justify-center'>
                    Logout
                </button>
            </li>

        </>

    }
    let AnonymousUser = () => {
        return <>
            <li >
                <NavLink to="/auth/login"
                    style={({ isActive }) =>
                        (isActive ? { backgroundColor: "#6b21a8" } : null)
                    }
                    className='text-white active:bg-[#4a3e60cc] hover:bg-purple-800  px-3 font-semibold pointer-event-auto ml-8 h-12 w-20 rounded-md flex items-center justify-center'>
                    Login</NavLink>
            </li>
            <li>
                <NavLink to="/auth/register"
                    style={({ isActive }) => {
                        return isActive ? { backgroundColor: "#6b21a8" } : null
                    }}
                    className='text-white active:bg-[#4a3e60cc] hover:bg-purple-800  px-3 font-semibold pointer-event-auto ml-8 h-12 w-20 rounded-md flex items-center justify-center'>
                    Register</NavLink>
            </li>
        </>

    }
    return (
        <aside>
            <nav>
                <menu className='flex gap-3'>
                    <li >
                        <NavLink to="/"
                            style={({ isActive }) => {
                                return isActive ? { backgroundColor: "#6b21a8" } : null
                            }}
                            className='text-white active:bg-[#4a3e60cc] hover:bg-purple-800  px-3 font-semibold pointer-event-auto ml-8 h-12 w-16 rounded-md flex items-center justify-center'>
                            Home
                        </NavLink>
                    </li>
                    {
                        authUser === null ? <AnonymousUser /> : <AuthenticatedUser />
                    }

                </menu>
            </nav>
        </aside>
    )
}

export default Menu
