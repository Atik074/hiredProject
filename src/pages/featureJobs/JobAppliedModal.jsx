import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { JobDataContext } from "@/context/AuthContext";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const JobAppliedModal = ({ setShowModal }) => {
  const { job } = useContext(JobDataContext);
  const { post_name, title } = job;
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
 
  // Handle applied job data
  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      title: "Do you want to apply?",
      text: "Once you submit, you can't change",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, apply!",
    }).then((result) => {
      if (result.isConfirmed) {
        const { name, email, file , message} = data;
        const resumeFile = file[0];

        // Store the PDF 
        const reader = new FileReader();
        reader.onload = () => {
          localStorage.setItem("resumeFile", reader.result);
          
        };
        reader.readAsDataURL(resumeFile);

        const jobWithUserInfo = {
          name,
          email,
          post_name,
          title,
          message ,
          resume: reader.result, 
        };

        let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
        appliedJobs.push(jobWithUserInfo);

        localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

        Swal.fire({
          title: "Applied!",
          text: "Thank you! Your application has been submitted.",
          icon: "success",
        });

        setShowModal(false);
        navigate("/");
      }
    });
  };

  return (
    <div className="fixed inset-0 mx-auto z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-zinc-900 px-4 py-6 sm:px-10 sm:py-10 md:px-20 md:py-14 rounded-md shadow-2xl w-full max-w-lg"
      >
        <div className="grid w-full items-center gap-4 mb-3">
          <Label htmlFor="name">Your Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="name"
            {...register("name", { required: true, maxLength: 20 })}
          />
        </div>

        <div className="grid w-full items-center gap-4 mb-3">
          <Label htmlFor="email">Your Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </div>
        

        <div className="grid w-full items-center gap-4 mb-3">
          <Label htmlFor="picture">Your Resume (PDF only )</Label>
          <Input
            id="picture"
            type="file"
            accept=".pdf"
            {...register("file", { required: true })}
          />
        </div>

      

        <div className="grid w-full items-center gap-4 mb-3">
          <Label htmlFor="message">Send me a Feedback</Label>
          <Textarea
            id="message"
            placeholder="Send me message for our application"
            {...register("message" ,{ required: true })}
          />
        </div>

        <div className="grid w-full gap-4 mb-3">
          <button className="text-xl py-2 bg-zinc-900 border border-white text-white rounded-md w-full sm:w-auto">
            Confirm
          </button>
        </div>
      </form>

      <RxCross2
        onClick={() => setShowModal(false)}
        size={35}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-1 text-center rounded-lg border border-white bg-white hover:bg-[#f1ecec] hover:border hover:rounded-full cursor-pointer"
      />
    </div>
  );
};

export default JobAppliedModal;
