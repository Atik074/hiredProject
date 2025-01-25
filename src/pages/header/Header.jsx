import { Button } from "@/components/ui/button";
import Logo from "../../assets/logo-dark.png";
import { TbLogin2 } from "react-icons/tb";
import { Link} from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import UserModal from "./UserModal";



const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isHover, setisHover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  

  //handle sign out
  const handleSignOut = () => {
    signOutUser()
      .then()
      .catch((err) => {
        const error = err.message;
        console.log("err from header", error);
      });
  };

  //handle user modal
  const handleUserModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="py-2 flex items-center justify-center">
      <div className="logo ">
        <img className="w-[9%]" src={Logo} alt="picture" />
      </div>

      <Button variant="green" size="lg">
        Post a Job
      </Button>
      {user ? (
        <Link onClick={handleUserModal} to="/">
          {user?.photoURL !== null ? (
            <Avatar className="relative w-[50px] h-[50px]">
              <AvatarImage
                onMouseEnter={() => setisHover(true)}
                onMouseLeave={() => setisHover(false)}
                className="w-full h-full"
                src={user?.photoURL}
                alt="profileImage"
              />
            </Avatar>
          ) : (
            <Avatar className="relative w-[50px] h-[50px] border-2 border-white">
              <img
                src="https://shorturl.at/32OXF"
                onMouseEnter={() => setisHover(true)}
                onMouseLeave={() => setisHover(false)}
                alt="profileImage"
              />
            </Avatar>
          )}

          {isHover && showModal === false && (
            <div className="bg-[#a19999c1] rounded absolute   top-[78px] right-[43px] text-center text-white p-4">
              {user?.displayName && <p>{user?.displayName}</p>}
              <p>{user?.email}</p>
            </div>
          )}

          {showModal && (
            <UserModal
              onCloseModal={handleUserModal}
              onSignOut={handleSignOut}
            />
          )}
        </Link>
      ) : (
        <Link to="/login">
          <Button variant="destructive" size="lg">
            <TbLogin2 />
            Login
          </Button>
        </Link>
      )}


    </div>
  );
};

export default Header;
