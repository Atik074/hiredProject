import { Button } from "@/components/ui/button";
import React, { useContext, useState } from "react";
import { FaGithub, FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import "./Login.css";
import Divider from "./Divider";
import { useForm } from "react-hook-form";
import { AuthContext } from "@/hooks/AuthContext";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {signInUser} = useContext(AuthContext)
  const [error , setError] = useState('')

  // email: 'at@gmail.com', password: 'asdf1234#@'

  // handle form submitm for user login
  const onSubmit = (data) =>{
    console.log("login data" ,data)
    signInUser(data.email , data.password)
    .then(result =>{
      const loggedInUser = result.user
       console.log("user from login" , loggedInUser)
    })
    .catch(error =>{
      const err = error.message 
        console.log("err from login" , err)
        setError(err)
    })


  }


  return (
    <div className="loginBoard flex items-center justify-end h-screen">
      <div
        className="mr-32 px-8 py-6 shadow-2xl
         bg-gradient-to-r from-[#a6b840cd] to-[#ba3213]
          rounded border-t-[5px] border-t-[#ffcd43]"
      >
        <div className="flex flex-col items-center justify-center">
          <FaUserCircle className="text-[90px] text-center mb-2 text-white" />
          <h3 className="text-[25px] font-semibold text-white">
            Sign in to Hired
          </h3>
          <p className="text-[16px] text-[#dfe9e9] mb-14">
            Welcome back! Please sign in to Continue.
          </p>
        </div>

        <Button variant="white" size="sm" className="mr-3">
          <FaGithub />
          <span className="text-[19px] text-[#535555] ml-1">Github</span>
        </Button>

        <Button variant="white" size="sm" className="ml-3">
          <FcGoogle />
          <span className="text-[19px] text-[#535555] ml-1">Google</span>
        </Button>
        <Divider />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-6">
            <Input
              type="email"
              placeholder="type your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="absolute text-red-600 text-[15px] left-0 bottom-[-20px]">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="relative mb-8">
            <Input
              type="password"
              placeholder="type your Password"
              {...register("password", {
                required: "Password is required",
                maxLength: {
                  value: 20,
                  message: "Password is too long",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message: "Password does not match",
                },
              })}
            />
            {errors.password && (
              <span className="absolute text-red-700 text-[15px] left-0 bottom-[-20px] ">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="w-1/2 mx-auto">
            <button className="bg-gradient-to-r from-[#ba3213] to-[#a6b840cd] transition-all mr-4 text-white hover:text-black text-[19px] w-full border-none hover:border-transparent hover:bg-[#16a085]" type="submit">
              Continue
            </button>
          </div>
        </form>

        <p className="text-[16px] text-[#dfe9e9] my-3 text-center">
          Don't have an account?
          <Link
            to="/register"
            className="text-white hover:text-black underline hover:no-underline text-[18px]"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
