// import React, { useCallback, useState } from "react";
// import toast from "react-hot-toast";
// import { BsFillEyeFill } from "react-icons/bs";

// import { BsEyeSlashFill } from "react-icons/bs";
// import { __AUTH } from "../../backend/firebase";
// import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
// import { NavLink, useNavigate } from "react-router-dom";

// const PhoneAuth = () => {
//     let navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(false)
//     const [phone, setPhone] = useState("")

//     const handleSubmit = async (e) => {

//         e.preventDefault();
//         try {
//             setIsLoading(true);
//             let recaptchaVerifier = new RecaptchaVerifier(
//                 __AUTH,
//                 "captch-container",
//                 {
//                     size: "invisible",
//                     callback: response => {
//                         console.log(response)
//                     },
//                 }
//             );
//             const confirmResult=await signInWithPhoneNumber(__AUTH, phone, recaptchaVerifier)

//             let OTP=window.prompt("enter otp")
//             let user=await confirmResult(confirmResult.confirm(OTP))
//             console.log(user)

//         } catch {
//             toast.error("error in phone auth")
//             setIsLoading(false);
//             setPhone("")
//         }
//     }

//     return (
//         <section>
//             <article className=" min-h-screen bg-gray-850 flex flex-col justify-center py-[12]">
//                 <header className="mt-10 text-center text-3xl text-purple-600 max-w">
//                     <h1 className="mt-10 text-center text-3xl leading-5 text-purple-600 max-w">Login with otp</h1>

//                 </header>
//                 <main className="mt-8 m-auto">
//                     <form

//                         action=""
//                         className="w-[400px] flex flex-col justify-center bg-gray-700 p-4 rounded-[5px] border-b-2 border-purple-600"
//                     >
//                         <div className="form-group p-2">
//                             <label
//                                 htmlFor="phone"
//                                 className="block font-[500] text-xl leading-5 text-gray-100 py-2"
//                             >
//                                 Phone Number{" "}
//                             </label>
//                             <input
//                                 type="text"
//                                 name="phone"

//                                 id="phone"
//                                 value={phone}
//                                 onChange={(e) => setPhone(e.target.value)}
//                                 placeholder="enter phone number"
//                                 className="w-full p-2 rounded-sm border-gray-500 border bg-transparent"
//                                 required
//                             />
//                         </div>

//                         <div id="captcha_container"></div>

//                         <div className="flex justify-between px-2">
//                             <span>Don't have account ?</span>
//                             <span className="">
//                                 <NavLink to={"/auth/register"}>Register</NavLink>
//                             </span>
//                         </div>
//                         <div className="flex justify-between px-2 items-center my-2">
//                             <span className="text-sm font-thin text-gray-400">
//                                 Forgetten Password</span>
//                             <span className="tesxt-white text-sm bg-slate-500 p-2 rounded-sm hover:bg-pink-700 border-purple-700 hover:border-pink-500">
//                                 <NavLink to={"/auth/resetpassword"}>Reset Password</NavLink>
//                             </span>
//                         </div>

//                         <div className="form-group p-2">
//                             <button className="bg-purple-800 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium my-1 rounded-md text-white hover:bg-purple-600 focus:outline-none">
//                                 Login{" "}
//                             </button>
//                         </div>
//                     </form>
//                 </main>
//             </article>
//         </section>
//     );
// };

// export default PhoneAuth;