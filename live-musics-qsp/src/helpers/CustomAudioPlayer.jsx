import React, { useEffect, useRef, useState } from 'react'
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const CustomAudioPlayer = ({ audioSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const audioRef = useRef(null)

    let handlePlayPause = () => {
        setIsPlaying(!isPlaying)
    }
    console.log(audioRef)

    let handleSeekbarChange = (e) => {
        console.log(e)
        const NewTime = parseFloat(e.target.value);
        setCurrentTime(NewTime)
    }

    useEffect(() => {
        audioRef.current = new Audio(audioSrc);
        audioRef.src = audioSrc;
        const audio = audioRef.current;

        const updateTime = () => setCurrentTime(audio.currentTime)

        const setMetaData = () => {
            setDuration(audio.duration);
        }

        audio.addEventListener("loadedmetadata", setMetaData);
        audio.addEventListener("timeupdate", updateTime);

        return () => {
            audio.removeEventListener("loadedmetadata", setMetaData);
            audio.removeEventListener("timeUpdate", updateTime);
        }
    }, [audioSrc])
    useEffect(()=>{
        const audio=audioRef.current;
        if(audio){
            if (isPlaying){
                audio.play()
            }else{
                audio.pause()
            }
        }
    },[isPlaying])

    return (
        <section className='h-[200px] w-full bg-slate-300'>
            <article className='flex flex-col justify-evenly h-full'>
                <header>
                    <form >
                        <div className='w-[70%] m-auto flex gap-4 items-center'>
                            <span className='text-[18px]'>{currentTime}</span>
                            {/* seek bar  */}
                            <input type="range" className='w-full' value={duration} min={0} max={duration} />
                            <span className='text-[18px]'>{duration}</span>
                        </div>
                    </form>
                </header>
                <main className='bg-blue-500 w-[30%] mx-auto'>
                    <div className='flex'>
                        <span className='text-[32px]'>
                            <FaBackward />
                        </span>
                        <span className='text-[32px]'>
                            {isPlaying ? (
                                <FaPause onClick={handlePlayPause} />
                            ) : (
                                <FaPlay onClick={handlePlayPause} />
                            )}
                        </span>
                        <span className='text-[32px]'   >
                            <FaForward />
                        </span>
                    </div>
                </main>
            </article>
        </section>
    )
}

export default CustomAudioPlayer
