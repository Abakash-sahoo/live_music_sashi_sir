import React from 'react'
import AlbumLandingSidebar from './AlbumLandingSidebar'
import AlbumLandingContent from './AlbumLandingContent'
import { Outlet } from 'react-router-dom'

const AlbumLandingContainer = () => {
  return (
    <section className='flex'>
        <AlbumLandingSidebar/>
        {/* <AlbumLandingContent/> */}
        <Outlet/>
        
    </section>
  )
}

export default AlbumLandingContainer