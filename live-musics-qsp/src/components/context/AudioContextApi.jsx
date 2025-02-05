import { createContext, useState, useRef, useEffect } from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

export const AudioContext = createContext(null);

const AudioContextProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio());

  //! function to remove player
  const removePlayer = () => {
    audioRef.current.pause();
    audioRef.current.src = null;
    setCurrentSong(null);
    setIsPlaying(false);
  };

  //! Function to play a song
  const playSong = (song) => {
    if (currentSong?.id !== song.id) {
      audioRef.current.pause();
      audioRef.current.src = song.url;
      setCurrentSong(song);
      setIsPlaying(true);
      audioRef.current.play();
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  //! Function to pause song
  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  //! Update progress bar as song plays
  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current.duration) {
        setProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      }
    };

    audioRef.current.addEventListener("timeupdate", updateProgress);
    return () => {
      audioRef.current.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  //! Seek functionality when user moves the slider
  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <AudioContext.Provider
      value={{ currentSong, isPlaying, playSong, pauseSong }}
    >
      {children}

      {currentSong && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-700 text-white p-4 flex flex-col items-center">
          {/* remove player */}
          <button
            onClick={removePlayer} // Corrected the function call here
            className="border border-red-600 bg-slate-200 rounded-full p-2"
          >
            ❌
          </button>
          {/* remove player */}

          <div className="w-full flex justify-between items-center gap-4">
            <div>
              <button
                onClick={isPlaying ? pauseSong : () => playSong(currentSong)}
                className="text-white text-3xl mx-4"
              >
                {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
              </button>
            </div>
            <div className="w-full flex">
              <img
                src={currentSong.thumbnailSong}
                className="w-15 h-12 rounded-md mr-4"
                alt="Song Thumbnail"
              />
              <div className="flex flex-col">
                <h3 className="text-lg">{currentSong.name}</h3>
                <p className="text-sm text-gray-400">{currentSong.singers}</p>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center mt-2">
            <span className="text-sm text-gray-400">
              {formatTime(audioRef.current.currentTime || 0)}
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="w-full h-1 rounded-lg cursor-pointer mx-2 accent-rose-600"
            />
            <span className="text-sm text-gray-400">
              {formatTime(audioRef.current.duration || 0)}
            </span>
          </div>
        </div>
      )}
    </AudioContext.Provider>
  );
};

export default AudioContextProvider;
