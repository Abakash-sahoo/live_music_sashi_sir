import React, { Fragment, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { getDocs, collection } from 'firebase/firestore'
import { __AUTH, __DB } from '../../backend/firebase'
import Spinner from '../../helpers/Spinner'

const LandingContent = () => {
    let [state, setState] = useState(null)
    let fetchAlbums = async () => {
        let albumCollectionRef = collection(__DB, "albumCollection");
        let get_Albums = await getDocs(albumCollectionRef);//taking albumCollectionRef query

        let data = get_Albums.docs.map(album => {

            console.log(album.data())
            return { ...album.data(), id: album.id }
        })
        setState(data)


    }
    console.log(state)


    useEffect(() => {
        fetchAlbums()
    }, [])

    return (
        <div>
            {state === null ? <Spinner /> : state?.map(album => {
                return <aside className='container' key={album.id}>
                    <figure>
                        {album.song.map(song => {
                            return <Fragment>
                                {
                                    song.type == "image/jpeg" ? <img src={song.url} alt="" /> : <p>mp3</p>
                                }
                            </Fragment>
                        })}
                    </figure>
                    <h1>{album.title}</h1>
                </aside>
            })}
        </div>
    )
}

export default LandingContent
