import SocialIcons from '@/components/constantUi/SocialIcons';
import { Input } from '@/components/ui/input';
import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const location = ["Dhaka", "San Francisco", "Los Angeles", "New York", "Chicago", "San Diego", "Portland", "Seattle", "Austin"];

const Footer = () => {
    return (
        <div className="bg-[#7b7878] pt-10 px-4">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Company Information Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">HIRRED</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Jobs are shown here. Select the job according to your skill, apply by clicking on & Apply.
                        If you are eligible, this is your best platform. Highlight your skills and get your dream job.
                    </p>
                </div>

                {/* Locations Section */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-white">EJOBS IN</h3>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {location.map((item) => (
                            <li
                                key={item}
                                className="text-lg text-gray-300 hover:underline hover:text-white cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media and Newsletter Section */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-white">FOLLOW US</h3>
                    <div className="flex gap-4 mb-4">
                        <SocialIcons icon={FaFacebookF} />
                        <SocialIcons icon={FaInstagram} />
                        <SocialIcons icon={FaGithub} />
                        <SocialIcons icon={FiTwitter} />
                    </div>

                    {/* Newsletter Signup */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Input placeholder="Type your email" className="flex-1" />
                        <input
                            className="px-4 py-2 bg-sky-500 rounded text-white text-lg cursor-pointer transition-transform transform hover:scale-105"
                            type="submit"
                            value="Submit"
                        />
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="text-center mt-10 text-lg text-gray-300 py-4 border-t border-gray-500">
                <p>&copy; 2025 Hirred. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
