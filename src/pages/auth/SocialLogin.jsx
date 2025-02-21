import { Button } from '@/components/ui/button';
import { AuthContext } from '@/context/AuthContext';
import React, { useContext, useState } from 'react';
import { FaGithub } from "react-icons/fa";
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
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 w-full">
            {/* Github Button */}
            <Button variant="white" size="sm" className="flex items-center justify-center sm:w-auto w-full py-2 px-4">
                <FaGithub className="text-xl sm:text-2xl" />
                <span className="text-[14px] sm:text-[19px] text-[#535555] ml-2">Github</span>
            </Button>

            {/* Google Button */}
            <Button onClick={handleGoogleSignIn} variant="white" size="sm" className="flex items-center justify-center sm:w-auto w-full py-2 px-4">
                <FcGoogle className="text-xl sm:text-2xl" />
                <span className="text-[14px] sm:text-[19px] text-[#535555] ml-2">Google</span>
            </Button>
        </div>
    );
};

export default SocialLogin;
