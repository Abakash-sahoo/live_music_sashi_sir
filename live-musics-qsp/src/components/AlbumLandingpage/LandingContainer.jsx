import React from 'react'
import LandingSidebar from './LandingSidebar'
import LandingContent from './LandingContent'

const LandingContainer = () => {
  return (
    <section className='w-full'>
      <article>
        <LandingSidebar/>
        <LandingContent/>
      </article>
    </section>
  )
}

export default LandingContainer
