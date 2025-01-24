import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsFillEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { __AUTH } from "../../backend/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification,updateProfile} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import md5 from "md5"

const Register = () => {
    let navigate = useNavigate();
    let [isVisible, setIsVible] = useState(false);
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        isLoading: false,
    });

    let { username, email, password, confirmPassword, isLoading } = state;

    let handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    // Submit
    let handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            //   let { username: u, email: e, password: p } = state;
            if (password != confirmPassword) {
                toast.error("password should match", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
            } else {
                setState({ ...state, isLoading: true });
                let { user } = await createUserWithEmailAndPassword(
                    __AUTH,
                    email,
                    password
                );

                toast.success("email verification sent");
                sendEmailVerification(user);
                //update user profiel data which is 
                updateProfile(user, {
                    displayName: username,
                    photoURL:`https://www.gravatar.com/avatar/${md5(email)}?q=identicon`
                })

                toast.success("user Registered succesfully");
                navigate("/");
            }
        } catch (err) {
            console.log(err);
        } finally {
            setState({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                isLoading: false,
            });
        }
    };

    let handleEye = () => {
        setIsVible(!isVisible);
    };

    return (
        <section>
            <article className=" min-h-screen bg-gray-850 flex flex-col justify-center py-[12]">
                <header className="mt-10 text-center text-3xl text-purple-600 max-w">
                    <h1>Register</h1>
                </header>
                <main className="mt-8 m-auto">
                    <form
                        onSubmit={handleFormSubmit}
                        action=""
                        className="w-[400px] flex flex-col justify-center bg-gray-700 p-4 rounded-[5px] border-b-2 border-purple-600"
                    >
                        <div className="form-group p-2">
                            <label
                                htmlFor="username"
                                className="block font-[500] text-xl leading-5 text-gray-100 py-2 "
                            >
                                username{" "}
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={username}
                                onChange={handleInputChange}
                                className="w-full p-2 rounded-sm border-gray-500 border bg-transparent"
                                placeholder="enter username"
                                required
                            />
                        </div>
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
                                {isVisible ? <BsEyeSlashFill /> : <BsFillEyeFill />}
                            </span>
                        </div>
                        <div className="form-group p-2 relative">
                            <label
                                htmlFor="confirmPassword"
                                className="block font-[500] text-xl leading-5 text-gray-100 py-2"
                            >
                                Confirm password{" "}
                            </label>
                            <input
                                type={isVisible ? "password" : "text"}
                                name="confirmPassword"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={handleInputChange}
                                placeholder="Confirm password"
                                className="w-full p-2 rounded-sm border-gray-500 border bg-transparent"
                                required
                            />
                            <span
                                className="absolute right-[20px] bottom-[20px]"
                                onClick={handleEye}
                            >
                                {isVisible ? <BsEyeSlashFill /> : <BsFillEyeFill />}
                            </span>
                        </div>

                        <div className="flex justify-between px-2">
                            <span>
                                Already have an account ?
                            </span>
                            <span>
                                <NavLink to={"/auth/login"}>Login</NavLink>
                            </span>
                        </div>

                        <div className="form-group p-2">
                            <button className="bg-purple-800 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium my-1 rounded-md text-white hover:bg-purple-600 focus:outline-none">
                                Register{" "}
                            </button>
                        </div>
                    </form>
                </main>
            </article>
        </section>
    );
};

export default Register;