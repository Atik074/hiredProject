import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RxCross2 } from "react-icons/rx";


const JobAppliedModal = ({setShowModal}) => {
 

  
    return (
        <div className=" fixed inset-0  mx-auto   z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center">
     

         <form className=" bg-zinc-900 px-20 py-10 rounded-md shadow-2xl">
          
      
         <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
        <Label htmlFor="name">Your Name</Label>
        <Input type="name" id="name" placeholder="name" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 ">
        <Label htmlFor="email">Your Email</Label>
        <Input type="email" id="email" placeholder="Email" />
        <div className="grid w-full gap-2">


        <div className="grid w-full max-w-sm items-center gap-1.5 mb-3 mt-3">
        <Label htmlFor="number">Your Phone Number</Label>
        <Input type="number" id="number" placeholder="phone number" />
        </div>

        

        <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
       <Label htmlFor="picture">Your resume</Label>
       <Input id="picture" type="file" />
       </div>


    
      <div className="grid w-full gap-1.5 mb-3">
      <Label htmlFor="message">Say, something</Label>
      <Textarea placeholder="Shortly ,type your extra creativity." id="message" />
    </div>
    
      <div className="grid w-full gap-1.5 mb-3">
        <Button className="text-xl" variant="default" size="lg">submit</Button>
    </div>
      
     </div>
        </div>
       
         </form>

         <RxCross2
          onClick={()=>setShowModal(false)}
          size={35}
          className="absolute top-[40px] ml-[428px] p-1 text-center rounded-lg border border-white bg-white hover:bg-[#f1ecec] hover:border hover:rounded-full cursor-pointer "
        /> 
       
      </div>
    );
};

export default JobAppliedModal;