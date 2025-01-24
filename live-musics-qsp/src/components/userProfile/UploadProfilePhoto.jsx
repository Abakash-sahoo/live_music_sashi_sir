import { useContext, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, replace, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContextApi";

const UploadProfilePhoto = () => {

  let navigate = useNavigate();
  const { authUser } = useContext(AuthContext || {});
  let [photoFile, setPhotoFile] = useState("");
  let [photoPreview, setPhotoPreview] = useState(null);
  let [isLoading, setIsLoading] = useState(false)

  //! handling photo change
  let handlePhotoChange = e => {

    //! this file is present in e.target.files[0]
    let file = e.target.files[0];
    // console.log(file);

    //! this is a dom api(for preview)
    let reader = new FileReader()
    // console.log(reader);
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      console.log(e);
      setPhotoPreview(e.target.result);
    };
    setPhotoFile(file)
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      // console.log(photoFile);  
      if (!photoFile) return;
      const data = new FormData()
      //! sending the photo ('key', 'value')
      data.append('file', photoFile);  // react fetching file from users
      data.append("upload_preset", "live_music_app"); // cloudinary calling preset value
      data.append("cloud_name", "dcowd0rxv") // cloudinary name

      // connect cloudinary API and send files => window.fetch();
      let cloudinary_response = await fetch('https://api.cloudinary.com/v1_1/dqapnmfci/image/upload', {
        method: "POST",
        body: data
      });

      let finalProfileURL = await cloudinary_response.json();
      const photoUrlData = finalProfileURL.url;
      console.log(photoUrlData);
      await updateProfile(authUser, {
        photoURL: photoUrlData,
      });
      toast.success("Profile picture uploaded successfully")
      navigate("/user/profile/my-account", { replace: true })

      // console.log(formValue) 

    } catch (error) {
      toast.error(error.code.split(5))
    }
    setIsLoading(false);
    setPhotoFile("")
  }

  return (
    <section>
      <article className="container h-[100%-70px] bg-gray-850 flex flex-col justify-center py-12">
        <header>
          <h1 className="mt-10 text-center text-3xl leading-5 text-purple-600 max-w flex flex-col gap-2 justify-center relative items-center">

            <span className="absolute top-[70px] left-0">
              <Link to="/user/profile/myaccount">
                <IoMdArrowRoundBack />
              </Link>
            </span>

            <span>Upload Profile Photo </span>
            <p>
              {photoPreview && (
                <img
                  src={photoPreview}
                  alt="preview"
                  className="rounded bg-slate-600 p-2 h-[150px] w-[150px] mt-3" />
              )}

            </p>
          </h1>
        </header>

        <main className="mt-8 m-auto">
          <form onSubmit={handleSubmit}
            className="w-[400px] flex flex-col justify-center bg-gray-700 p-5 rounded-xl border-b-2"
          >
            <div className="py-2">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-5 text-gray-100 py-1 tracking-wider"
              >
                Upload Profile Photo
              </label>
              <input
                onChange={handlePhotoChange}
                type="file"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-sm border-gray-500 border bg-transparent focus:outline-none"
                required
              />
            </div>
            <div className="py-2">
              <button className="bg-purple-700 w-full flex justify-center py-2 px-4 border border-transparent text-sm font- my-1 rounded-md text-white hover:bg-purple-600 focus:outline-none">Upload Photo
              </button>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
}

export default UploadProfilePhoto