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
    <div className="md:flex items-center justify-between shadow-md sm-min:flex  sm:px-4 px-4 md:px-6 lg:px-8">
      {/* Logo */}
      <div className="flex justify-center md:w-[15%] sm:w-[40%] sm:min:w-[110px]">
        <img className="w-auto sm:min-w-[110px] md:w-[80%]" src={Logo} alt="Logo" />
      </div>

      {/* Button and User Avatar Section */}
      <div className="flex items-center space-x-4 md:space-x-6 justify-center md:justify-end w-full">
        {/* Post a Job Button */}
        <Link to="/postjob">
        <Button className="hidden md:block" variant="green" size="lg">
          Post a Job
        </Button>
        </Link>

        <Link to="/adminlogin">
        <Button className="hidden md:block" variant="green" size="lg">
          Admin Login
        </Button>
        </Link>
       

        {/* User Avatar and Login */}
        {user ? (
          <Link onClick={handleUserModal} to="/">
            <div className="relative">
              {user?.photoURL ? (
                <Avatar className="relative w-[50px] h-[50px] mx-1">
                  <AvatarImage
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className="w-full h-full"
                    src={user?.photoURL}
                    alt="profileImage"
                  />
                </Avatar>
              ) : (
                <Avatar className="relative w-[50px] h-[50px] border-2 border-white">
                  <img
                    src="https://shorturl.at/32OXF"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    alt="profileImage"
                  />
                </Avatar>
              )}

              {isHover && !showModal && (
                <div className="bg-[#a19999c1] rounded absolute top-[68px] right-[40px] text-center text-white p-4">
                  {user?.displayName && <p>{user?.displayName}</p>}
                  <p>{user?.email}</p>
                </div>
              )}

              {showModal && (
                <UserModal onCloseModal={handleUserModal} onSignOut={handleSignOut} />
              )}
            </div>
          </Link>
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
