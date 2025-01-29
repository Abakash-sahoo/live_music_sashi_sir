import React from 'react'
import LOGO from './logo.png'
const Logo = () => {
    return (
        <aside className='logo'>
            <figure>
                {/* <a href="#">
                    <img src={LOGO} alt="logo" width={100} />
                </a> */}

                <span>
                    <a href="#" className='text-slate-400 font-bold text-2xl'>Qsp Music </a>
                </span>
            </figure>
        </aside>
    )
}

export default Logo
