import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";

const UserModal = ({ onCloseModal, onSignOut }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-80 md:w-96 z-50 text-black bg-white rounded-lg shadow-xl absolute top-[70px] right-[-15px] p-6 overflow-hidden transform transition duration-300 ease-out scale-95 hover:scale-100">
      <div className="relative">
        {/* Close Button */}
        <RxCross2
          onClick={onCloseModal}
          size={40}
          className="p-2 absolute top-3 right-3 rounded-full   bg-[#dcdde1] hover:bg-[#c8d2db] hover:text-red-600 cursor-pointer transition-all ease-in-out"
        />

        {/* Avatar */}
        <div className="flex justify-center mb-4">
          {user?.photoURL !== null ? (
            <Avatar className="w-[80px] h-[80px] border-2 border-white shadow-md transition-all duration-200 transform hover:scale-105">
              <AvatarImage src={user?.photoURL} alt="profileImage" />
            </Avatar>
          ) : (
            <Avatar className="w-[80px] h-[80px] border-2 border-white shadow-md transition-all duration-200 transform hover:scale-105">
              <img
                src="https://shorturl.at/32OXF"
                alt="profileImage"
                className="rounded-full"
              />
            </Avatar>
          )}
        </div>

    
        <p className="text-xl font-semibold text-center text-gray-800">{user?.email}</p>

        {user?.displayName && (
          <p className="text-lg text-center text-gray-600 mt-1">{user.displayName}</p>
        )}

      
        <Link
          to="/user-dashboard"
          className="block text-xl text-center text-blue-500 hover:text-blue-700 mt-4 transition duration-200"
        >
          My Dashboard
        </Link>

        {/* Log Out Button */}
        <Button
          onClick={onSignOut}
          className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center border-none text-xl"
          variant="default"
          size="lg"
        >
          <TbLogout size={20} />
          <span className="ml-2">Log Out</span>
        </Button>
      </div>
    </div>
  );
};

export default UserModal;
