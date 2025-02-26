
import SocialIcons from '@/components/constantUi/SocialIcons';
import { Input } from '@/components/ui/input';
import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const location = ["Dhaka", "San Francisco", "Los Angeles", "New York", "Chicago", "San Diego", "Portland", "Seattle", "Austin"];

const Footer = () => {
    return (
        <div className='bg-[#7b7878] pt-10 px-4'>
            <div className='max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                
              
                <div className='space-y-4'>
                    <h2 className="text-[24px] font-semibold text-white">HIRRED</h2>
                    <p className='text-[20px] text-gray-300'>
                        Jobs are shown here, You select the job according to your skill. Apply by clicking on & Apply.
                        If you are eligible for the job, it is your best platform. So, highlight your skill and get your dream job.
                    </p>
                </div>

             
                <div className='space-y-4  '>
                    <h3 className="text-[24px] font-semibold text-white">EJOBS IN</h3>
                    <ul className='grid grid-cols-3 gap-x-3'>
                        {location.map(item => (
                            <li key={item} className='text-[20px] text-gray-300 hover:underline hover:text-white'>{item}</li>
                        ))}
                    </ul>
                </div>

            
                <div className='space-y-4  ml-12'>
                    <h3 className="text-[24px] font-semibold text-white">FOLLOW US</h3>
                    <div className='flex gap-4'>
                        <SocialIcons icon={FaFacebookF} />
                        <SocialIcons icon={FaInstagram} />
                        <SocialIcons icon={FaGithub} />
                        <SocialIcons icon={FiTwitter} />
                    </div>
                  
                       <div className="flex gap-3">
                        <Input placeholder="type here email"  />
                       <input className="px-4 py-2 bg-sky-500 rounded text-white text-[18px] cursor-pointer" type="submit" value="Submit" />
                       </div>
                </div>

            </div>
            
          
            <div className='text-center mt-10 text-[18px] text-gray-300 py-2'>
                <p>&copy; 2025 Hirred. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
