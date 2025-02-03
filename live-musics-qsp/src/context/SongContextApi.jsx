import { collection, getDocs } from 'firebase/firestore';
import React, { Children, createContext, useEffect, useState } from 'react'
import { __DB } from '../backend/firebase';


export let SongContext = createContext(null)

const SongContextApi = ({ children }) => {

    //fetching all albums 
    let [allSongs, setAllSongs] = useState([])

    let fetchAlbums = async () => {
        let albumCollectionRef = collection(__DB, "albumCollection"); // creating query or target which collection
        let get_Albums = await getDocs(albumCollectionRef);//taking albumCollectionRef query | return [{},{}]

        let newSongs = []
        let data = get_Albums.docs.map(album => {
            // console.log(album.data())

            // extractiong songs from each album 
            console.log(album.data().song,"8888888888888888888888888888")
            let onlySongs = album.data()
            // let onlySongs = album.data()?.song
            console.log(onlySongs, "**************8")

            newSongs = [onlySongs]
            // console.log(newSongs);
        })
        setAllSongs([...newSongs])
    }

    useEffect(() => {

        fetchAlbums()
    }, [])
    console.log(allSongs);
    

    // fetching all album end
    return (
        <SongContext.Provider value={allSongs}>
            {children}
        </SongContext.Provider>
    )
}

export default SongContextApi
