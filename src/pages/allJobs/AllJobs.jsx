
const AllJobs = () => {
    return (
        <div className="container grid grid-cols-[250px,1fr] mt-12  h-screen gap-20">
              <div className="sidebar border border-red-600">
                side bar coming..
                    <h2 className="text-xl mb-3 border-b-2">Industry</h2>
                  <div className="flex items-center  gap-2">
                    <input className="w-4 h-4 border-2 border-sky-700"  type="checkbox" name="checkbox" id="checkbox" />
                    <label className="text-[19px]">Software</label>
                  </div>
                  <div className="flex items-center  gap-2">
                    <input className="w-4 h-4 border-2 border-sky-700"  type="checkbox" name="checkbox" id="checkbox" />
                    <label className="text-[19px]">Software</label>
                  </div>
                  <div className="flex items-center  gap-2">
                    <input className="w-4 h-4 border-2 border-sky-700"  type="checkbox" name="checkbox" id="checkbox" />
                    <label className="text-[19px]">Software</label>
                  </div>
                  <div className="flex items-center  gap-2">
                    <input className="w-4 h-4 border-2 border-sky-700"  type="checkbox" name="checkbox" id="checkbox" />
                    <label className="text-[19px]">Software</label>
                  </div>
                  
                </div>


              <div className="mainPart border border-green-600"></div>
        </div>
    );
};

export default AllJobs;