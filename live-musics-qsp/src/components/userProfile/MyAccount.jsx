import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContextApi'
import Spinner from '../../helpers/Spinner';
import {Link, NavLink} from 'react-router-dom'
import { LuImagePlus } from "react-icons/lu";

const MyAccount = () => {
  const { authUser } = useContext(AuthContext || {});
  let { uid } = authUser === null ? "" : authUser;

  console.log(uid)
  return (
    <div>
      {/* <Spinner/> */}
      <section className='_profile'>
        <article className='flex flex-col max-w-2xl bg-slate-800 m-auto my-32 rounded-md min-h-28 h-96 items-center  '>
          {authUser === null ? (
            <Spinner />) : (
            <>
              <header className='flex w-full h-32 bg-slate-600 justify-center items-center rounded-t-md'>
                <figure className='absolute top-[140px] text-center flex items-center flex-col'>
                 <Link to="/user/profile/upload-profile-photo" className='profile_photo' title='upload profile photo'>
                      <LuImagePlus/>
                      
                 </Link>
                  <img src={authUser?.photoURL} alt={authUser?.displayName}
                    className='rounded-full w-28 h-28'
                  />
                  <figcaption className='my-3'>
                    <h2>{authUser?.displayName}</h2>
                    <p>{authUser?.email}</p>
                  </figcaption>
                </figure>
              </header>

            </>
          )
          }

        </article>
      </section>
    </div>
  )
}

export default MyAccount
