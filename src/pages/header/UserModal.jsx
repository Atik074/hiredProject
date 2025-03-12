import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";


const UserModal = ({ onCloseModal,onSignOut }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-80 z-40 text-white bg-[#747d8c] rounded absolute   top-[70px] right-[-15px]   p-4 overflow-hidden">

  

     <div>
     <RxCross2
          onClick={onCloseModal}
          size={35}
          className="p-1 mx-[260px] rounded-full border border-white hover:bg-gray-500   "
        />
      {user?.photoURL !== null ? (
        <Avatar className="w-[50px] h-[50px] mx-auto">
          <AvatarImage src={user?.photoURL} alt="profileImage" />
        </Avatar>
      ) : (
        <Avatar className="w-[50px] h-[50px] mx-auto border-2 border-white mb-3">
          <img src="https://shorturl.at/32OXF" alt="profileImage" />
        </Avatar>
      )}

         <p className="text-xl">{user?.email}</p>
          {
             user?.displayName  && <p className="text-lg  mt-1 font-normal">{user.displayName}</p>
          }
             <Link to="/" className="text-xl hover:text-black text-center text-white ">My Dashboard</Link>

          <Button onClick={onSignOut} className="mx-[178px]" variant="default" size="sm">
            <TbLogout/>
            Log out</Button>

    </div>

    

    </div>
  );
};

export default UserModal;
