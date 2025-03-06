const ManageBoard = () => {
    return (
      <div className="flex flex-wrap gap-5 justify-center mt-5">
        <div className="border-2 border-sky-400 w-full sm:w-[48%] md:w-[32%] h-[80px] rounded-xl flex justify-center items-center">
          <h2 className="text-xl md:text-3xl text-sky-600 font-semibold">
            Total Jobs: 970
          </h2>
        </div>
        <div className="border-2 border-sky-400 w-full sm:w-[48%] md:w-[30%] h-[80px] rounded-xl flex justify-center items-center">
          <h2 className="text-xl md:text-3xl text-sky-600 font-semibold">
            All Users: 768
          </h2>
        </div>
        <div className="border-2 border-sky-400 w-full sm:w-[48%] md:w-[30%] h-[80px] rounded-xl flex justify-center items-center">
          <h2 className="text-xl md:text-3xl text-sky-600 font-semibold">
            All Applied: 368
          </h2>
        </div>
      </div>
    );
  };
  
  export default ManageBoard;
  