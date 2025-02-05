import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContextApi";
import { useContext } from "react";

const Menu = () => {
  const { authUser, logout } = useContext(AuthContext);

  let AuthenticatedUser = () => {
    return (
      <>
        <li>
          <NavLink
            to="/admin"
            className="text-white active:bg-[#4a3e60cc] hover:bg-purple-800 px-3 gap-2 py-2 font-semibold pointer-events-auto ml-5 h-10 rounded-md flex items-center justify-between tracking-wider "
          >
            <span className="mx-1">Admin</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/profile/my-account"
            className="text-white active:bg-[#4a3e60cc] hover:bg-purple-800 px-2 gap-2 py-2 font-semibold pointer-events-auto ml-5 h-10 rounded-md flex items-center justify-between tracking-wider "
          >
            <span className="mx-1">{authUser?.displayName}</span>
            <span className="mx-1 w-[40px]">
              <img
                src={authUser?.photoURL}
                alt={authUser?.displayName}
                className="h-[35px] w-[35px] rounded-full"
              />
            </span>
          </NavLink>
        </li>
        <li>
          <button
            onClick={() => logout()}
            className="text-white active:bg-[#4a3e60cc] hover:bg-purple-800 px-3 py-2 font-semibold pointer-events-auto ml-5 h-10 w-18 rounded-md flex items-center justify-center tracking-wider"
          >
            Logout
          </button>
        </li>
      </>
    );
  };

  let AnonymousUser = () => {
    return (
      <>
        <li>
          <NavLink
            style={({ isActive }) => ({
              background: isActive && "#673AB7",
            })}
            to={"/auth/login"}
            className="text-white active:bg-[#4a3e60cc] hover:bg-purple-800 px-3 py-2 font-semibold pointer-events-auto ml-5 h-10 w-16 rounded-md flex items-center justify-center tracking-wider"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              background: isActive && "#673AB7",
            })}
            to={"/auth/register"}
            className="text-white active:bg-[#4a3e60cc] hover:bg-purple-800 px-3 py-2 font-semibold pointer-events-auto ml-5 h-10 w-20 rounded-md flex items-center justify-center tracking-wider"
          >
            Register
          </NavLink>
        </li>
      </>
    );
  };
  return (
    <aside>
      <menu className="flex gap-3">
        <li>
          <NavLink
            style={({ isActive }) => ({
              background: isActive && "#673AB7",
            })}
            to={"/"}
            className="text-white active:bg-[#4a3e60cc] hover:bg-purple-800 px-3 py-2 font-semibold pointer-events-auto ml-5 h-10 w-16 rounded-md flex items-center justify-center tracking-wider"
          >
            Home
          </NavLink>
        </li>
        {authUser === null ? <AnonymousUser /> : <AuthenticatedUser />}
      </menu>
    </aside>
  );
};

export default Menu;
