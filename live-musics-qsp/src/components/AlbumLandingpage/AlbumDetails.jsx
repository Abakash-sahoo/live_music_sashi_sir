import React, { useContext, useState, useRef } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { Navigate, useLocation } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContextApi';

const AlbumDetails = () => {
    const albumData = useLocation();
    let { authUser } = useContext(AuthContext);
    const { songs, album } = albumData?.state || {};
    const numberOfTracks = album?.song?.filter((track) => track.type !== "image/jpeg") || [];

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

    return (
        <>
            <section className='w-full album_landing'>
                <article>
                    <aside className='flex flex-col md:flex-row gap-5 w-full'>
                        <div className='leftBlock md:basis-[30%]'>
                            <figure className='py-3 relative'>
                                <img src={songs?.url} alt="Album Cover" className='rounded-lg object-contain h-[500px] w-full' />
                                <span className='absolute top-3 right-3 bg-purple-700 text-white px-4 py-1 rounded-md'>
                                    {album?.language}
                                </span>
                            </figure>
                        </div>
                        <div className='rightBlock md:basis-[70%]'>
                            <h1 className='text-3xl font-bold flex mt-2 items-center gap-2'>
                                <span>{album?.title}</span>
                                <span className='bg-purple-700 text-white mt-2 text-sm px-3 py-1 rounded-lg'>
                                    Number of tracks: {numberOfTracks.length}
                                </span>
                            </h1>
                            <ul className='flex flex-col gap-6 text-gray-400 mt-4 text-2xl'>
                                <li><strong>Music Director:</strong> {album?.musicDirector}</li>
                                <li><strong>Lyricists:</strong> {album?.lyricists}</li>
                                <li><strong>Singers:</strong> {album?.singers}</li>
                                <li><strong>Actors:</strong> {album?.actors}</li>
                                <li><strong>Album Type:</strong> {album?.albumType}</li>
                                <li><strong>Release Date:</strong> {album?.date}</li>
                                <li><strong>Director:</strong> {album?.director}</li>
                                <li><strong>Description:</strong> {album?.description}</li>
                            </ul>
                        </div>
                    </aside>

                    <main className='bg-slate-900 mt-6 rounded-lg overflow-auto p-5'>
                        <table className='w-full text-left text-gray-400 mb-32'>
                            <thead className='bg-slate-800 text-white text-sm uppercase'>
                                <tr>
                                    <th className='px-4 py-2'>#</th>
                                    <th className='px-4 py-2'>Play</th>
                                    <th className='px-4 py-2'>Track</th>
                                    <th className='px-4 py-2'>Artists</th>
                                    <th className='px-4 py-2'>Music Director</th>
                                </tr>
                            </thead>
                            <tbody>
                                {numberOfTracks.map((song, index) => (
                                    <tr key={index} className='border-b border-slate-700 hover:bg-slate-800'>
                                        <td className='px-4 py-2'>{index + 1}</td>
                                        <td className='px-4 py-2 relative'>
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
                                        </td>
                                        <td className='px-4 py-2'>{song?.name?.replaceAll("-", " ")}</td>
                                        <td className='px-4 py-2'>{album?.singers}, {album?.actors}</td>
                                        <td className='px-4 py-2'>{album?.musicDirector}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </main>
                </article>
            </section>

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
    );
};

export default AlbumDetails;
