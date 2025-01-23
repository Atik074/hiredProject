import { Button } from "@/components/ui/button";
import React, { useContext, useState } from "react";
import { FaGithub, FaUserGraduate } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Divider from "../login/Divider";
import { useForm } from "react-hook-form"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/hooks/AuthContext";





const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const {createUser} = useContext(AuthContext)
  const [error , setError] = useState('')
  const navigate = useNavigate()



  // handle form submit
  const onSubmit = (data) =>{
    console.log(data)
    createUser(data.email , data.password)

  
    .then(result =>{
      const user = result.user
  
       if(user) navigate("/login")
        
       console.log("user from register" , user)
    })
    .catch(err=>{
      const error = err.message 
        console.log("err from register" , error)
        setError(error)
    })


  }




  return (
    <div className="bg-gradient-to-bl from-[#22c1c3] to-[#fdbb2d] flex items-center justify-center  gap-x-10 ">
      <img
        className="w-[50%] px-4"
        src="https://shorturl.at/YCIIJ"
        alt="picture"
      />

      <div className="rounded w-[40%]">
        <div className="flex flex-col items-center">
          <FaUserGraduate className="text-[90px] text-center mb-2 mt-6 text-white " />
          <h3 className="text-[26px] font-bold text-black ">
            Create your Account
          </h3>
          <p className="text-[16px] text-black mt-1 mb-12">
            Wellcome! Please fill in the details to get started.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Button variant="white" size="sm" className="mr-3">
            <FaGithub />
            <span className="text-[19px] text-[#535555] ml-1">Github</span>
          </Button>

          <Button variant="white" size="sm" className="ml-3">
            <FcGoogle />
            <span className="text-[19px] text-[#535555] ml-1">Google</span>
          </Button>
        </div>
        <Divider />

        <form onSubmit={handleSubmit(onSubmit)}> 
        <div className="flex justify-between gap-6 w-[80%] mx-auto">
         
          <div className='w-full mb-5 relative'>
                       <Label className="text-[18px] font-normal text-black" htmlFor="firstName">First name</Label>
                       <Input  id="firstName"   type="firstName" placeholder="Your first name" {...register("firstName", { required: "first name is required", maxLength:{
                  value: 20,
                  message: "fist name is too large",
                } })} />
                  {errors.firstName && <span className="text-red-600 text-[15px] absolute left-0 bottom-[-20px]">{errors.firstName.message}</span>} 
                  </div>
                  <div className='w-full relative'>
                  <Label className="text-[18px] font-normal text-black" htmlFor="lastName">Last name</Label>
                  <Input  id="lastName"  type="lastName" placeholder="Your last name" {...register("lastName", { required:"last name is required", maxLength:{
                    value:15 ,
                    message:"last name  is too long"
                  }})} />
                    {errors.lastName && <span className="text-red-600 
                    text-[15px]  absolute left-0 bottom-[1px]">{errors.lastName.message}</span>} 
                 </div>
        </div>

        
        <div className='w-[80%] mx-auto mb-3 '>
                  <Label className="text-[18px] font-normal text-black" htmlFor="photoURL">photoURL</Label>
                  <Input  id="photoURL" name="photoURL"  type="url" placeholder="type here photoURL" {...register("photoURL")}  /> 
                   
                 </div>

              


        <div className='w-[80%] mx-auto mb-5 relative'>
                  <Label className="text-[18px] font-normal text-black" htmlFor="email">Email</Label>
                  <Input  id="email"  type="email" placeholder="type your email" {...register("email", { required:"email is required",
                    pattern:{
                      value:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      message:"please enter a valid email address"
                    }
                  })} /> 
                  {errors.email && <span className="text-red-600 text-[15px]  absolute left-0  bottom-[-20px]">{errors.email.message}</span>}
                 </div>
                 <div className='w-[80%] mx-auto mb-8 relative'>
                  <Label className="text-[18px] font-normal text-black" htmlFor="password">Password</Label>
                  <Input  id="password"  type="password" placeholder="type here password" {...register("password", { required:"password is required",maxLength:{
                    value:20 ,
                    message:"password is too long"
                  } ,pattern:{
                    value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ ,
                    message:"Min eight characters, at least one letter, one number and one special character"
                  }})} /> 
                    {errors.password && <span className="text-red-600 text-[15px]  absolute left-0  ">{errors.password.message}</span>}
                 </div>
      
        <div className="w-[30%] mx-auto "> 
          <input className="bg-gradient-to-r from-[#57cb45] to-[#1083c1] mt-1   mr-4   hover:text-white text-black  text-[19px] w-full border-none   py-2 rounded-md cursor-pointer" type="submit" />
        
        </div>
      
        </form>

        <p className="text-[16px] text-black my-3 text-center">
          Already have an account?
          <Link
            to="/login"
            className="text-black hover:text-white underline hover:no-underline   text-[18px]"
          >
            {" "}
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
