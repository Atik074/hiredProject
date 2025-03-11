const CreateJob = ({
  onSubmit,
  newJob,
  onRequirementsChange,
  onInputChange,
  setShowForm,
  isEdit,  
  onReset
}) => {
  return (
      <form
          className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4"
          onSubmit={onSubmit}
      >
          <h3 className="text-xl font-semibold">Create New Job Post</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="form-group">
                  <label className="block text-gray-700">Job Title</label>
                  <input
                      type="text"
                      name="title"
                      value={newJob.title}
                      onChange={onInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                  />
              </div>

              <div className="form-group">
                  <label className="block text-gray-700">Image URL</label>
                  <input
                      type="text"
                      name="image"
                      value={newJob.image}
                      onChange={onInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                  />
              </div>

              <div className="form-group">
                  <label className="block text-gray-700">Vacancy</label>
                  <input
                      type="text"
                      name="vacancy"
                      value={newJob.vacancy}
                      onChange={onInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                  />
              </div>

              <div className="form-group">
                  <label className="block text-gray-700">Job Post Name</label>
                  <input
                      type="text"
                      name="post_name"
                      value={newJob.post_name}
                      onChange={onInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                  />
              </div>

              <div className="form-group">
                  <label className="block text-gray-700">Job Type</label>
                  <select
                      name="job_type"
                      value={newJob.job_type}
                      onChange={onInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                  >
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Contract">Contract</option>
                  </select>
              </div>

              <div className="form-group sm:col-span-2">
                  <label className="block text-gray-700">Requirements</label>
                  {newJob.requirements.map((req, index) => (
                      <input
                          key={index}
                          type="text"
                          name={`requirement-${index}`}
                          value={req}
                          onChange={(e) => onRequirementsChange(e, index)}
                          className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                          placeholder={`Requirement ${index + 1}`}
                          required
                      />
                  ))}
              </div>

              <div className="form-group sm:col-span-2">
                  <label className="block text-gray-700">Experience Required</label>
                  <input
                      type="text"
                      name="experience_required"
                      value={newJob.experience_required}
                      onChange={onInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                  />
              </div>

              <div className="form-group sm:col-span-2">
                  <label className="block text-gray-700">Salary Range</label>
                  <input
                      type="text"
                      name="salary_range"
                      value={newJob.salary_range}
                      onChange={onInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                  />
              </div>

              <div className="form-group sm:col-span-2">
                  <label className="block text-gray-700">Category</label>
                  <input
                      type="text"
                      name="category"
                      value={newJob.category}
                      onChange={onInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                  />
              </div>

              <div className="form-group sm:col-span-2">
                  <label className="block text-gray-700">Description</label>
                  <textarea
                      name="description"
                      value={newJob.description}
                      onChange={onInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                  />
              </div>

              <div className="form-group sm:col-span-2">
                  <label className="block text-gray-700">Location</label>
                  <input
                      type="text"
                      name="location"
                      value={newJob.location}
                      onChange={onInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                  />
              </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row justify-between gap-4">
              <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 w-full sm:w-auto"
              >
                  {isEdit ? " Edit Job" : "Create Job"}
              </button>

              <button
                  type="button"
                  onClick={() => {
                      onReset();
                      setShowForm(false);
                  }}
                  className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition duration-300 w-full sm:w-auto"
              >
                  Cancel
              </button>
          </div>
      </form>
  );
};

export default CreateJob;
