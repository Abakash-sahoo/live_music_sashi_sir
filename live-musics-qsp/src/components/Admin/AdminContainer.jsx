import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminContent from './AdminContent'

const AdminContainer = () => {
  return (
    <section className='bg-slate-800'>
        <article className='flex gap-2'>
            <AdminSidebar/>
            <AdminContent/>
        </article>
    </section>
  )
}

export default AdminContainer