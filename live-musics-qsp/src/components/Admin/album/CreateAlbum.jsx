import React, { useState } from "react";

const CreateAlbum = () => {
    let [poster, setPoster] = useState(null);
    let [thumbnail, setThumbnail] = useState(null);
    let [album, setAlbum] = useState({
        title: "",
        poster: "",
        language: "",
        description: "",
        date: "",
        albumType: "",
        src: "",
        thumbnail: "",
        singers: "",
        lyricists: "",
        musicDirector: "",
        actors: "",
        director: "",
    });

    let {
        title,
        language,
        description,
        date,
        albumType,
        src,
        singers,
        lyricists,
        musicDirector,
        actors,
        director,
    } = album;

    const handleSubmit = async e => {
        e.preventDefault();
        let data = new FormData();
        data.append("thumbnail", thumbnail);
        data.append("poster", poster);
        for (let ele in album) {
            data.append(ele, album[ele]);
        }
        for (let [key, value] of data.entries()) {
            console.log(`${ key }:, value`);
        }
    };
    const handleChange = e => {
        setAlbum({ ...album, [e.target.name]: e.target.value });
    };
    const handlePosterFile = e => {
        let file = e.target.files[0];
        setPoster(file);
    };
    const handleThumbnailFile = e => {
        let file = e.target.files[0];
        console.log(file, "thumbnail");
        setThumbnail(file);
    };
    return (
        <div className="w-[70%] m-auto min-h-screen  text-white flex items-center justify-center ">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 p-6 rounded-lg shadow-xl w-full space-y-4"
            >
                <h1 className="text-2xl font-bold text-center">Add Album</h1>

                <section className="grid grid-cols-3 gap-3">
                    <div>
                        <label htmlFor="title" className="block mb-2 font-medium">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="language" className="block mb-2 font-medium">
                            Language
                        </label>
                        <input
                            type="text"
                            id="language"
                            name="language"
                            value={language}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="title" className="block mb-2 font-medium">
                            Poster
                        </label>
                        <input
                            type="file"
                            id="poster"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-500"
                            onChange={handlePosterFile}
                        />
                    </div>
                </section>
                <section>
                    <label htmlFor="description" className="block mb-2 font-medium">
                        Description
                    </label>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        value={description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-500"
                        required
                    />
                </section>
                <section className="grid grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="date" className="block mb-2 font-medium">
                            date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="albumType" className="block mb-2 font-medium">
                            Album Type
                        </label>
                        <input
                            type="text"
                            id="albumType"
                            name="albumType"
                            value={albumType}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="src" className="block mb-2 font-medium">
                            Source{" "}
                        </label>
                        <input
                            type="text"
                            id="src"
                            name="src"
                            value={src}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="thumbnail" className="block mb-2 font-medium">
                            Thumbnail
                        </label>
                        <input
                            type="file"
                            id="thumbnail"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-500"
                            onChange={handleThumbnailFile}
                        />
                    </div>
                    <div>
                        <label htmlFor="singers" className="block mb-2 font-medium">
                            Singers{" "}
                        </label>
                        <input
                            type="text"
                            id="singers"
                            name="singers"
                            value={singers}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lyricists" className="block mb-2 font-medium">
                            Lyricists{" "}
                        </label>
                        <input
                            type="text"
                            id="lyricists"
                            name="lyricists"
                            value={lyricists}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="musicDirector" className="block mb-2 font-medium">
                            musicDirector{" "}
                        </label>
                        <input
                            type="text"
                            id="musicDirector"
                            name="musicDirector"
                            value={musicDirector}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="actors" className="block mb-2 font-medium">
                            Actors{" "}
                        </label>
                        <input
                            type="text"
                            id="actors"
                            name="actors"
                            value={actors}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="directors" className="block mb-2 font-medium">
                            Directors{" "}
                        </label>
                        <input
                            type="text"
                            id="directors"
                            name="director"
                            value={director}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-500"
                            required
                        />
                    </div>
                </section>

                <button
                    type="submit"
                    className=" py-2 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateAlbum;