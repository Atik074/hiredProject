import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { TbLogout } from "react-icons/tb";


const UserModal = ({ onCloseModal,onSignOut }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-80 z-40 text-white bg-[#747d8c] rounded absolute   top-[68px] right-[40px]  p-4">
      <div className="flex  justify-between ">
        <p className="text-xl mb-6">{user?.email}</p>
        <RxCross2
          onClick={onCloseModal}
          size={35}
          className="p-1 text-center rounded-full border border-white hover:bg-gray-500 "
        />
      </div>
     

     <div>
      {user?.photoURL !== null ? (
        <Avatar className="w-[50px] h-[50px] mx-auto">
          <AvatarImage src={user?.photoURL} alt="profileImage" />
        </Avatar>
      ) : (
        <Avatar className="w-[50px] h-[50px] mx-auto border-2 border-white mb-3">
          <img src="https://shorturl.at/32OXF" alt="profileImage" />
        </Avatar>
      )}

          {
             user?.displayName  && <p className="text-md text-center mt-1 font-normal mb-2">{user.displayName}</p>
          }

          <Button onClick={onSignOut} className="mx-[90px]" variant="default" size="sm">
            <TbLogout/>
            Log out</Button>

    </div>

    </div>
  );
};

export default UserModal;
