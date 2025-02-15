import { Button } from '@/components/ui/button';
import { AuthContext } from '@/context/AuthContext';
import React, { useContext, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSigninUser} = useContext(AuthContext)
     const [error , setError] = useState('')
     const navigate = useNavigate()


     // hnadle google sign in user 
   const handleGoogleSignIn =()=>{
     googleSigninUser()
    .then(result =>{
      const user = result.user 
      if(user) navigate("/")
      console.log(user)
    })
    .catch(err =>{
        const error = err.message 
        console.log("err from register google sign in" , error)
        setError(error)

    })
}


    return (
        <>
          <Button variant="white" size="sm" className="mr-3">
          <FaGithub />
          <span className="text-[19px] text-[#535555] ml-1">Github</span>
        </Button>

        <Button  
          onClick={handleGoogleSignIn}
         variant="white" size="sm" className="ml-3">
          <FcGoogle />
          <span className="text-[19px] text-[#535555] ml-1">Google</span>
        </Button>
        </>
    );
};

export default SocialLogin;