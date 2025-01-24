import React from 'react'
import NavbarContainer from './navbarBlock/NavbarContainer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <>
    <NavbarContainer/>
    <Toaster/>
    <Outlet/>
    </>
  )
}

export default Layout
