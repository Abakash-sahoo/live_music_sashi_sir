import React from "react";
import { NavLink } from "react-router-dom";
import MusicIcon from "./music-icon.png";
import { RiAlbumFill } from "react-icons/ri";

const PopularAlbums = ({ albums }) => {
  return (
    <section className="relative" id="popular-albums">
      <header className="rounded-sm border-bg-gray-400">
        <h1 className="text-2xl font-bold p-2 mt-2 ml-2 mb-4 flex items-center">
          {/* <img src={MusicIcon} alt="Music Icon" className="h-8 mr-2" /> */}
          <span className="px-2">
            <RiAlbumFill />
          </span>
          Popular Albums Collection
        </h1>
      </header>

      <div
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth mt-1 ml-16 pr-10"
      >
        {albums.map((album) => (
          <NavLink
            to={`/album-details/${album.id}/${album.title}`}
            state={{ album, songs: album.songs }}
            key={album.id}
          >
            <aside className=" w-[200px] p-4 ml-4 bg-slate-900 hover:bg-slate-950 rounded-lg cursor-pointer transition duration-200 ease-linear">
              <img
                src={album.thumbnailAlbum}
                className="w-[200px] h-[200px] object-cover rounded-md hover:scale-105 transition duration-200 ease-linear"
                alt={album.title}
              />
              <h1 className="text-white text-[18px] mt-3 text-center">
                {/* {album.title} */}
                {
                  album.title.length>16?album.title.slice(0,16)+"...":album.title
                }
              </h1>
            </aside>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default PopularAlbums;
