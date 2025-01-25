import { useEffect, useState } from "react";


const useJobData = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: " data is fetchig...",
      });
      setError(null);

      const response = await fetch('/src/api.json');
     
      const jobData = await response.json();
           console.log(jobData)
          setJobs(jobData);


    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    jobs,
     setJobs,
     loading,
     error,
  };
};

export default useJobData;
