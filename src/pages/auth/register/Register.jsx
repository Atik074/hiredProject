import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaUserGraduate } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/context/AuthContext";
import Divider from "../login/Divider";
import SocialLogin from "../SocialLogin";
import "./Style.css"

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // handle form submit
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        if (user) navigate("/login");

        console.log("user from register", user);
      })
      .catch((err) => {
        const error = err.message;
        console.log("err from register", error);
        setError(error);
      });

    updateUserProfile();
  };

  return (
    <div className="bg-gradient-to-bl from-[#22c1c3] to-[#fdbb2d] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 p-4 lg:p-8">
      <img
        className="w-full lg:w-[50%] mb-6 lg:mb-0 rounded-lg"
        src="https://shorturl.at/YCIIJ"
        alt="picture"
      />

      <div className="w-full lg:w-[40%] px-4">
        <div className="flex flex-col items-center">
          <FaUserGraduate className="text-[90px] text-center mb-2 mt-6 text-white" />
          <h3 className="text-[26px] font-bold text-black">Create your Account</h3>
          <p className="text-[16px] text-black mt-1 mb-12 text-center md:text-left">
            Welcome! Please fill in the details to get started.
          </p>
        </div>

        <div className="flex items-center justify-center socialBtn">
          <SocialLogin />
        </div>
        <Divider />

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {/* Grid Layout for Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="w-full mb-5 relative firstName">
              <Label className="text-[18px] font-normal text-black" htmlFor="firstName">
                First name
              </Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Your first name"
                {...register("firstName", {
                  required: "First name is required",
                  maxLength: {
                    value: 20,
                    message: "First name is too long",
                  },
                })}
              />
              {errors.firstName && (
                <span className="text-red-600 text-[15px] absolute left-0 bottom-[-20px]">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            {/* Last Name Field */}
            <div className="w-full mb-5 relative">
              <Label className="text-[18px] font-normal text-black" htmlFor="lastName">
                Last name
              </Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Your last name"
                {...register("lastName", {
                  required: "Last name is required",
                  maxLength: {
                    value: 15,
                    message: "Last name is too long",
                  },
                })}
              />
              {/* Last Name Error Message */}
              {errors.lastName && (
                <span className="text-red-600 text-[15px] absolute left-0 bottom-[-20px]">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>

          <div className="w-full mb-3">
            <Label className="text-[18px] font-normal text-black" htmlFor="photoURL">
              Photo URL
            </Label>
            <Input
              id="photoURL"
              name="photoURL"
              type="url"
              placeholder="Type here photo URL"
              {...register("photoURL")}
            />
          </div>

          <div className="w-full mb-5 relative">
            <Label className="text-[18px] font-normal text-black" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Type your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-600 text-[15px] absolute left-0 bottom-[-20px]">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="w-full mb-8 relative">
            <Label className="text-[18px] font-normal text-black" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Type here password"
              {...register("password", {
                required: "Password is required",
                maxLength: {
                  value: 20,
                  message: "Password is too long",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "Min eight characters, at least one letter, one number, and one special character",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-600 text-[15px] absolute left-0 bottom-[-20px]">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="w-full sm:w-[40%] mx-auto">
            <input
              className="bg-gradient-to-r from-[#57cb45] to-[#1083c1] mt-1 hover:text-white text-black text-[19px] w-full border-none py-2 rounded-md cursor-pointer"
              type="submit"
            />
          </div>
        </form>

        <p className="text-[16px] text-black my-3 text-center">
          Already have an account?
          <Link to="/login" className="text-black hover:text-white underline hover:no-underline text-[18px]">
            {" "}
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
