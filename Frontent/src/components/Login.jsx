import React, {useEffect} from 'react';
import { Link } from 'react-router'; // Ensure correct import for your router version
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useAuth } from '../authProvider/authProvider.jsx';

export default function Login() {

    const [authUser, setAuthUser] = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");  
        if (storedUser && storedUser !== 'undefined') {
          setAuthUser(JSON.parse(storedUser));
        } else {
          setAuthUser(undefined);
        } 
      }, [setAuthUser]);

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };
        // console.log("User Info:", userInfo); // Debugging line to check the data being sent

        try {
            await axios.post("http://localhost:3000/user/login", userInfo)
                .then((res) => {
                    if (res.data) {
                        console.log(res.data);
                        alert("Login Successfully");
                    }
                    localStorage.setItem("user", JSON.stringify(userInfo));
                    setAuthUser(userInfo);
                });
        } catch (err) {
            // Accessing the specific error message from the server if available
            const errorMsg = err.response?.data?.message || err.message;
            console.error("Login Error:", err);
            alert("Error: " + errorMsg);
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box max-w-sm">
                    {/* Close Button */}
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            {/* Email Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    className={`input input-bordered w-full focus:outline-primary ${errors.email ? 'border-error' : ''}`}
                                    {...register("email", { required: "Email is required" })}
                                />
                                {errors.email && <span className="text-sm text-error mt-1">{errors.email.message}</span>}
                            </div>

                            {/* Password Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="•••••••"
                                    className={`input input-bordered w-full focus:outline-primary ${errors.password ? 'border-error' : ''}`}
                                    {...register("password", { required: "Password is required" })}
                                />
                                {errors.password && <span className="text-sm text-error mt-1">{errors.password.message}</span>}
                            </div>

                            {/* Submit Button */}
                            <div className="mt-6">
                                <button type="submit" className="btn btn-primary w-full text-white text-lg">
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Signup Section */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Not registered?
                            <Link to='/signup' className="text-primary font-semibold hover:underline ml-1">
                                Signup Now
                            </Link>
                        </p>
                    </div>
                </div>
            </dialog>
        </div>
    );
}