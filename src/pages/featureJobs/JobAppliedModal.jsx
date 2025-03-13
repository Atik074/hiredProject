import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { JobDataContext } from "@/context/AuthContext";
import { useContext } from "react";
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
        const { name, email, file, message } = data;
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
          message,
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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center overflow-hidden">
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-zinc-900 px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-14 rounded-lg shadow-lg w-full max-w-lg overflow-auto"
      >
          <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          Apply for {title}
        </h2>
        <div className="grid w-full gap-4 mb-4">
          <Label htmlFor="name">Your Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Your Name"
            {...register("name", { required: true, maxLength: 20 })}
            className="w-full p-3 text-sm rounded-md bg-white border border-zinc-600 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="grid w-full gap-4 mb-4">
          <Label htmlFor="email">Your Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full p-3 text-sm rounded-md bg-white border border-zinc-600 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="grid w-full gap-4 mb-4">
          <Label htmlFor="picture">Your Resume (PDF only)</Label>
          <Input
            id="picture"
            type="file"
            accept=".pdf"
            {...register("file", { required: true })}
            className="w-full p-3 text-sm rounded-md bg-white border border-zinc-600 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="grid w-full gap-4 mb-4">
          <Label htmlFor="message">Why are you perfect ?</Label>
          <Textarea
            id="message"
            placeholder="Message for application"
            {...register("message", { required: true })}
            className="w-full p-3 text-sm rounded-md bg-white border border-zinc-600 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="grid w-full gap-4 mb-4">
          <button className="text-lg py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all w-full sm:w-auto">
            Confirm
          </button>
        </div>
      </form>

      <RxCross2
        onClick={() => setShowModal(false)}
        size={35}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-center rounded-lg border border-white bg-white hover:bg-[#f1ecec] hover:border hover:rounded-full cursor-pointer"
      />
    </div>
  );
};

export default JobAppliedModal;
