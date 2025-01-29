import React, { useState,useEffect } from "react";
import axios from "axios";
import { __DB } from "../../../backend/firebase";
import { addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";

const CreateAlbum = () => {
    let [selectedFiles, setSelectedFiles] = useState([]);
    let [songUrl, setSongUrl] = useState([]);
    let [isLoading, setIsLoading] = useState(false);


    let [album, setAlbum] = useState({
        title: "",
        poster: "",
        language: "",
        description: "",
        date: "",
        albumType: "",
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
        singers,
        lyricists,
        musicDirector,
        actors,
        director,
    } = album;

    const handleChange = e => {
        setAlbum({ ...album, [e.target.name]: e.target.value });
    };

    const handleFileChange = e => {
        setSelectedFiles([...selectedFiles, ...Array.from(e.target.files)])
    }

    const handleUpload = async e => {
        e.preventDefault();
        setIsLoading(true)
        //~ Initialize an array to hold the uploaded song data
        const uploadedSongs = [];

        const uploaders = selectedFiles?.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "tyss_album");
            formData.append("cloud_name", "dqapnmfci")

            return axios
                .post("https://api.cloudinary.com/v1_1/dqapnmfci/upload", formData)
                .then(response => {
                    const data = response.data;
                    console.log(data);

                    // setSongUrl(...songUrl, {id:data.asset_id, url: data.url});
                    //~ Instead of using setSongUrl directly, push the data to the local array
                    console.log(data,"================================================================")
                    uploadedSongs.push({
                        id: data.asset_id, url: data.url, name:file.name,type:file.type })
                });
        })
        //~  Wait for all uploads to finish
        await Promise.all(uploaders);

        //~ Now that all songs are uploaded, update the state with the final list
        setSongUrl(uploadedSongs); // Use the array of uploaded songs to update the state
        // axios.all(uploaders).then(() => {
        //   console.log("success"); 
        // })

        let payload = {
            title,
            language,
            description,
            date,
            albumType,
            singers,
            lyricists,
            musicDirector,
            actors,
            director,
            song: uploadedSongs,
        }
        //~ create firestore collection
        try {
            setIsLoading(true); // Show loading state
            let albumCollection = collection(__DB, "albumCollection");
            let albumDoc = await addDoc(albumCollection, payload);
            setIsLoading(false); // Hide loading state
            toast.success("Album added successfully");
            console.log(albumDoc);
        } catch (error) {
            console.error("Error adding album to Firestore:", error);
            toast.error("Failed to add album.");
        }
        setIsLoading(false)
    }
    return (
  

        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
            <form
                onSubmit={handleUpload}
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
                    {/* <div>
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
                    </div> */}
                    <div>
                        <label htmlFor="thumbnail" className="block mb-2 font-medium">
                            Thumbnail
                        </label>
                        <input
                            type="file"
                            id="thumbnail"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-500"
                            onChange={handleFileChange}
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
                    <div>
                        <label htmlFor="songs" className="block mb-2 font-medium">
                            Songs
                        </label>
                        <input
                            type="file"
                            id="songs"
                            onChange={handleFileChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-slate-500"
                            required
                            multiple
                        />
                    </div>
                </section>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {isLoading?"Loading....":"Submit"}
                </button>
            </form>
        </div>
    );
};

export default CreateAlbum;