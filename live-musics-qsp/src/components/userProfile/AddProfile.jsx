import React, { Fragment, useContext, useState } from 'react'
import LANGJSON from './language.json'
import { __AUTH, __DB } from '../../backend/firebase';
import { AuthContext } from '../../context/AuthContextApi';
import { doc, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { data, useLocation, useNavigate } from 'react-router-dom';
import { Country, State, City } from 'country-state-city';


const AddProfile = () => {

  const navigate = useNavigate()

  let location = useLocation();

  const { authUser } = useContext(AuthContext || {});
  const { uid, email, photoURL, displayName } = authUser === null ? "" : authUser;

  const [langJSON, setLangJSON] = useState(LANGJSON);
  const [isLoading, setIsLoading] = useState(false)


  const [userData, setUserData] = useState({
    // firstname: "",
    // lastname: "",
    // age: "",
    // gender: "",
    // address: "",
    // city: "",
    // state: "",
    // country: "",
    // language: "",
    // dob: "",
    firstname: location?.state?.firstname,
    lastname: location?.state?.lastname,
    age: location?.state?.age,
    gender: location?.state?.gender,
    address: location?.state?.address,
    city: location?.state?.city,
    state: location?.state?.user_state,
    country: location?.state?.country,
    dob: location?.state?.dob,
    language: location?.state?.language,

  });
  let { firstname, lastname, age, gender, address, city, state: user_state, country, language, dob, date } = userData

  // setIsLoading(true)



  let handleChange = (e) => {



    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
    console.log(userData)
  }


  let handleSubmit = async e => {
    e.preventDefault()
    let payload = {
      firstname, lastname, email, photoURL, displayName, gender, city, user_state, country, address, dob, age, language
    };



    const user_Profile_collection = doc(__DB, "user_profile", authUser?.uid);
    await setDoc(user_Profile_collection, {
      uid,
      displayName,
      photoURL,
      email,
      ...payload
    });
    toast.success("user profile has been added ")
    navigate("/user/profile/my-account", { replace: true })
    // setIsLoading(false)
  }



  return (
    <section className='_porfile'>
      <article>
        <header className='p-[30px]  bg-gradient-to-r from-slate-600 to-slate-800 text-white m-auto w-[55%] rounded-2xl shadow-xl mt-[50px] font-sans font-bold text-2xl  '>
          <h1 className='mb-3 text-center'>Add Profile</h1>
          <hr className='border-slate-400 mb-6' />
          <main>
            <form onSubmit={handleSubmit} className='flex gap-4 flex-col  text-blue-50 mt-6'>

              <div className="full-name flex justify-between items-center">
                <div className="form-group  w-[45%]">
                  <label htmlFor="firstname" className='block mb-1 text-2xl'>First Name:</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="firstname"
                    value={firstname}
                    id=""
                    className=' py-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-100 text-gray-900'
                  />
                </div>

                <div className="form-group inline w-[45%]">
                  <label htmlFor="lastname" className='block mb-1 text-2xl'>Last Name:</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="lastname"
                    value={lastname}
                    id=""
                    className='w-full py-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-100 text-gray-900'
                  />
                </div>
              </div>

              <div className="form-group flex gap-4 ">
                <label htmlFor="lastname" className='block mb-1 text-2xl'>Gender:</label>
                <div className='flex items-center gap-4' onChange={handleChange}>
                  <label className='flex items-center'>
                    <input
                      type="radio"
                      checked={gender === "male"}
                      name="gender"
                      value="male"
                      className='text-blue-500 focus:ring-blue-500'
                    />
                    <span className='ml-2'>Male</span>
                  </label>
                  <label className='flex items-center'>
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === "female"}
                      value="female"
                      className='text-blue-500 focus:ring-blue-500'
                    />
                    <span className='ml-2'>Female</span>
                  </label>
                </div>
              </div>

              <div className="dob_age flex justify-between items-center">
                <div className="form-group w-[45%]">
                  <label htmlFor="dob" className='block mb-1 text-2xl'>DOB:</label>
                  <input
                    type="date"
                    onChange={handleChange}
                    name="dob"
                    value={dob}
                    id=""
                    className='w-full inline-block py-1 text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-100 text-gray-900'
                  />
                </div>

                <div className="form-group w-[45%]">
                  <label htmlFor="age" className='block mb-1 text-2xl'>Age:</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="age"
                    value={age}
                    id=""
                    className='w-full py-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-100 text-gray-900'
                  />
                </div>
              </div>

              <div className="city_state flex justify-between gap-2">
                <div className="form-group w-[45%]">
                  <label htmlFor="city" className='block mb-1 text-2xl'>City:</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="city"
                    value={city}
                    list='city'
                    className='w-full py-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-100 text-gray-900'
                  />
                  <datalist id='city'>
                    {City.getAllCities().map((cty, indx) => {
                      return <option value={cty.name} key={indx + 1}></option>
                    })}
                  </datalist>
                </div>

                <div className="form-group ">
                  <label htmlFor="state" className='block mb-1 text-2xl'>State:</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="state"
                    value={user_state}
                    list='state'
                    className='w-full py-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-100 text-gray-900'
                  />
                  <datalist id='state'>
                    {State.getAllStates().map((st, indx) => {

                      return <option value={st.name} key={indx + 1}></option>
                    })}

                  </datalist>
                </div>
                <div className="form-group">
                  <label htmlFor="country" className='block mb-1 text-2xl'>Country:</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="country"
                    value={country}
                    list='country'
                    className='w-full py-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-100 text-gray-900'
                  />
                  <datalist id='country'>
                    {Country.getAllCountries().map((ct, indx) => {
                      return <option value={ct.name} key={indx + 1}></option>
                    })}

                  </datalist>
                </div>

              </div>


              <div className="language">
                <label htmlFor="language" className='block mb-1 text-2xl'>Language:</label>
                <input
                  type="text"
                  name='language'
                  onChange={handleChange}
                  value={language}
                  list="language"
                  className='w-full py-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-100 text-gray-900'
                />
                <datalist name="language" id="language"  >
                  {
                    langJSON.map(lang => {
                      return <Fragment key={lang.code}>
                        <option value={lang.name}>{lang.name}</option>
                      </Fragment>
                    })
                  }
                </datalist>
              </div>

              <div className="form-group">
                <label htmlFor="address" className='block mb-1 text-2xl'>Address:</label>
                <textarea
                  name="address"
                  onChange={handleChange}
                  value={address}
                  id=""
                  className='w-full py-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-100 text-gray-900 h-28 resize-none'
                ></textarea>
              </div>
              <div className="form-group">
                <button className='bg-purple-400 hover:cursor-pointer border-1 border-purple-900 hover:bg-transparent rounded-md px-10 py-3'>
                  {isLoading ? "loading..." : "Add Profile"}
                </button>
              </div>

            </form>
          </main>
        </header>

      </article>
    </section>
  )
}

export default AddProfile
