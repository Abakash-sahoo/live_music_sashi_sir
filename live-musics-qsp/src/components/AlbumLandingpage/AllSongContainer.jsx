import React, { useContext, useRef, useState } from 'react'
import { SongContext } from '../../context/SongContextApi'
import { FaPause, FaPlay } from 'react-icons/fa'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AllSongContainer = () => {
    let allSongs = useContext(SongContext)
    console.log(allSongs)
    let songArr = allSongs?.[0]?.song
    console.log(songArr)

    "======================="
    const [songUrl, setSongUrl] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);

    // Audio Player Reference
    const audioPlayerRef = useRef(null);

    const handlePlayPause = (song, index) => {
        if (authUser !== null || index < 1) {
            if (currentSong === index && playing) {
                setPlaying(false);
                console.log(audioPlayerRef)
                audioPlayerRef.current?.audio?.current.pause(); // Pause the audio
            } else {
                setCurrentSong(index);
                setSongUrl(song?.url);
                setPlaying(true);
                setTimeout(() => {
                    audioPlayerRef.current?.audio?.current.play(); // Play the audio
                }, 100);
            }
        } else {
            toast.error("Login and listen to the song");
            Navigate("/auth/login");
        }
    };
    "=========================="
    return (
        <>
            <div className="heading border-b-2 border-violet-400 text-2xl my-2 py-2">
                Trending Songs
            </div>
            <div className='flex h-[250px] w-full my-2'>
                {songArr?.map((song, index) => (
                    <div key={index} className='border-b border-slate-700 hover:bg-slate-800 w-[250px]'>
                        {/* <td className='px-4 py-2'>{index + 1}</td> */}
                        <div className='px-4 py-2 relative h-[200px]'>
                            <button
                                className='flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-700'
                                onClick={() => handlePlayPause(song, index)}
                            >
                                {currentSong === index && playing ? (
                                    <FaPause className='text-white' />
                                ) : (
                                    <FaPlay className='text-white' />
                                )}
                            </button>
                        </div>
                        {/* <td className='px-4 py-2'>{song?.name?.replaceAll("-", " ")}</td>
                        <td className='px-4 py-2'>{album?.singers}, {album?.actors}</td>
                        <td className='px-4 py-2'>{album?.musicDirector}</td> */}
                    </div>
                ))}
            </div>
            {songUrl && (
                <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white shadow-lg">
                    <button onClick={() => {
                        setSongUrl(null);
                        setCurrentSong(null);
                        setPlaying(false);
                        audioPlayerRef.current?.audio?.current.pause(); // Stop playback
                    }}
                        className='absolute right-[49%] top-[-15px] w-7 h-7 bg-slate-900 border bottom-1 rounded-full'>
                        ❌
                    </button>
                    <div className="w-full">
                        <AudioPlayer
                            ref={audioPlayerRef}
                            autoPlay
                            src={songUrl}
                            onPlay={() => setPlaying(true)}
                            onPause={() => setPlaying(false)}
                            className="w-full h-[120px]"
                        />
                    </div>
                </footer>
            )}
        </>
    )
}

export default AllSongContainer
