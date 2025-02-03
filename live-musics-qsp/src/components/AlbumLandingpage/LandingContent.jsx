import React, { Fragment, useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getDocs, collection } from 'firebase/firestore'
import { __AUTH, __DB } from '../../backend/firebase'
import Spinner from '../../helpers/Spinner'
import AllSongContainer from './AllSongContainer'


const LandingContent = () => {
   

    let [state, setState] = useState(null)
    let fetchAlbums = async () => {
        let albumCollectionRef = collection(__DB, "albumCollection"); // creating query or target which collection
        let get_Albums = await getDocs(albumCollectionRef);//taking albumCollectionRef query | return [{},{}]

        let data = get_Albums.docs.map(album => {

            // console.log(album.data())
            return { ...album.data(), id: album.id }
        })
        setState(data)


    }
    // console.log(state)

    useEffect(() => {
        fetchAlbums()
    }, [])

    return (
        <>


            <section>

            </section>

            <section className='bg-slate-700 h-screen p-2 w-full'>
                <article>
                    {/*--------------------------------- below section ----------------------- */}
                    <aside>
                       <AllSongContainer/>
                    </aside>

                    {/*--------------------------------- below section ----------------------- */}
                    <aside>

                        <h1 className='text-2xl p-2 border-b-2 border-purple-400'>
                            Album
                        </h1>
                        <main className='flex gap-2'>
                            <>
                                {state === null ? <Spinner /> : state?.map(album => {
                                    return (
                                        <Fragment key={album.id}>
                                            {album?.song.map(songs => {
                                                // console.log(songs)
                                                return (
                                                    <>
                                                        {songs?.type === "image/jpeg" && (
                                                            <NavLink to={`/album-details/${songs.id}`} state={{ album, songs }} >
                                                                <div className='basis-[20%] w-[250px] h-[300px] mt-2 bg-slate-900 rounded-md hover:bg-slate-800' key={album.id}>
                                                                    <Fragment key={songs.id}>
                                                                        <figure>
                                                                            <img src={songs.url} alt={songs.id} className='rounded-t-md h-[200px] w-[250px] object-cover' />
                                                                        </figure>
                                                                        <main className='p-4 rounded-b-md'>
                                                                            <h1>{songs.name}</h1>
                                                                        </main>
                                                                    </Fragment>
                                                                </div>
                                                            </NavLink>
                                                        )}
                                                    </>
                                                )
                                            })}
                                        </Fragment>
                                    )

                                })}
                            </>
                        </main>
                    </aside>
                </article>
            </section>
        </>
        // <div>
        //     {state === null ? <Spinner /> : state?.map(album => {
        //         return <aside className='container' key={album.id}>
        //             <figure>
        //                 {album.song.map(song => {
        //                     return <Fragment>
        //                         {
        //                             song.type == "image/jpeg" ? <img src={song.url} height="400px" width="400px" alt="" /> : <p>mp3</p>
        //                         }
        //                     </Fragment>
        //                 })}
        //             </figure>
        //             <h1>{album.title}</h1> 
        //         </aside>
        //     })}
        // </div>
    )
}

export default LandingContent
