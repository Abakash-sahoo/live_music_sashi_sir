import React from 'react'
import ProfileSidebar from './ProfileSidebar'
import ProfileContent from './ProfileContent'

const ProfileContainer = () => {
    return (
        <section className='_profileBlock'>
            <article className='flex gap-1'>
                <ProfileSidebar />
                <ProfileContent />
            </article>
        </section>
    )
}

export default ProfileContainer;
