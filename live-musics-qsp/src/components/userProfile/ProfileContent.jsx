import React from 'react'
import { Outlet } from 'react-router-dom'

const ProfileContent = () => {
  return (
      <aside className='basis-[80%] bg-slate-900  h-[100vh] p-1 '>
          <Outlet/>
      </aside>
  )
}

export default ProfileContent
