import Application from "./Application";
import JobOffer from "./JobOffer";
import Notification from "./Notification";

const UserDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 my-24">
   
      <header className="bg-sky-600 text-white p-6 rounded-lg flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-xl font-semibold text-center sm:text-left">
          Welcome to Your Dashboard
        </h1>
      </header>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  sm:p-8">
        <Application />
        <Notification />
        <JobOffer />
      </div>
    </div>
  );
};

export default UserDashboard;
