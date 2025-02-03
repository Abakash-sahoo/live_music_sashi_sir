import React from 'react'
import LandingSidebar from './LandingSidebar'
import LandingContent from './LandingContent'
import { Outlet } from 'react-router-dom'

const LandingContainer = () => {
  return (
    <section className='w-full'>
      <article className='flex '>
        <LandingSidebar/>
        <Outlet/>
      </article>
    </section>
  )
}

export default LandingContainer
