import React, { useContext, useRef } from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { AudioContext } from "../context/AudioContextApi";
import MusicIcon from "./music-icon.png";
import { RiAlbumFill } from "react-icons/ri";

const RandomSongs = ({ songs }) => {
  const { currentSong, isPlaying, playSong, pauseSong } = useContext(AudioContext);
  const scrollRefSongs = useRef(null);

  const handlePlayPause = (e, song) => {
    e.stopPropagation();
    if (currentSong?.id === song.id && isPlaying) {
      pauseSong();
    } else {
      playSong(song);
    }
  };

  return (
    <section className="random_class mt-2 p-4 bg-slate-800 relative " id="only-for-you">
      <div className="w-full ">
        <header className="rounded-sm border-bg-gray-400">
          <h1 className="text-2xl font-bold p-1 mt-2 mb-4 tracking-wider flex items-center">
            <span className="mr-2">
              {/* <img src={MusicIcon} alt="Music Icon" className="h-8" /> */}
              <span className="px-2">
                <RiAlbumFill />
              </span>
            </span>
            Popular songs
          </h1>
        </header>
      </div>

      {/* The scrolling container with hidden scrollbar */}
      <div
        ref={scrollRefSongs}
        id="scroll_bar"
        className=" flex gap-4 overflow-x-auto scroll-smooth mt-1 ml-16 pr-10"
        style={{ WebkitOverflowScrolling: "touch" }} // For smooth scrolling on iOS
      >
        {songs.map((song) => (
          <div
            key={song.id}
            
            className="random_class_cards not-hover:blur-sm flex-none w-[250px] p-4 bg-slate-900 rounded-lg hover:bg-slate-950 hover:rounded-lg cursor-pointer transition duration-200 ease-linear relative group"
            style={{ boxSizing: "border-box" }}
          >
            <img
              src={song.thumbnailSong}
              className="w-[250px] h-[200px] object-cover rounded-md transition duration-200 ease-linear group-hover:scale-105"
              alt={song.name}
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-200 flex justify-center items-center rounded-lg">
              <button
                onClick={(e) => handlePlayPause(e, song)}
                className="focus:outline-none"
              >
                {currentSong?.id === song.id && isPlaying ? (
                  <FaPauseCircle size={40} className="text-white" />
                ) : (
                  <FaPlayCircle size={40} className="text-white" />
                )}
              </button>
            </div>

            <h3 className="text-white text-[16px] mt-2">{song.name}</h3>
            <p className="text-gray-400 text-[15px]">{song.singers}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RandomSongs;
