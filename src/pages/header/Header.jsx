import { Button } from "@/components/ui/button";
import Logo from "../../assets/logo-dark.png";
import { TbLogin2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import UserModal from "./UserModal";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isHover, setIsHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const role = localStorage.getItem("role");

  // Handle sign out
  const handleSignOut = () => {
    localStorage.removeItem('user');
    signOutUser()
      .then()
      .catch((err) => {
        const error = err.message;
        console.log("Error from header:", error);
      });
  };

  // Handle user modal
  const handleUserModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex items-center justify-between shadow-md px-4 py-2 md:px-6 lg:px-8">
      {/* Logo */}
      <div className="flex justify-center md:w-[15%] sm:w-[40%] sm:min-w-[110px]">
        <Link to="/">
        <img className="w-auto sm:min-w-[110px] md:w-[80%] lg:w-[70%]" src={Logo} alt="Logo" />
        </Link>
       
      </div>

      {/* Button and User Avatar Section */}
      <div className="flex items-center space-x-4 sm:space-x-6 justify-center sm:justify-end w-full">
        {role === "admin" ? (
          <Link to="/admin-dashboard">
            <Button className="py-3" variant="green" size="lg">
              Admin Dashboard
            </Button>
          </Link>
        ) : (
          <Link to="/admin-dashboard">
            <Button  className="py-3" variant="green" size="lg">
              Admin Login
            </Button>
          </Link>
        )}

        {/* User Avatar and Login */}
        {user ? (
          <div onClick={handleUserModal} className="relative">
            {user?.photoURL ? (
              <Avatar className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] mx-1">
                <AvatarImage
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  className="w-full h-full"
                  src={user?.photoURL}
                  alt="profileImage"
                />
              </Avatar>
            ) : (
              <Avatar className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] border-2 border-white">
                <img
                  src="https://shorturl.at/32OXF"
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  alt="profileImage"
                />
              </Avatar>
            )}

            {isHover && !showModal && (
              <div className="bg-[#a19999c1] rounded absolute top-[55px] sm:top-[68px] right-0 sm:right-[40px] text-center text-white p-2 sm:p-4 z-50">
                {user?.displayName && <p>{user?.displayName}</p>}
                <p>{user?.email}</p>
              </div>
            )}

            {showModal && (
              <UserModal onCloseModal={handleUserModal} onSignOut={handleSignOut} />
            )}
          </div>
        ) : (
          <Link to="/login">
            <Button className="md:flex" variant="destructive" size="lg">
              <TbLogin2 />
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
