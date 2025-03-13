import { FcManager } from "react-icons/fc";

const JobOffer = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex gap-2 ">
             <FcManager className="text-4xl"/>
             <h2 className="text-2xl sm:text-2xl font-semibold mb-6">Job Offer</h2>
             </div>
             <p className="text-lg text-gray-600">No job offer has been yet.</p>
      
      </div>
    );
};

export default JobOffer;