import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const JobAppliedModal = ({setShowModal}) => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  //handle applied job data
  const onSubmit = (data) =>{
    Swal.fire({
      title: "Do you want to apply  ?",
      text: "Once you submit, you can't change",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, apply !"
    }).then((result) => {
      if (result.isConfirmed) {
          console.log("data for job modal" ,data)
        Swal.fire({
          title: "Applied!",
          text: "Thank you! Your application has been submitted.",
          icon: "success"
          
        }
       
      );
        setShowModal(false)
        navigate('/')
       
      }
    });

  }
 

  
    return (
        <div className=" fixed inset-0  mx-auto   z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center">
     

         <form onSubmit={handleSubmit(onSubmit)} className=" bg-zinc-900 px-20 py-10 rounded-md shadow-2xl">
          
      
         <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
        <Label htmlFor="name">Your Name</Label>
        <Input type="name" id="name" placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 ">
        <Label htmlFor="email">Your Email</Label>
        <Input type="email" id="email" placeholder="Email" {...register("email", { required: true})}/>
        <div className="grid w-full gap-2">


        <div className="grid w-full max-w-sm items-center gap-1.5 mb-3 mt-3">
        <Label htmlFor="number">Your Phone Number</Label>
        <Input type="number" id="number" placeholder="phone number" {...register("number", { required: true})} />
        </div>

        

        <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
       <Label htmlFor="picture">Your resume</Label>
       <Input id="picture" type="file" {...register("file", { required: true})} />
       </div>


    
      <div className="grid w-full gap-1.5 mb-3">
      <Label htmlFor="message">Say, something</Label>
      <Textarea type="message" placeholder="Shortly ,type your extra creativity.( optional!)" id="message"   />
    </div>
    
      <div className="grid w-full gap-1.5 mb-3">
        <button className="text-xl py-2 bg-zinc-900 border border-white text-white" >Confirm</button>
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