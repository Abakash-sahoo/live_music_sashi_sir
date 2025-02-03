import React from 'react'
import { MdDashboardCustomize } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const LandingSidebar = () => {
  return (
    <aside className='flex flex-col basis-[16%] border-r-2 border-[#3f51b526] h-screen bg-slate-700'>
      <menu>
        <ul>
          <li className='p-3  '>
            <NavLink to="/" className='flex gap-1 items-center' activeClassName='active'>
              <span className=' ' >
                <MdDashboardCustomize />
              </span>
              <span>
                Dashboard
              </span>
            </NavLink>
          </li>
        </ul>
      </menu>
    </aside>)
}

export default LandingSidebar
