import { Button } from '@/components/ui/button';
import { AuthContext } from '@/context/AuthContext';
import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSigninUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // handle google sign in user 
    const handleGoogleSignIn = () => {
        googleSigninUser()
            .then(result => {
                const user = result.user;
                if (user) navigate("/");
                console.log(user);
            })
            .catch(err => {
                const error = err.message;
                console.log("err from register google sign in", error);
                setError(error);
            });
    }

    return (
        <div className="flex flex-col justify-center items-center gap-3 w-full">
            {/* Google Button */}
            <Button 
                onClick={handleGoogleSignIn} 
                variant="white" 
                size="sm" 
                className="flex items-center justify-center sm:w-auto w-full py-3 px-4 md:py-3 md:px-6 lg:py-[19px] lg:px-12 md:text-lg lg:text-xl">
                <FcGoogle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
                <span className="text-[14px] sm:text-[19px] text-[#535555] ml-2 md:text-lg lg:text-xl">Google</span>
            </Button>
        </div>
    );
};

export default SocialLogin;
