import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsFillEyeFill } from "react-icons/bs";

import { BsEyeSlashFill } from "react-icons/bs";
import { __AUTH } from "../../backend/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    let [isVisible, setIsVible] = useState(false);
    const [state, setState] = useState({
        email: "",
        password: "",
        isLoading: false,
    });

    let { email, password } = state;

    let handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    let handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            //   let { username: u, email: e, password: p } = state;
            console.log(email, password);
            let { user } = await signInWithEmailAndPassword(__AUTH, email, password);
            //!=======testting code =======================
            // let obj = await signInWithPhoneNumber()
            // async function signInWithPhoneNumber(phoneNumber, event) {
            //     event.preventDefault();
            //     try {
            //         const confirmation = await auth().signInWithPhoneNumber(phoneNumber);

            //         if (confirmation) {
            //             setConfirm(confirmation);
            //         }
            //     } catch (err) {
            //         console.log('Check Exist Error2 - ' + err.message);
            //         console.log('error Code - ' + err.code);
            //         setErrorOccured(true);
            //         if (err.code === 'missing-phone-number') {
            //             console.log('Missing Phone Number.');
            //             setErrorMsg('Missing Phone Number.');
            //         } else if (err.code === 'auth/invalid-phone-number') {
            //             console.log('Invalid Phone Number.');
            //             setErrorMsg('Invalid Phone Number.');
            //         } else if (err.code === 'auth/quota-exceeded') {
            //             console.log('SMS quota exceeded.');
            //             setErrorMsg('SMS quota exceeded.Please try again later.');
            //         } else if (err.code === 'auth/user-disabled') {
            //             console.log('User disabled.');
            //             setErrorMsg('Phone Number disabled. Please contact support.');
            //         } else {
            //             console.log('Unexpected Error.' + err.code);
            //             axios.post(`https://myapi/error`, err);
            //             setErrorMsg('Unexpected Error Occured. Please contact support.');
            //         }
            //     }
            // }

            //!==============end =========================

            console.log(user)
            console.log(user.emailVerified);
            if (user.emailVerified === true) {
                toast.success("Logged in Successfully");
                navigate("/user/profile");
            } else {
                toast.error("Not verified account");
            }

            setState({
                email: "",
                password: "",
                isLoading: false,
            });
        } catch (err) {
            toast.error("Wrong Credentials")
            console.log(err);
        }
    };

    let handleEye = () => {
        setIsVible(!isVisible);
    };

    return (
        <section>
            <article className=" min-h-screen bg-gray-850 flex flex-col justify-center py-[12]">
                <header className="mt-10 text-center text-3xl text-purple-600 max-w">
                    <h1>Login</h1>
                    {/* <div className="">
                        <Link to="">Login wiht otp</Link>
                    </div> */}
                </header>
                <main className="mt-8 m-auto">
                    <form
                        onSubmit={handleFormSubmit}
                        action=""
                        className="w-[400px] flex flex-col justify-center bg-gray-700 p-4 rounded-[5px] border-b-2 border-purple-600"
                    >
                        <div className="form-group p-2">
                            <label
                                htmlFor="email"
                                className="block font-[500] text-xl leading-5 text-gray-100 py-2"
                            >
                                email{" "}
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                id="email"
                                onChange={handleInputChange}
                                placeholder="enter email"
                                className="w-full p-2 rounded-sm border-gray-500 border bg-transparent"
                                required
                            />
                        </div>
                        <div className="form-group p-2 relative">
                            <label
                                htmlFor="password"
                                className="block font-[500] text-xl leading-5 text-gray-100 py-2"
                            >
                                password{" "}
                            </label>
                            <input
                                type={isVisible ? "password" : "text"}
                                name="password"
                                id="password"
                                value={password}
                                onChange={handleInputChange}
                                placeholder="enter password"
                                className="w-full p-2 rounded-sm border-gray-500 border bg-transparent"
                                required
                            />
                            <span
                                className="absolute right-[20px] bottom-[20px]"
                                onClick={handleEye}
                            >
                                {isVisible ? <BsFillEyeFill /> : <BsEyeSlashFill />}
                            </span>
                        </div>

                        <div className="flex justify-between px-2">
                            <span>Don't have account ?</span>
                            <span className="">
                                <NavLink to={"/auth/register"}>Register</NavLink>
                            </span>
                        </div>
                        <div className="flex justify-between px-2 items-center my-2">
                            <span className="text-sm font-thin text-gray-400">
                                Forgetten Password</span>
                            <span className="tesxt-white text-sm bg-slate-500 p-2 rounded-sm hover:bg-pink-700 border-purple-700 hover:border-pink-500">
                                <NavLink to={"/auth/resetpassword"}>Reset Password</NavLink>
                            </span>
                        </div>

                        <div className="form-group p-2">
                            <button className="bg-purple-800 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium my-1 rounded-md text-white hover:bg-purple-600 focus:outline-none">
                                Login{" "}
                            </button>
                        </div>
                    </form>
                </main>
            </article>
        </section>
    );
};

export default Login;