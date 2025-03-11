const ManageBoard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center mt-5 px-4">
      {[
        { label: "Total Jobs", count: 970 },
        { label: "All Users", count: 768 },
        { label: "All Applied", count: 368 },
      ].map((item, index) => (
        <div
          key={index}
          className="border-2 border-sky-400 rounded-xl flex justify-center items-center p-4 h-[100px] shadow-md"
        >
          <h2 className="text-lg sm:text-xl md:text-3xl text-sky-600 font-semibold text-center">
            {item.label}: {item.count}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ManageBoard;
