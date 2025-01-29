import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContextApi'
import Spinner from '../../helpers/Spinner';
import { Link, Links, NavLink } from 'react-router-dom'
import { LuImagePlus } from "react-icons/lu";
import { doc, onSnapshot } from 'firebase/firestore';
import { __DB } from '../../backend/firebase';
import { FaRegEdit } from "react-icons/fa";

const MyAccount = () => {
  const { authUser } = useContext(AuthContext || {});
  let { uid } = authUser === null ? "" : authUser;
  const [profile, setProfile] = useState(null)

  // let fetchProfile=useCallback(async ()=>{
  //   onSnapshot(doc(__DB,"user_profile",uid),data=>{
  //     console.log(data)
  //   })
  // },[uid]);

  useEffect(() => {
    let fetchProfile = async () => {
      onSnapshot(doc(__DB, "user_profile", uid), userDoc => {
        console.log(userDoc)
        console.log(userDoc.data())
        setProfile(userDoc.data())
      })
    }
    fetchProfile();
  }, [uid])

  return (
    <div>
      {/* <Spinner/> */}
      <section className='_profile'>
        <article className='flex flex-col max-w-2xl bg-slate-800 m-auto my-32 rounded-md min-h-28  items-center  '>
          {authUser === null ? (
            <Spinner />) : (
            <>
              <header className='flex w-full h-32 bg-slate-600 justify-center items-center rounded-t-md'>
                <figure className='absolute top-[140px] text-center flex items-center flex-col'>
                  <Link to="/user/profile/upload-profile-photo" className='profile_photo' title='upload profile photo'>
                    <LuImagePlus />

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

              {profile === null ?
                (<Spinner />) :
                (profile === undefined ? (
                 <Link to="user/profile/">Add Profile</Link>
                ) :
                  <main className='w-[100%] p-4 profile'>
                    <header>
                      <h1 className='flex justify-between py-2 text-slate-500 text-2xl border-b-2 border-slate-700'>
                        <span> Personal Info</span>

                        <NavLink to={"/user/profile/add-profile"} state={profile}>
                          <FaRegEdit />
                        </NavLink>
                      </h1>

                      <ul className='py-2'>
                        <li className='pb-[8px]'>
                          <p>
                            <span className='text-1xl capitalize text-slate-200'>
                              Full Name:
                            </span>
                            <span>
                              {profile?.firstname}  {profile?.lastname}
                            </span>
                          </p>
                        </li>
                        <li className='pb-[8px]'>
                          <p>
                            <span className='text-1xl capitalize text-slate-200'>
                              Gender :
                            </span>
                            <span>
                              {profile?.gender}
                            </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className='text-1xl capitalize text-slate-200'>
                              Age :
                            </span>
                            <span>
                              {profile?.age}
                            </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className='text-1xl capitalize text-slate-200'>
                              City :
                            </span>
                            <span>
                              {profile?.city}
                            </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className='text-1xl capitalize text-slate-200'>
                              State :
                            </span>
                            <span>
                              {profile?.user_state}
                            </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className='text-1xl capitalize text-slate-200'>
                              Country :
                            </span>
                            <span>
                              {profile?.country}
                            </span>
                          </p>
                        </li>
                      </ul>
                    </header>
                  </main>

                )}



            </>
          )
          }

        </article>
      </section>
    </div>
  )
}

export default MyAccount
