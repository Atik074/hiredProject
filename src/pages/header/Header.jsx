import { Button } from "@/components/ui/button";
import Logo from "../../../public/logo.png"
import { TbLogin2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/hooks/AuthContext";



const Header = () => {
    const {user , signOutUser} = useContext(AuthContext)

   
    const handleSignOut =()=>{
        signOutUser()
        .then()
        .catch(err=>{
            const error = err.message 
              console.log("err from header" , error)
             
          })
    }

    return (
        <div className="bg-black py-2 flex items-center justify-center">
            <div className="logo ">
                <img className="w-[9%]" src={Logo} alt="picture" />
            </div>
           
               <Button variant="green" size="lg" >Post a Job</Button> 
               {user ? <Link 
                 onClick={handleSignOut}
               to="/login">
             <Button variant="destructive" size="lg">
               <TbLogin2/>LogOut
                </Button>
             </Link> : 
             <Link to="/login">
             <Button variant="destructive" size="lg">
               <TbLogin2/>Login
                </Button>
             </Link> }
             
           
       
           
             
        </div>
    );
};

export default Header;