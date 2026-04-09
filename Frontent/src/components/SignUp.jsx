import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function SignUp() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const Navigate = useNavigate();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.name,
            email: data.email,
            password: data.password,
        }; 
        // console.log("User Info:", userInfo); // Debugging line to check the data being sent

        try {
            await axios.post("https://bookwala.onrender.com/user/signup", userInfo)
            .then((res) => {
                if(res.data) {
                        console.log(res.data);
                        alert("Signup Successfully");
                }
                localStorage.setItem("user", JSON.stringify(res.data.user));
                Navigate('/');
            });
        } catch (err) {
            // Accessing the specific error message from the server if available
            const errorMsg = err.response?.data?.message || err.message;
            console.error("Signup Error:", err);
            alert("Error: " + errorMsg);
        }
    }; // Added missing closing brace

    console.log(watch("example"))
    return (
        <>
            <div class="flex items-center justify-center min-h-screen bg-base-200 p-4">
                <div class="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <h2 class="text-3xl font-bold text-center mb-4">Create Account</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Name Field */}
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="John Doe" class="input input-bordered focus:input-primary" required
                                    {...register("name")}
                                />
                            </div>

                            {/* Email Field */}
                            <div class="form-control mt-2">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email@example.com" class="input input-bordered focus:input-primary" required
                                    {...register("email", { required: true })}
                                />
                            </div>

                            {/* Password Field */}
                            <div class="form-control mt-2">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="••••••••" class="input input-bordered focus:input-primary" required
                                    {...register("password", { required: true })}
                                />
                            </div>

                            {/* Confirm Password */}
                            <div class="form-control mt-2">
                                <label class="label">
                                    <span class="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="••••••••" class="input input-bordered focus:input-primary" required
                                    {...register("password", { required: true })}
                                />
                            </div>

                            {/* Terms & Conditions */}
                            <div class="form-control mt-4">
                                <label class="label cursor-pointer justify-start gap-2">
                                    <input type="checkbox" class="checkbox checkbox-sm checkbox-primary" />
                                    <span class="label-text">I agree to the Terms & Conditions</span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div class="form-control mt-6">
                                <button class="btn btn-primary text-white">Sign Up</button>
                            </div>
                        </form>

                        {/* Login Link */}
                        <div class="mt-4 text-center">
                            <p class="text-sm">
                                Already have an account?
                                <a href="/login" class="link link-primary font-semibold no-underline hover:underline">Login</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
